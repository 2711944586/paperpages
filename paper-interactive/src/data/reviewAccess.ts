import { literatureReviewDataset } from '@/data/literatureReview'

export interface ReviewMeta {
  sourcePath: string
  generatedFrom: string
  referenceCount: number
  sectionCount: number
  yearRange: {
    min: number
    max: number
  }
  verifiedCount: number
  downloadedCount: number
}

export interface ReviewStream {
  key: string
  label: string
  accent: string
  count: number
}

export interface ReviewMention {
  sectionId: string
  sectionTitle: string
  streamKey: string
  snippet: string
}

export interface ReviewSubsection {
  title: string
  slug: string
  summary: string
  points: string[]
}

export interface ReviewSection {
  id: string
  slug: string
  number: number
  title: string
  streamKey: string
  streamLabel: string
  accent: string
  summary: string
  subsections: ReviewSubsection[]
  points: string[]
}

export interface ReviewReference {
  id: string
  index: number
  title: string
  authors: string[]
  year: number
  venue: string
  citation: string
  doi: string | null
  arxivId: string | null
  streamKeys: string[]
  streamLabel: string
  mentionCount: number
  mentions: ReviewMention[]
  auditSection: string | null
  auditColumns: string[]
  verificationStatus: string
  downloadStatus: string
  externalUrl: string | null
  localPdf: string | null
  pdfFilename: string | null
  isCurated: boolean
}

export interface ReviewEdge {
  source: string
  target: string
  weight: number
}

export interface ReviewDataset {
  meta: ReviewMeta
  streams: ReviewStream[]
  sections: ReviewSection[]
  references: ReviewReference[]
  curatedReferences: ReviewReference[]
  relationEdges: ReviewEdge[]
  readingPath: string[]
}

export const reviewDataset = literatureReviewDataset as unknown as ReviewDataset

const supplementalStreams: ReviewStream[] = [
  { key: 'overview', label: '综述', accent: '#9f7653', count: 0 },
  { key: 'gaps', label: '研究空白', accent: '#9f7653', count: 0 },
  { key: 'conclusion', label: '结论', accent: '#6f7c89', count: 0 },
]

export const allStreams = [...reviewDataset.streams, ...supplementalStreams]
export const streamMap = new Map(allStreams.map((stream) => [stream.key, stream]))
export const referenceMap = new Map(reviewDataset.references.map((reference) => [reference.id, reference]))

export const sectionStreams = Array.from(
  new Map(reviewDataset.sections.map((section) => [section.streamKey, getStreamMeta(section.streamKey)])).values(),
)

export const streamDescriptions: Record<string, string> = {
  constructs: '从概念澄清、测量对象到过滤气泡研究边界。',
  platforms: '围绕真实平台实验、重排序干预与因果识别。',
  topology: '为结构风险诊断准备高阶网络与方向性感知工具。',
  fairness: '把曝光理解为可分配资源，转向多侧推荐与动态治理。',
  evaluation: '补齐日志、展示列表、离策略评估与公开数据基础设施。',
  gaps: '收束研究断裂、评估空白与写作约束。',
  conclusion: '论文结语、讨论与收束。',
  overview: '综述级论文、理论框架和跨章节枢纽文献。',
}

const verificationLabels: Record<string, string> = {
  verified: '已核验',
  unverified: '待核验',
}

const downloadLabels: Record<string, string> = {
  downloaded: '已入库 PDF',
  external_only: '仅外链',
  not_open_access: '非开放获取',
  not_checked: '未检查',
}

const statusTones: Record<string, 'good' | 'warn' | 'muted'> = {
  verified: 'good',
  downloaded: 'good',
  external_only: 'warn',
  not_open_access: 'muted',
  not_checked: 'muted',
}

export function getStreamMeta(streamKey: string): ReviewStream {
  return streamMap.get(streamKey) ?? { key: streamKey, label: streamKey, accent: '#8f7c6a', count: 0 }
}

export function formatAuthors(authors: readonly string[], limit = 3) {
  if (authors.length <= limit) {
    return authors.join('、')
  }
  return `${authors.slice(0, limit).join('、')} 等`
}

export function humanizeVerificationStatus(status: string) {
  return verificationLabels[status] ?? status
}

export function humanizeDownloadStatus(status: string) {
  if (downloadLabels[status]) {
    return downloadLabels[status]
  }
  if (status.startsWith('download_failed')) {
    return '下载失败'
  }
  return status
}

export function statusTone(status: string) {
  if (status.startsWith('download_failed')) {
    return 'warn'
  }
  return statusTones[status] ?? 'muted'
}

export function matchesKeyword(reference: ReviewReference, keyword: string) {
  const query = keyword.trim().toLowerCase()
  if (!query) {
    return true
  }
  return [
    reference.title,
    reference.citation,
    reference.venue,
    reference.streamLabel,
    reference.id,
    ...reference.authors,
  ]
    .join(' ')
    .toLowerCase()
    .includes(query)
}

export function buildReferenceLabel(reference: ReviewReference) {
  const source = reference.venue || '未标注来源'
  return `${reference.year} · ${source}`
}

export function relationNeighbors(referenceId: string) {
  const connected = new Set<string>()
  for (const edge of reviewDataset.relationEdges) {
    if (edge.source === referenceId) {
      connected.add(edge.target)
    }
    if (edge.target === referenceId) {
      connected.add(edge.source)
    }
  }
  return Array.from(connected)
    .map((id) => referenceMap.get(id))
    .filter((reference): reference is ReviewReference => Boolean(reference))
}
