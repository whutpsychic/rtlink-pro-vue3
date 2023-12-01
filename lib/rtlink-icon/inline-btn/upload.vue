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
    <path class="st0" d="M797.8,388.7C784.9,242.9,662.1,128.1,513,128.1c-148.4,0-270.8,113.7-284.6,258.6
			C130.3,420.5,63.6,512.5,63.6,618.3c0,135.1,109.9,245.1,245.1,245.1c22.7,0,45.2-3.1,66.9-9.3c21.7-6.2,34.3-28.7,28.2-50.4
			c-6.2-21.7-28.7-34.2-50.4-28.2c-14.5,4.1-29.5,6.2-44.7,6.2c-90.1,0-163.4-73.3-163.4-163.4c0-76,51.6-141.4,125.4-159
			c7.9-1.9,14.7-5.9,20-11.4c10.9-7.3,18-19.8,18-33.9c0-112.6,91.6-204.2,204.2-204.2s204.2,91.6,204.2,204.2
			c0,3.8,0.5,7.4,1.5,10.8c2.1,16.3,14.1,30.4,31,34.4c73.8,17.6,125.4,82.9,125.4,159c0,90.1-73.3,163.4-163.4,163.4
			c-15.2,0-30.2-2.1-44.7-6.2c-21.7-6.1-44.3,6.4-50.4,28.1c-6.2,21.7,6.4,44.3,28.1,50.4c21.7,6.2,44.2,9.3,67,9.3
			c135.1,0,245.1-109.9,245.1-245.1C956.8,514.6,892.8,424,797.8,388.7z" />
    <path class="st0" d="M629.9,606.4c8,7.9,18.4,11.8,28.8,11.8c10.5,0,21-4,29-12.1c15.9-16,15.8-41.9-0.2-57.8L541.7,403.9
			c-16-15.8-41.8-15.8-57.7,0.2L342.4,546.2c-15.9,16-15.9,41.8,0.1,57.8c16,15.9,41.8,15.9,57.8-0.1l71.9-72.1v249.9
			c0,22.6,18.3,40.8,40.8,40.8s40.8-18.3,40.8-40.8V531L629.9,606.4z" />
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
