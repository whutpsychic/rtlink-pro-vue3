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
    <path d="M805.1,63.9H535.5c18.2,0,33,14.8,33,33v33H805c4.6,0,8.4,3.8,8.4,8.4V885c0,4.6-3.8,8.4-8.4,8.4H224.5
			c-4.6,0-8.4-3.8-8.4-8.4V138.5c0-4.6,3.8-8.4,8.4-8.4h91.4V97c0-18.2,14.8-33,33-33H224.5c-41.1,0-74.5,33.4-74.5,74.5V885
			c0,41.1,33.4,74.5,74.5,74.5h580.7c41.1,0,74.5-33.4,74.5-74.5V138.5C879.7,97.4,846.2,63.9,805.1,63.9z" />
    <path
      d="M315.9,97v33v298.8c0,13,7.6,24.8,19.5,30.1c11.9,5.3,25.8,3.2,35.5-5.4l71.4-63.4l71.4,63.4c6.2,5.5,14,8.3,22,8.3
			c4.6,0,9.2-1,13.5-2.9c11.9-5.3,19.5-17.1,19.5-30.1V130V97c0-18.2-14.8-33-33-33H348.9C330.7,63.9,315.9,78.7,315.9,97z" />
    <path d="M348.9,561.7c-18.2,0-33,14.8-33,33s14.8,33,33,33h207.4c18.2,0,33-14.8,33-33s-14.8-33-33-33H348.9z" />
    <path d="M315.9,719.1c0,18.2,14.8,33,33,33h331.8c18.2,0,33-14.8,33-33s-14.8-33-33-33H348.9C330.7,686.1,315.9,700.9,315.9,719.1
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
