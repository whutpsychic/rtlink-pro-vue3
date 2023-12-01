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
    <path class="st1" d="M514.6,64.8c-245.3,0-445.8,200.5-445.8,445.8s200.5,445.8,445.8,445.8s445.8-200.5,445.8-445.8
			S759.9,64.8,514.6,64.8z M514.6,892.5c-210.3,0-381.9-171.6-381.9-381.9s171.6-381.9,381.9-381.9s381.9,171.6,381.9,381.9
			S724.8,892.5,514.6,892.5z" />
    <path class="st1" d="M541.9,333.9c-11.9-12.4-31.4-12.4-43.8-0.5s-12.4,31.4-0.5,43.8l101,103.1l-296.8-3.6
			c-17,0-30.9,13.4-31.4,30.4c0,17,13.4,30.9,30.4,31.4l296.8,3.6l-103.1,101c-6.2,6.2-9.3,13.9-9.3,21.6s3.1,16,8.8,22.2
			c12.4,12.4,32,12.9,43.8,0.5l156.7-153.1c12.4-11.9,12.4-31.4,0.5-43.8L541.9,333.9z" />
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