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
    <path d="M935.7,437.9l-238-238c-32.8-32.8-86.2-32.8-119,0L512,266.6l-66.7-66.7c-32.8-32.8-86.2-32.8-119,0l-238,238
			c-32.8,32.8-32.8,86.2,0,119L356,824.7c15.9,15.9,37,24.7,59.5,24.7c0,0,0,0,0.1,0c22.5,0,43.6-8.8,59.4-24.7l66.7-66.7l37,37
			c16.4,16.4,38,24.6,59.5,24.6s43.1-8.2,59.5-24.6l238-238C968.6,524.1,968.6,470.7,935.7,437.9z M415.5,765.2L147.7,497.5l0,0
			l238-238l66.7,66.7L340.7,437.9c-32.8,32.8-32.8,86.2,0,119l141.5,141.5L415.5,765.2z M512,385.6l141.5,141.5L541.7,639
			L400.2,497.5l0,0L512,385.6z M638.2,735.5l-37-37L713,586.7c32.8-32.8,32.8-86.2,0-119L571.5,326.1l66.7-66.7l238,238L638.2,735.5
			z" />
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
