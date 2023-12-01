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
    <path d="M826.1,654.5c-22.6,0-40.9,18.2-40.9,40.7v182.9H652.3c-22.6,0-40.9,18.2-40.9,40.7c0,22.5,18.3,40.7,40.9,40.7h132.9
		c45.1,0,81.8-36.5,81.8-81.3V695.2C866.9,672.7,848.6,654.5,826.1,654.5z" />
    <path d="M785.2,65H212.8c-45.1,0-81.8,36.5-81.8,81.3v731.8c0,44.8,36.7,81.3,81.8,81.3h122.7c22.6,0,40.9-18.2,40.9-40.7
		c0-22.5-18.3-40.7-40.9-40.7H212.8V146.4h572.4v203.3c0,22.5,18.3,40.7,40.9,40.7c22.6,0,40.9-18.2,40.9-40.7V146.4
		C866.9,101.5,830.3,65,785.2,65z" />
    <path d="M335.5,390.3h286.2c22.6,0,40.9-18.2,40.9-40.7S644.2,309,621.6,309H335.5c-22.6,0-40.9,18.2-40.9,40.7
		S312.9,390.3,335.5,390.3z" />
    <path d="M851.8,460.3c-17.6-14.1-43.3-11.4-57.5,6L446.8,893.2c-14.2,17.5-11.5,43.1,6,57.2c7.6,6.1,16.7,9.1,25.7,9.1
		c11.9,0,23.7-5.1,31.8-15.1l347.5-426.9C872,500,869.3,474.4,851.8,460.3z" />
    <path d="M335.5,552.9H499c22.6,0,40.9-18.2,40.9-40.7c0-22.5-18.3-40.7-40.9-40.7H335.5c-22.6,0-40.9,18.2-40.9,40.7
		C294.6,534.7,312.9,552.9,335.5,552.9z" />
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
