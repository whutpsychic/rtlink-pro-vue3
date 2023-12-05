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
    <path d="M320.8,144.8c12.5,18.6,7.5,43.9-11.1,56.4c-19.8,13.3-38.3,28.5-55.2,45.4C185.8,315,147.2,408.1,147.4,505.1
		c0,201.9,163.7,365.6,365.6,365.6S878.6,707,878.6,505.1c0-98.3-38.9-190.4-107.1-258.5c-16.9-16.9-35.4-32.1-55.2-45.4
		c-18.6-12.5-23.6-37.7-11.1-56.4c12.5-18.6,37.7-23.6,56.4-11.1c24.2,16.2,46.8,34.8,67.4,55.4c83.9,83.7,131,197.4,130.9,316
		C959.9,751.9,759.8,952,513,952S66.1,751.9,66.1,505.1c-0.1-118.5,47-232.3,130.9-316c20.6-20.6,43.2-39.2,67.4-55.4
		C283.1,121.2,308.3,126.2,320.8,144.8L320.8,144.8z M513,78.5c21.3,0,38.9,16.4,40.5,37.6l0.1,3v406.2c0.1,22.4-18,40.7-40.4,40.8
		c-21.4,0.1-39.2-16.4-40.7-37.8l-0.1-3V119.2C472.4,96.7,490.6,78.5,513,78.5z" />
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
