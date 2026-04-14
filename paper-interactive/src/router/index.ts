import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
      kicker: 'Unified Research Workspace',
      intro: '以最新综述、参考文献库和论文工作区组成的统一入口。',
    },
  },
  {
    path: '/paper',
    component: () => import('@/views/PaperWorkspaceView.vue'),
    meta: {
      title: '论文总览',
      kicker: 'Manuscript Briefing',
      intro: '展示新版论文的对象分层、核心机制、理论边界与评估协议，图表与结果版位暂缓更新。',
    },
  },
  {
    path: '/paper/method',
    component: () => import('@/views/PaperMethodView.vue'),
    meta: {
      title: '方法与公式',
      kicker: 'Method & Formula',
      intro: '集中解释 TSFB、TSHM 与 SECR 的对象链条、核心公式与动作含义。',
    },
  },
  {
    path: '/paper/theory',
    component: () => import('@/views/PaperTheoryView.vue'),
    meta: {
      title: '理论解释',
      kicker: 'Theory Boundary',
      intro: '集中说明 Hodge 分解、局部旋度、命题边界与框架不能越界到的结论。',
    },
  },
  {
    path: '/paper/experiment',
    component: () => import('@/views/PaperExperimentView.vue'),
    meta: {
      title: '实验设计',
      kicker: 'Evaluation Protocol',
      intro: '集中解释数据层、标签构造、校准指标、失败判据与论文结果页的写法。',
    },
  },
  {
    path: '/review',
    component: () => import('@/views/ReviewOutlineView.vue'),
    meta: {
      title: '综述骨架',
      kicker: 'Section Navigator',
      intro: '按章节和子节组织最新综述正文。',
    },
  },
  {
    path: '/timeline',
    component: () => import('@/views/TimelineView.vue'),
    meta: {
      title: '时间线',
      kicker: 'Temporal Distribution',
      intro: '按年份和主线查看文献分布。',
    },
  },
  {
    path: '/network',
    component: () => import('@/views/NetworkView.vue'),
    meta: {
      title: '关系图',
      kicker: 'Reference Graph',
      intro: '查看章节共现形成的文献关系网络。',
    },
  },
  {
    path: '/compare',
    component: () => import('@/views/CompareView.vue'),
    meta: {
      title: '对读器',
      kicker: 'Side-by-Side Reading',
      intro: '并排比较两篇论文的主线、年份、核验和 PDF 情况。',
    },
  },
  {
    path: '/library',
    component: () => import('@/views/LibraryView.vue'),
    meta: {
      title: '文献库',
      kicker: 'Verified Reference Shelf',
      intro: '浏览全部附录文献、核验状态和本地 PDF。',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'paperpages'
  document.title = `${title} | paperpages`
})

export default router
