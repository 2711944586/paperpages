<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const sections = [
  {
    path: '/paper',
    kicker: 'Overview',
    label: '论文总览',
    summary: '对象层、研究缺口、贡献和整体闭环。',
  },
  {
    path: '/paper/method',
    kicker: 'Method',
    label: '方法与公式',
    summary: 'TSFB、TSHM、SECR 的公式、变量和动作逻辑。',
  },
  {
    path: '/paper/theory',
    kicker: 'Theory',
    label: '理论解释',
    summary: '命题 1 到命题 3、假设梯度和推断边界。',
  },
  {
    path: '/paper/experiment',
    kicker: 'Protocol',
    label: '实验设计',
    summary: '标签定义、数据层、指标、失败判据和报告模板。',
  },
]

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav class="paper-section-nav">
    <router-link
      v-for="section in sections"
      :key="section.path"
      :to="section.path"
      class="paper-section-link"
      :class="{ active: isActive(section.path) }"
    >
      <span class="paper-section-kicker">{{ section.kicker }}</span>
      <strong>{{ section.label }}</strong>
      <span class="paper-section-summary">{{ section.summary }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
.paper-section-nav {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.paper-section-link {
  display: grid;
  gap: 8px;
  min-height: 132px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(82, 61, 42, 0.12);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.84), rgba(255, 249, 242, 0.92)),
    radial-gradient(circle at top right, rgba(41, 91, 87, 0.06), transparent 42%);
  color: var(--text-muted);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
}

.paper-section-link:hover,
.paper-section-link.active {
  transform: translateY(-2px);
  border-color: rgba(157, 88, 50, 0.24);
  background:
    linear-gradient(180deg, rgba(255, 252, 247, 0.96), rgba(255, 246, 234, 0.96)),
    radial-gradient(circle at top right, rgba(157, 88, 50, 0.09), transparent 46%);
  color: var(--accent-deep);
  box-shadow: 0 18px 36px rgba(112, 55, 24, 0.08);
}

.paper-section-kicker {
  color: var(--accent-alt);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.paper-section-link strong {
  font-family: Georgia, 'Times New Roman', 'Songti SC', serif;
  font-size: 22px;
  line-height: 1.15;
}

.paper-section-summary {
  color: inherit;
  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 1080px) {
  .paper-section-nav {
    grid-template-columns: 1fr;
  }

  .paper-section-link {
    min-height: auto;
  }
}
</style>
