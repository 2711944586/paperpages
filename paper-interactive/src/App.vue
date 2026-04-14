<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const nav = [
  { path: '/', label: '首页', hint: 'Start' },
  { path: '/paper', label: '论文工作区', hint: 'Paper' },
  { path: '/review', label: '综述骨架', hint: 'Review' },
  { path: '/timeline', label: '时间线', hint: 'Timeline' },
  { path: '/network', label: '关系图', hint: 'Graph' },
  { path: '/compare', label: '对读器', hint: 'Compare' },
  { path: '/library', label: '文献库', hint: 'Library' },
]

const isActive = (path: string) => route.path === path || (path !== '/' && route.path.startsWith(`${path}/`))

const pageMeta = computed(() => {
  const meta = route.meta as {
    title?: string
    kicker?: string
    intro?: string
  }

  return {
    title: meta.title ?? '首页',
    kicker: meta.kicker ?? 'paperpages',
    intro: meta.intro ?? '文献综述、参考文献与论文稿件的一体化静态站点。',
  }
})
</script>

<template>
  <div class="shell">
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <header class="topbar">
      <div class="topbar-inner">
        <router-link to="/" class="brand">
          <span class="brand-kicker">Research Reference Atlas</span>
          <strong>paperpages</strong>
          <span class="brand-sub">文献综述、参考文献与论文稿件的统一展示站</span>
        </router-link>

        <nav class="nav">
          <router-link
            v-for="item in nav"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <span class="nav-hint">{{ item.hint }}</span>
            <span>{{ item.label }}</span>
          </router-link>
        </nav>
      </div>
    </header>

    <main class="main">
      <section class="page-intro">
        <div class="page-copy">
          <p class="eyebrow">{{ pageMeta.kicker }}</p>
          <h1 class="page-title">{{ pageMeta.title }}</h1>
          <p class="page-note">{{ pageMeta.intro }}</p>
        </div>
      </section>

      <router-view v-slot="{ Component, route: viewRoute }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="viewRoute.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
:root {
  --bg: #f2ede4;
  --bg-strong: #f7f3eb;
  --paper: rgba(255, 253, 248, 0.84);
  --paper-strong: rgba(255, 248, 239, 0.94);
  --line: rgba(82, 61, 42, 0.14);
  --line-strong: rgba(82, 61, 42, 0.28);
  --text: #261f18;
  --text-muted: #665d54;
  --text-soft: #8b7f74;
  --accent: #9d5832;
  --accent-deep: #703718;
  --accent-alt: #295b57;
  --accent-gold: #d4b27a;
  --shadow: 0 24px 70px rgba(67, 44, 23, 0.09);
  --radius-xl: 28px;
  --radius-lg: 20px;
  --radius-md: 14px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--text);
  background:
    radial-gradient(circle at 0% 0%, rgba(194, 120, 87, 0.18), transparent 32%),
    radial-gradient(circle at 100% 8%, rgba(47, 93, 85, 0.16), transparent 30%),
    linear-gradient(180deg, #f6f1e8 0%, #f2ede4 54%, #f8f4ec 100%);
  font-family: "Avenir Next", "IBM Plex Sans", "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
}

.shell {
  position: relative;
  min-height: 100vh;
}

.ambient {
  position: fixed;
  width: 34rem;
  height: 34rem;
  border-radius: 999px;
  filter: blur(42px);
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
}

.ambient-left {
  top: -10rem;
  left: -10rem;
  background: rgba(194, 120, 87, 0.18);
}

.ambient-right {
  top: 16rem;
  right: -10rem;
  background: rgba(47, 93, 85, 0.16);
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(82, 61, 42, 0.1);
  backdrop-filter: blur(18px) saturate(1.16);
  background: rgba(244, 239, 231, 0.78);
}

.topbar-inner,
.main {
  max-width: 1380px;
  margin: 0 auto;
  padding-left: 28px;
  padding-right: 28px;
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding-top: 18px;
  padding-bottom: 18px;
}

.brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
  text-decoration: none;
}

.brand-kicker {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-alt);
}

.brand strong {
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 30px;
  letter-spacing: 0.04em;
  color: var(--accent-deep);
}

.brand-sub {
  font-size: 13px;
  color: var(--text-muted);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}

.nav-link {
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid transparent;
  color: var(--text-muted);
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  transform: translateY(-1px);
  border-color: rgba(157, 88, 50, 0.22);
  background: rgba(255, 252, 246, 0.74);
  color: var(--accent-deep);
}

.nav-hint {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.main {
  position: relative;
  z-index: 1;
  padding-top: 28px;
  padding-bottom: 56px;
}

.page-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
  margin-bottom: 28px;
}

.page-copy {
  max-width: 58rem;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--accent-alt);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.page-title {
  margin: 0;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: clamp(34px, 4.6vw, 54px);
  line-height: 1.02;
}

.page-note {
  margin: 12px 0 0;
  max-width: 44rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.panel {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 248, 239, 0.9));
  box-shadow: var(--shadow);
}

.panel::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.75), transparent);
}

.panel-tight {
  padding: 22px;
}

.hero-grid,
.split-layout,
.library-shell,
.compare-grid {
  display: grid;
  gap: 18px;
}

.hero-grid {
  grid-template-columns: minmax(0, 1.3fr) minmax(320px, 0.9fr);
}

.split-layout,
.compare-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.library-shell {
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
}

.grid {
  display: grid;
  gap: 18px;
}

.grid-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metric-card,
.story-card,
.info-card,
.selector-card,
.paper-card,
.chart-box {
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.72);
}

.metric-card,
.story-card,
.info-card,
.selector-card,
.paper-card {
  padding: 22px;
}

.chart-box {
  padding: 18px;
}

.metric-label {
  color: var(--text-soft);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.metric-value {
  margin: 12px 0 6px;
  color: var(--accent-deep);
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

.metric-sub,
.story-card p,
.info-card p,
.paper-card p,
.selector-card p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.75;
}

.story-card h2,
.story-card h3,
.info-card h2,
.info-card h3,
.paper-card h2,
.paper-card h3,
.selector-card h2,
.selector-card h3 {
  margin: 0 0 10px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", "Songti SC", serif;
  font-size: 28px;
  line-height: 1.08;
}

.section-header p {
  margin: 0;
  max-width: 40rem;
  color: var(--text-muted);
  line-height: 1.75;
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.kicker::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
}

.pill-row,
.action-row,
.selector-row,
.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill,
.control-pill,
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1;
}

.pill {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.76);
  color: var(--text-muted);
}

.control-pill {
  border: 1px solid rgba(82, 61, 42, 0.16);
  background: rgba(255, 255, 255, 0.64);
  color: var(--text-muted);
  cursor: pointer;
  transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
}

.control-pill.active {
  border-color: rgba(157, 88, 50, 0.24);
  background: rgba(255, 248, 239, 0.86);
  color: var(--accent-deep);
}

.status-pill {
  border: 1px solid rgba(82, 61, 42, 0.12);
  background: rgba(255, 255, 255, 0.74);
  color: var(--text-muted);
}

.status-good {
  border-color: rgba(47, 93, 85, 0.24);
  background: rgba(47, 93, 85, 0.08);
  color: var(--accent-alt);
}

.status-warn {
  border-color: rgba(157, 88, 50, 0.24);
  background: rgba(255, 248, 239, 0.86);
  color: var(--accent-deep);
}

.status-muted {
  border-color: rgba(82, 61, 42, 0.12);
  background: rgba(255, 255, 255, 0.74);
  color: var(--text-muted);
}

.action-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 16px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(157, 88, 50, 0.96), rgba(112, 55, 24, 0.96));
  color: #fffdf8;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.action-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 40px rgba(112, 55, 24, 0.2);
}

.action-link-secondary {
  background: rgba(47, 93, 85, 0.1);
  color: var(--accent-alt);
}

.field {
  display: grid;
  gap: 8px;
}

.field-label {
  color: var(--text-soft);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.text-input,
.select {
  width: 100%;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(82, 61, 42, 0.18);
  background: rgba(255, 255, 255, 0.84);
  color: var(--text);
}

.toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
}

.list-stack {
  display: grid;
  gap: 12px;
}

.outline-button {
  width: 100%;
  border: 1px solid rgba(82, 61, 42, 0.12);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  padding: 18px;
  text-align: left;
  color: inherit;
  cursor: pointer;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.outline-button:hover,
.outline-button.active {
  transform: translateY(-1px);
  border-color: rgba(157, 88, 50, 0.24);
  background: rgba(255, 248, 239, 0.86);
}

.stream-card {
  position: relative;
  border-left: 3px solid var(--stream-accent, var(--accent-gold));
}

.paper-card.active {
  border-color: rgba(157, 88, 50, 0.28);
  background: rgba(255, 248, 239, 0.84);
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 14px 0;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid rgba(82, 61, 42, 0.08);
}

.table th {
  width: 9rem;
  color: var(--text-soft);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.table td {
  color: var(--text-muted);
  line-height: 1.75;
}

.note-box,
.empty-state {
  padding: 18px 20px;
  border-radius: 18px;
  line-height: 1.75;
}

.note-box {
  border: 1px dashed rgba(157, 88, 50, 0.28);
  background: rgba(255, 248, 239, 0.76);
  color: var(--text-muted);
}

.empty-state {
  border: 1px dashed rgba(82, 61, 42, 0.16);
  background: rgba(255, 255, 255, 0.62);
  color: var(--text-soft);
}

.muted {
  color: var(--text-muted);
}

.chart-canvas {
  width: 100%;
  min-height: 280px;
}

.formula-block {
  margin: 6px 0 10px;
  padding: 16px 18px;
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid rgba(47, 93, 85, 0.18);
  background: linear-gradient(180deg, rgba(241, 248, 246, 0.94), rgba(232, 241, 238, 0.9));
  color: var(--accent-alt);
}

.formula-inline {
  color: var(--accent-alt);
}

mjx-container {
  max-width: 100%;
}

.formula-block mjx-container,
.formula-inline mjx-container {
  margin: 0 !important;
}

mjx-container[jax='SVG'] {
  overflow-x: auto;
  overflow-y: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 1080px) {
  .topbar-inner,
  .main {
    padding-left: 18px;
    padding-right: 18px;
  }

  .page-intro,
  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-grid,
  .split-layout,
  .library-shell,
  .compare-grid,
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .topbar-inner {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .brand strong {
    font-size: 25px;
  }

  .page-title {
    font-size: 36px;
  }

  .nav-link {
    padding: 8px 12px;
  }
}
</style>
