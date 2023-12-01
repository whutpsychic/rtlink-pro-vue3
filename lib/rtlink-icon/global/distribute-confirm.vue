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
    <path class="st0" d="M882.6,732.3l-98.2,99.2L750,787.4c-14.8-15.9-38.1-15.9-52.8,0c-15.2,16.4-15.8,43.5-1.2,60.6l58.9,71.7
			c17.4,14.8,41.5,14.8,58.9,0L936.7,793c14.1-16.6,14.1-42.7,0-59.3C922.1,716.5,897.9,716,882.6,732.3z" />
    <path class="st0"
      d="M721.9,693.8L941.2,443c0.1-0.1,0.2-0.3,0.3-0.3c19.8-23.3,19.8-59.8,0.1-83.1c-0.1-0.1-0.2-0.3-0.3-0.3
			L722,108.9c-10.6-12.7-25.6-20-41.3-20.1c-0.1,0-0.2,0-0.3,0c-15.7,0-30.8,7.3-41.5,20c-9.6,11-14.9,25.6-14.9,41.4v105.6h-84
			c-15.4,0-27.8,12.4-27.8,27.8s12.4,27.8,27.8,27.8h111.9c15.4,0,27.8-12.4,27.8-27.8V150.1c0-1.9,0.4-3.4,0.8-4.2l218.7,249.7
			c2.2,2.7,2.2,8.3,0,11L680.7,656.5c-0.5-1-1-2.4-1-4.4V507.2c0-15.4-12.4-27.8-27.8-27.8H512.3H400.4V362.2
			c0-33.7-25.3-61.2-56.3-61.2c-16,0-31.1,7.1-41.5,19.5L84.1,571.3c-0.1,0.1-0.2,0.2-0.3,0.3c-19.7,23.3-19.7,59.7,0,83
			c0.1,0.2,0.3,0.3,0.4,0.4l218.3,246.9c10.6,12.7,25.6,20,41.2,20.1c0.1,0,0.2,0,0.3,0c15.7,0,30.8-7.3,41.5-20
			c9.6-11,14.9-25.6,14.9-41.4V756.3h85.7c15.4,0,27.8-12.4,27.8-27.8c0-15.4-12.4-27.8-27.8-27.8H372.6
			c-15.4,0-27.8,12.4-27.8,27.8v132.3c0,1.9-0.4,3.4-0.8,4.2L126.2,618.6c-2.1-2.7-2.1-8.3,0-11l217.6-249.7c0.5,1,1,2.4,1,4.4
			v144.9c0,15.4,12.4,27.8,27.8,27.8h139.7h111.9v117.1c0,33.7,25.3,61.2,56.3,61.2C696.5,713.3,711.6,706.3,721.9,693.8z" />
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
