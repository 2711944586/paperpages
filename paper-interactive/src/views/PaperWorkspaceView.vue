<script setup lang="ts">
const clearedModules = [
  '旧论文总览文案与结论性叙述',
  '旧图表图廊与旧实验图像资产',
  '旧仿真结果、旧指标表格与旧术语解释页',
  '依赖 paper_dashboard.json 的历史数据展示逻辑',
]

const reservedModules = [
  '论文标题、摘要与贡献概览',
  '最终方法框架图与关键公式',
  '实证结果总览、核心图表与显著性结论',
  '附录扩展、代码与数据、版本记录',
  '可选交互演示区与答辩入口',
]

const upcomingInputs = [
  '论文定稿正文或最终摘要版本',
  '确认后的图表编号、标题与高清导出文件',
  '最终实验表格、统计检验结果与补充材料',
  '新增交互模块需求',
]
</script>

<template>
  <div class="grid">
    <section class="panel panel-tight story-card">
      <span class="kicker">Paper Reset</span>
      <h2>论文工作区已经清空旧稿内容。</h2>
      <p>当前页面保留的是新稿接入所需的版位和模块。</p>
    </section>

    <section class="split-layout">
      <article class="panel panel-tight info-card">
        <span class="kicker">Cleared</span>
        <h3>已清除内容</h3>
        <div class="list-stack">
          <div v-for="item in clearedModules" :key="item" class="note-box">{{ item }}</div>
        </div>
      </article>

      <article class="panel panel-tight info-card">
        <span class="kicker">Reserved</span>
        <h3>预留模块</h3>
        <div class="list-stack">
          <div v-for="item in reservedModules" :key="item" class="note-box">{{ item }}</div>
        </div>
      </article>
    </section>

    <section class="panel panel-tight">
      <div class="section-header">
        <div>
          <span class="kicker">Next Inputs</span>
          <h2>接入清单</h2>
        </div>
        <p>新稿完成后，按这份清单替换当前空位。</p>
      </div>

      <div class="grid grid-2">
        <article v-for="item in upcomingInputs" :key="item" class="paper-card">
          <h3>{{ item }}</h3>
          <p>待接入</p>
        </article>
      </div>
    </section>
  </div>
</template>
