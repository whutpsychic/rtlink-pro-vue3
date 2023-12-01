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
    <path d="M830,66.8H196c-58.3,0-105.7,50.1-105.7,111.7v670.1c0,61.6,47.4,111.7,105.7,111.7h634c58.3,0,105.7-50.1,105.7-111.7
			V178.5C935.7,116.9,888.3,66.8,830,66.8z M851.2,178.5v67H343.9v-89.3H830C841.7,156.1,851.2,166.1,851.2,178.5z M196,156.1h63.4
			v89.3h-84.5v-67C174.8,166.1,184.3,156.1,196,156.1z M174.8,848.5V334.8h84.5v536.1H196C184.3,870.9,174.8,860.9,174.8,848.5z
			 M830,870.9H343.9V334.8h507.3v89.3H639.8c-23.4,0-42.3,20-42.3,44.7s18.9,44.7,42.3,44.7h211.4v89.3H639.8
			c-23.4,0-42.3,20-42.3,44.7s18.9,44.7,42.3,44.7h211.4v156.4C851.2,860.9,841.7,870.9,830,870.9z" />
    <path
      d="M513,424.2h-21.1c-23.4,0-42.3,20-42.3,44.7s18.9,44.7,42.3,44.7H513c23.4,0,42.3-20,42.3-44.7S536.4,424.2,513,424.2z" />
    <path d="M513,602.8h-21.1c-23.4,0-42.3,20-42.3,44.7s18.9,44.7,42.3,44.7H513c23.4,0,42.3-20,42.3-44.7
			C555.3,622.9,536.4,602.8,513,602.8z" />
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
