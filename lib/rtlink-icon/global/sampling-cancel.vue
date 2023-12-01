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
    <path d="M850.1,140.2h-96.6c-23.2,0-42,18.8-42,42s18.8,42,42,42h96.6c15.6,0,25.2,8.9,25.2,13.7v557.5c0,4.8-9.6,13.7-25.2,13.7
			H177.8c-15.6,0-25.2-8.9-25.2-13.7V238c0-4.8,9.6-13.7,25.2-13.7h109.3c23.2,0,42-18.8,42-42s-18.8-42-42-42H177.8
			c-60.2,0-109.3,43.9-109.3,97.8v557.5c0,53.9,49,97.8,109.3,97.8h672.3c60.2,0,109.3-43.9,109.3-97.8V238
			C959.3,184.1,910.3,140.2,850.1,140.2z" />
    <path d="M359.1,660.2c8.5,8.5,19.7,12.8,30.9,12.8c11.2,0,22.4-4.3,30.9-12.8l94-94l94,94c8.5,8.5,19.7,12.8,30.9,12.8
			s22.4-4.3,30.9-12.8c17.1-17.1,17.1-44.8,0-61.9l-94-94l94-94c17.1-17.1,17.1-44.8,0-61.9s-44.8-17.1-61.9,0l-94,94l-94-94
			c-17.1-17.1-44.8-17.1-61.9,0s-17.1,44.8,0,61.9l94,94l-94,94C342.1,615.4,342.1,643.1,359.1,660.2z" />
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
