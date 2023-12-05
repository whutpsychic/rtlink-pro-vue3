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
    <path class="st1" d="M408.1,876.6H204.7V144.3h569.6v211.5c0,22.5,18.2,40.7,40.7,40.7s40.7-18.2,40.7-40.7V144.3
			c0-44.9-36.5-81.4-81.4-81.4H204.7c-44.9,0-81.4,36.5-81.4,81.4v732.3c0,44.9,36.5,81.4,81.4,81.4h203.4
			c22.5,0,40.7-18.2,40.7-40.7S430.6,876.6,408.1,876.6z" />
    <path class="st1" d="M631.9,307c0-22.5-18.2-40.7-40.7-40.7H326.8c-22.5,0-40.7,18.2-40.7,40.7s18.2,40.7,40.7,40.7h264.4
			C613.7,347.7,631.9,329.5,631.9,307z" />
    <path class="st1" d="M326.8,408.7c-22.5,0-40.7,18.2-40.7,40.7s18.2,40.7,40.7,40.7h101.7c22.5,0,40.7-18.2,40.7-40.7
			s-18.2-40.7-40.7-40.7H326.8z" />
    <path class="st1" d="M692.9,469.8c-134.6,0-244.1,109.5-244.1,244.1S558.3,958,692.9,958S937,848.5,937,713.9
			S827.5,469.8,692.9,469.8z M692.9,876.6c-89.7,0-162.7-73-162.7-162.7c0-30.1,8.2-58.4,22.6-82.6L775.5,854
			C751.3,868.3,723,876.6,692.9,876.6z M833.1,796.5L610.3,573.7c24.2-14.3,52.5-22.6,82.6-22.6c89.7,0,162.7,73,162.7,162.7
			C855.6,744,847.4,772.2,833.1,796.5z" />
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
