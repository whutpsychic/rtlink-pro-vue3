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
    <path d="M330.8,779.7l501.2-439c0.6-0.5,1.2-1.1,1.8-1.6c15-14.9,15-39,0.2-54L626,75.3c-14.6-14.8-38.4-15.1-53.4-0.8l-479,456.2
			c-7.6,7.2-11.8,17.2-11.8,27.6V747c0,20.8,16.6,37.7,37.4,38.2l185.8,4C314.4,789.4,323.7,786,330.8,779.7z M158,709.7v-135
			l440.1-419.1L751.2,310L291.6,712.5L158,709.7z" />
    <path d="M584.3,725.6c-0.4,21.1,16.3,38.5,37.4,38.9l286.1,5.6c21.1,0.4,38.5-16.3,38.9-37.4s-16.3-38.5-37.4-38.9l-286.1-5.6
			C602.1,687.8,584.7,704.5,584.3,725.6z" />
    <path d="M907.4,879l-749.6,5.6c-21.1,0.2-38,17.4-37.9,38.5c0.2,21.1,17.4,38,38.5,37.9l749.6-5.6c21.1-0.2,38-17.4,37.9-38.5
			S928.5,878.9,907.4,879z" />
    <path d="M623.2,688.2L623.2,688.2L623.2,688.2L623.2,688.2z" />
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
