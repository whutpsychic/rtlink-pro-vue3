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
    <path d="M453.2,693.3c-22.4,0-40.5,18.1-40.5,40.5v101.3H149.6V187.3h263.2v101.4c0,22.4,18.1,40.5,40.5,40.5s40.5-18.1,40.5-40.5
			v-121c0-33.8-26.7-61.3-59.6-61.3h-306c-32.9,0-59.6,27.5-59.6,61.3v687.1c0,33.8,26.7,61.3,59.6,61.3h305.9
			c32.9,0,59.6-27.5,59.6-61.3v-121C493.7,711.4,475.6,693.3,453.2,693.3z" />
    <path d="M899.7,106.3H593.8c-32.9,0-59.6,27.5-59.6,61.3v121c0,22.4,18.1,40.5,40.5,40.5s40.5-18.1,40.5-40.5V187.3h263.2v647.8
			H615.2V733.8c0-22.4-18.1-40.5-40.5-40.5s-40.5,18.1-40.5,40.5v121c0,33.8,26.7,61.3,59.6,61.3h305.9c32.9,0,59.6-27.5,59.6-61.3
			V167.6C959.3,133.8,932.6,106.3,899.7,106.3z" />
    <circle cx="281.2" cy="754.1" r="40.5" />
    <circle cx="746.8" cy="754.1" r="40.5" />
    <path d="M311.5,501.1c0,22.4,18.1,40.5,40.5,40.5h226.1l-27.5,27.5c-15.8,15.8-15.8,41.5,0,57.3c7.9,7.9,18.3,11.9,28.6,11.9
			c10.4,0,20.7-4,28.6-11.9l95.1-95.1c8.3-7.4,13.4-18.2,13.4-30.1c0-12-5.2-22.7-13.5-30.1L607.7,376c-15.8-15.8-41.5-15.8-57.3,0
			s-15.8,41.4,0,57.3l27.5,27.5H352C329.7,460.6,311.5,478.7,311.5,501.1z" />
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
