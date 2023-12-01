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
    <path d="M512.4,63.6c-245.2,0-445.1,198.1-448.2,442.6v11.5c3.1,244.5,203,442.6,448.2,442.6c247.1,0,448.3-201.2,448.3-448.3
		C960.7,264.8,759.5,63.6,512.4,63.6z M512.4,912.8C291.2,912.8,111,733.1,111,511.4C111,290.2,290.7,110,512.4,110
		c221.7,0,401.9,180.2,401.4,401.4C913.8,732.6,734,912.8,512.4,912.8z" />
    <path d="M419,344.7c-14,0-25.5,11.5-25.5,25.5v283.6c0,14,11.5,25.5,25.5,25.5c14,0,25.5-11.5,25.5-25.5V370.1
		C444.5,356.1,433,344.7,419,344.7z" />
    <path d="M606.2,344.7c-14,0-25.5,11.5-25.5,25.5v283.6c0,14,11.5,25.5,25.5,25.5s25.5-11.5,25.5-25.5V370.1
		C631.7,356.1,620.2,344.7,606.2,344.7z" />
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
