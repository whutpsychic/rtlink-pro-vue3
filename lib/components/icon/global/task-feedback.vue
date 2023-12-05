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
    <path d="M919.8,118.5h-812c-22.4,0-40.6,18.2-40.6,40.6v609c0,22.4,18.2,40.6,40.6,40.6h142.1v60.9c0,14.1,7.3,27.1,19.2,34.5
			c6.5,4,13.9,6.1,21.3,6.1c6.2,0,12.4-1.4,18.2-4.3L503,808.7h416.7c22.4,0,40.6-18.2,40.6-40.6v-609
			C960.4,136.7,942.2,118.5,919.8,118.5z M879.2,727.5H493.5c-6.3,0-12.5,1.5-18.2,4.3l-144.2,72.1v-35.8
			c0-22.4-18.2-40.6-40.6-40.6H148.4V199.7h730.7v527.8H879.2z" />
    <polygon points="351.4,494.1 351.4,433.2 270.2,433.2 270.2,494.1 310.8,494.1 		" />
    <polygon points="554.4,494.1 554.4,433.2 473.2,433.2 473.2,494.1 513.8,494.1 		" />
    <polygon points="757.4,494.1 757.4,433.2 676.2,433.2 676.2,494.1 716.8,494.1 		" />
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
