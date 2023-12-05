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
    <path d="M515,193.4c96.9,0,177,75.4,182.9,172.1l0.3,11.1v130.9c0.1,28.9-23.3,52.4-52.2,52.5c-26.5,0.1-48.9-19.7-52.1-46
		l-0.4-6.5V376.6c0-40.3-30.4-74-70.5-78.1l-8-0.4H253.3c-40.3,0-74,30.4-78.1,70.5l-0.4,8v261.8c0,40.3,30.4,74,70.5,78.1l8,0.4
		c28.9,0,52.4,23.4,52.4,52.4s-23.4,52.4-52.4,52.4c-96.9,0-177-75.4-182.9-172.1L70,638.4V376.6c0-96.9,75.4-177,172.1-182.9
		l11.1-0.3L515,193.4L515,193.4z M776.8,193.4c96.9,0,177,75.4,182.9,172.1l0.3,11.1v261.8c0,96.9-75.4,177-172.1,182.9l-11.1,0.3
		H515c-96.9,0-177-75.4-182.9-172.1l-0.3-11.1V507.5c-0.1-28.9,23.3-52.4,52.2-52.5c26.5-0.1,48.9,19.7,52.1,46l0.4,6.5v130.9
		c0,40.3,30.4,74,70.5,78.1l8,0.4h261.8c40.3,0,74-30.4,78.1-70.5l0.4-8V376.6c0-40.3-30.4-74-70.5-78.1l-8-0.4
		c-28.9,0-52.4-23.4-52.4-52.3C724.4,216.9,747.8,193.4,776.8,193.4L776.8,193.4z" />
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
