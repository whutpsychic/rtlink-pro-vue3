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
    <path d="M631.5,493.4L465.7,659.2L398,591.6c-11.5-11.5-30.2-11.5-41.7,0s-11.5,30.2,0,41.7l88.5,88.5c5.8,5.8,13.3,8.6,20.9,8.6
			c7.5,0,15.1-2.9,20.9-8.6l186.7-186.7c11.5-11.5,11.5-30.2,0-41.7S643,481.9,631.5,493.4z" />
    <path d="M852.6,86.8H175.3C146.7,87,120,98.3,100,118.7C80,139,69.1,166,69.3,194.3v633.9c0,59.3,48,107.5,107,107.5h676.4
			c59,0,107-48.2,107-107.5V194.4C959.6,135.1,911.6,86.8,852.6,86.8z M900.6,828.3c0,26.7-21.6,48.5-48,48.5H176.2
			c-26.5,0-48-21.8-48-48.5V194.1c-0.2-26.4,21.1-48.1,47.5-48.3l-0.2-29.5l0.7,29.5h676.4c26.5,0,48,21.8,48,48.5L900.6,828.3
			L900.6,828.3z" />
    <path d="M514.1,267.7c-1.1,0-2.1,0-3.2,0C339.3,269.5,201.6,410,203.4,581.6c0,14,11.3,26,25.9,26c13.9,0,25.8-11.3,25.8-26
			c0-144,115.9-261.3,259.7-261.3c143.1,0,259.7,116.6,259.7,261.3c0,14,11.3,26,25.8,26c13.9,0,25.9-11.3,25.9-26
			C826.1,408.3,686.4,267.7,514.1,267.7z" />
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
