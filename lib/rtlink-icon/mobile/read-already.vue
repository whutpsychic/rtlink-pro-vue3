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
    <path class="st1" d="M883.9,430.5L883.9,430.5l-0.7-0.7c-2.5-2.9-5.3-5.7-8.1-8.3L614.6,155.5l-89-85.5c-4-3.2-8.9-4.8-13.6-4.8
		c-5.5,0-11,2-15.1,6l-2,2l-78.5,75.5L191.4,376.8l-27.1,26.8c-0.1-0.1-0.1-0.2-0.2-0.3l-18.3,20.3c-2.8,2.8-5.5,5.8-8,8.9l-0.7,0.8
		l0.1,0c-13.8,17.4-22.1,39.1-22.1,62.8v362.8c0,56.4,46.7,102.3,104.2,102.3H804c57.5,0,104.2-45.9,104.2-102.3V496.1
		C908.2,471.1,899.1,448.3,883.9,430.5z M194.3,434.9l35.6-41.2h-0.7l283.1-285.3l283.2,285.3h-1l35,42.3v0.9c-0.2-0.1-0.4-0.2,0,0
		L512,748L194.2,436.8C194.8,436.6,193.8,435.2,194.3,434.9z M153.9,858.9V496.1c0-12.7,3.7-24.4,10.2-34.4l214.9,212.7L162.6,890.9
		C157,881.5,153.9,870.6,153.9,858.9z M804.2,923.2l-584.9-0.1c-10.1,0-19.7-2.3-28.2-6.3l217.1-216.8l86.5,83.1l2,2
		c4.2,4,9.6,6,15.1,6c4.8,0,9.6-1.6,13.6-4.8l89-85.5l218.4,215.8C824.1,920.9,814.4,923.2,804.2,923.2z M869.5,858.9
		c0,11.5-3.1,22.3-8.5,31.7L641.8,674.4L859.5,462c6.3,9.9,10,21.6,10,34.1V858.9z" />
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
