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
    <path d="M534.5,682.9c0-19.3,2.2-37.6,6.7-55.6c-9.9-9-16.1-16.1-18.4-19.3c-8.1-10.8-8.1-24.2-8.1-40.8c0-5.4,2.7-13.4,5.4-18.8
		l2.7-5.4c2.7-5.4,13.4-32.3,21.5-48.8c0-2.7,5.4-10.8,10.8-16.1c8.1-5.4,16.1-13.4,29.6-29.6c21.5-32.3,10.8-62.3-8.1-75.7v-5.4
		c10.8-29.6,16.1-65,13.4-108c-2.6-45-43.6-112.6-148.8-115.9h-16.2c-104.7,3.2-146.1,68.7-148.7,115.9
		c-2.7,43.5,2.7,78.4,13.4,105.3v5.4c-18.8,16.1-26.9,46.2-8.1,78.4c10.8,16.1,21.5,24.2,29.6,29.6c5.4,5.4,10.8,13.4,10.8,16.1
		c8.1,16.1,18.8,40.3,21.5,48.8l2.7,5.4c2.7,8.1,5.4,13.4,5.4,18.8c0,13.4,0,29.6-8.1,40.8c-8.1,10.8-54.2,62.3-146.1,83.8
		C119.6,710.6,67.9,754.7,65,855v10.3c0.8,5.3,5.9,12,13.3,12h561.9C576.6,836.1,534.5,764.5,534.5,682.9z" />
    <path d="M766.6,488.4c-107.5,0-194.5,87.4-194.5,194.5c0,107.5,87.4,194.5,194.5,194.5c107.5,0,194.5-87.4,194.5-194.5
		C961.1,575.4,873.7,488.4,766.6,488.4z M789.2,743.9l-29.8,37.6l-113.5-89.2l29.8-37.6l75.8,59.6l98.1-123.8l37.8,29.7L789.2,743.9
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
