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
    <path d="M861.4,688.2H580.7l55.1-55.1c16.7-16.7,16.7-43.6,0-60.3s-43.6-16.7-60.3,0L448,700.2c-2.7,2.6-5.1,5.6-7,8.9
			c0,0.1-0.1,0.1-0.1,0.2c-0.3,0.5-0.6,1.1-0.9,1.7c0,0.1-0.1,0.2-0.1,0.2c-0.3,0.5-0.5,1.1-0.8,1.6c0,0.1-0.1,0.2-0.1,0.3
			c-0.2,0.5-0.5,1.1-0.7,1.6c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.6-0.4,1.1-0.6,1.7c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.6-0.4,1.1-0.5,1.7
			c0,0.1-0.1,0.2-0.1,0.3c-0.2,0.6-0.3,1.1-0.5,1.7c0,0.1,0,0.2-0.1,0.3c-0.1,0.6-0.3,1.1-0.4,1.7c0,0.1-0.1,0.3-0.1,0.4
			c-0.1,0.5-0.2,1.1-0.3,1.6c0,0.2-0.1,0.4-0.1,0.6c-0.1,0.5-0.1,0.9-0.2,1.4c0,0.3-0.1,0.7-0.1,1c0,0.4-0.1,0.7-0.1,1.1
			c0,0.7-0.1,1.4-0.1,2.1l0,0c0,0.7,0,1.4,0.1,2.1c0,0.4,0.1,0.7,0.1,1.1c0,0.3,0,0.7,0.1,1c0,0.5,0.1,0.9,0.2,1.4
			c0,0.2,0,0.4,0.1,0.6c0.1,0.5,0.2,1.1,0.3,1.6c0,0.1,0,0.3,0.1,0.4c0.1,0.6,0.2,1.1,0.4,1.7c0,0.1,0,0.2,0.1,0.3
			c0.1,0.6,0.3,1.1,0.5,1.7c0,0.1,0.1,0.2,0.1,0.3c0.2,0.6,0.4,1.1,0.5,1.7c0,0.1,0.1,0.2,0.1,0.3c0.2,0.6,0.4,1.1,0.6,1.7
			c0,0.1,0.1,0.2,0.1,0.3c0.2,0.6,0.5,1.1,0.7,1.6c0,0.1,0.1,0.2,0.1,0.3c0.3,0.5,0.5,1.1,0.8,1.6c0,0.1,0.1,0.2,0.1,0.2
			c0.3,0.6,0.6,1.1,0.9,1.7c0,0.1,0.1,0.1,0.1,0.2c1.9,3.3,4.3,6.3,7,8.9l127.5,127.5c8.3,8.3,19.2,12.5,30.1,12.5
			c10.9,0,21.8-4.2,30.1-12.5c16.7-16.7,16.7-43.6,0-60.3l-55.1-55.1h280.8c23.6,0,42.6-19.1,42.6-42.6
			C904.1,707.3,885,688.2,861.4,688.2z" />
    <path class="st0" d="M279.2,906.8h-73.5c-14.5,0-26.4-11.9-26.4-26.4V143.1c0-14.5,11.9-26.4,26.4-26.4H794
			c14.5,0,26.4,11.9,26.4,26.4v168.7c0,14.5,11.9,26.4,26.4,26.4s26.4-11.9,26.4-26.4V90.3c-0.5-14.5-12.4-26.4-26.9-26.4H178.8
			c-29,0-52.8,23.8-52.8,52.8v790.1c0,29,23.8,52.8,52.8,52.8h100.4c14.5,0,26.4-11.9,26.4-26.4
			C305.6,918.7,293.7,906.8,279.2,906.8z" />
    <path class="st0" d="M280.7,254.9c-14,0-25.4,11.4-25.4,25.4s11.4,25.4,25.4,25.4h406.2c13.5,0,24.8-11.4,25.4-25.4
			c0-14-11.4-25.4-25.4-25.4H280.7z" />
    <path class="st0" d="M380.1,433.9h-99.3c-14,0-25.4,11.4-25.4,25.4s11.4,25.4,25.4,25.4h99.3c14,0,25.4-11.4,25.4-25.4
			C405.4,445.3,394,433.9,380.1,433.9z" />
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
