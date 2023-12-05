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
    <path d="M710.5,264.8H262.7c-12.4,0-24.9,12.4-24.9,24.9c0,12.4,12.4,24.9,24.9,24.9h447.8c12.4,0,24.9-12.4,24.9-24.9
		C735.4,277.2,723,264.8,710.5,264.8z" />
    <path d="M735.4,438.9c0-12.4-12.4-24.9-24.9-24.9H262.7c-12.4,0-24.9,12.4-24.9,24.9c0,12.4,12.4,24.9,24.9,24.9h447.8
		C723,463.8,735.4,451.4,735.4,438.9z" />
    <path d="M409.5,563.3H267.7c-14.9,0-27.4,9.9-27.4,24.9c0,12.4,12.4,24.9,27.4,24.9h141.8c14.9,0,27.4-12.4,27.4-24.9
		C436.9,573.3,424.4,563.3,409.5,563.3z" />
    <path d="M409.5,712.6H267.7c-14.9,0-27.4,10-27.4,24.9c0,12.4,12.4,24.9,27.4,24.9h141.8c14.9,0,27.4-12.4,27.4-24.9
		C436.9,722.5,424.4,712.6,409.5,712.6z" />
    <path
      d="M486.6,911.6H138.3V115.5h696.6v373.2c0,14.9,10,24.9,24.9,24.9c14.9,0,24.9-10,24.9-24.9v-398c0-12.4-12.4-24.9-24.9-24.9
		H113.4c-12.4,0-24.9,12.4-24.9,24.9v845.9c0,12.4,12.4,24.9,24.9,24.9h373.2c14.9,0,24.9-10,24.9-24.9S501.5,911.6,486.6,911.6z" />
    <path d="M735.4,563.3c-109.5,0-199,89.6-199,199c0,109.5,89.6,199,199,199c109.5,0,199-89.6,199-199
		C934.4,652.9,844.9,563.3,735.4,563.3z M735.4,911.6c-82.1,0-149.3-67.2-149.3-149.3c0-82.1,67.2-149.3,149.3-149.3
		c82.1,0,149.3,67.2,149.3,149.3C884.7,844.4,817.5,911.6,735.4,911.6z" />
    <path d="M797.6,712.5l-79.8,81l-35.2-35.2c-8.8-8.8-26.4-8.8-35.2,0c-8.8,8.8-8.8,26.4,0,35.2l52.8,52.8c8.8,8.8,26.4,8.8,35.2,0
		l97.4-98.5c8.8-8.8,8.8-26.4,0-35.2C824,703.7,806.4,703.7,797.6,712.5z" />
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
