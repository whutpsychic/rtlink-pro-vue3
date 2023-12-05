<template>
  <!-- Generator: Adobe Illustrator 24.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" :width="`${size}`" :height="`${size}`" :fill="color"
    :style="isLinear ? 'fill:url(#lgid)' : ''">
    <defs v-if="isLinear">
      <linearGradient id="lgid" :x1="gradientPosition[0]" :y1="gradientPosition[1]" :x2="gradientPosition[2]"
        :y2="gradientPosition[3]">
        <stop v-for="(it, i) in linearGradient" :key="i" :offset="it[0]" :style="`stop-color:${it[1]};`" />
      </linearGradient>
    </defs>
    <path d="M911.6,233.2H683.5V167c-0.1-56.9-46.2-103.1-103.1-103.1h-142c-56.9,0.1-103.1,46.2-103.1,103.1v66.2H107.2
			c-19,0-34.4,15.4-34.4,34.4c0,19,15.4,34.4,34.4,34.4h80v553.2c0.1,56.9,46.2,103.1,103.1,103.1h438.2
			c56.9-0.1,103.1-46.2,103.1-103.1V302h80c19,0,34.4-15.4,34.4-34.4C946,248.6,930.6,233.2,911.6,233.2z M404.1,167
			c0-19,15.4-34.4,34.4-34.4h142c19,0,34.4,15.4,34.4,34.4v66.2H404.1V167z M762.9,855.1c0,19-15.4,34.4-34.4,34.4H290.3
			c-19,0-34.4-15.4-34.4-34.4V302h507L762.9,855.1z" />
    <path d="M599.9,762.7c19,0,34.4-15.4,34.4-34.4V491.4c0-19-15.4-34.4-34.4-34.4s-34.4,15.4-34.4,34.4v236.9
			C565.5,747.3,580.9,762.7,599.9,762.7z" />
    <path d="M418.9,762.7c19,0,34.4-15.4,34.4-34.4V491.4c0-19-15.4-34.4-34.4-34.4s-34.4,15.4-34.4,34.4v236.9
			C384.6,747.3,400,762.7,418.9,762.7z" />
  </svg>
</template>

<script>
import { defaultSize } from "../config"

export default {
  props: {
    size: { type: [String, Number], default: defaultSize },
    color: { type: String, default: '#000' },
    gradientPosition: { type: Array, default: () => ([]) },
    linearGradient: { type: Array, default: () => ([]) },
  },
  computed: {
    isLinear() {
      return (!!this.gradientPosition.length) && (!!this.linearGradient.length)
    }
  }
}
</script>
