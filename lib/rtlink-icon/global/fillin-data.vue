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
    <path d="M513.1,555.2h101.1c10.7,0,21-4.3,28.6-11.8l303.3-303.3c15.8-15.8,15.8-41.4,0-57.2L845,81.8
			c-15.8-15.8-41.4-15.8-57.2,0L484.5,385.1c-7.6,7.6-11.8,17.8-11.8,28.6v101.1C472.7,537.1,490.8,555.2,513.1,555.2z" />
    <path d="M816.4,676.5H209.8c-33.4,0-60.7-27.2-60.7-60.7s27.2-60.7,60.7-60.7h141.5c22.3,0,40.4-18.1,40.4-40.4
			c0-22.4-18.1-40.4-40.4-40.4H209.8c-78,0-141.5,63.5-141.5,141.5s63.5,141.5,141.5,141.5h606.6c33.4,0,60.7,27.2,60.7,60.7
			s-27.2,60.7-60.7,60.7H391.8c-22.3,0-40.4,18.1-40.4,40.4c0,22.4,18.1,40.4,40.4,40.4h424.6c78,0,141.5-63.5,141.5-141.5
			S894.4,676.5,816.4,676.5z" />
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
