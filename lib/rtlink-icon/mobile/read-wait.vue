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
    <path class="st0" d="M804.1,228.8H219.3c-57.5,0-104.2,45.9-104.2,102.3V694c0,56.4,46.7,102.3,104.2,102.3H804
	c57.5,0,104.2-45.9,104.2-102.3V331.2C908.3,274.8,861.5,228.8,804.1,228.8z M219.3,266.9h584.8c9,0,17.7,1.9,25.5,5.1L512,583
	L194.2,271.9C201.9,268.7,210.4,266.9,219.3,266.9z M153.9,694V331.2c0-12.7,3.7-24.4,10.2-34.4l214.9,212.7L162.6,726
	C157,716.5,153.9,705.6,153.9,694z M804.2,758.3l-584.9-0.1c-10.1,0-19.7-2.3-28.2-6.3l217.1-216.8l86.5,83.1l2,2
	c4.2,4,9.6,6,15.1,6c4.8,0,9.6-1.6,13.6-4.8l89-85.5l218.4,215.8C824.1,756,814.4,758.3,804.2,758.3z M869.5,694
	c0,11.5-3.1,22.3-8.5,31.7L641.8,509.5l217.7-212.4c6.3,9.9,10,21.6,10,34.1V694z" />
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
