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
    <path d="M515,61.9c-247.5,0-448.8,201.3-448.8,448.8S267.6,959.6,515,959.6s448.8-201.3,448.8-448.8S762.5,61.9,515,61.9z
			 M904.8,510.7c0,52.6-10.3,103.6-30.6,151.7c-19.5,46.3-47.6,88-83.5,123.9s-77.6,64-123.9,83.6c-96,40.7-207.3,40.7-303.4,0.1
			c-46.3-19.5-88-47.6-123.9-83.5s-64-77.6-83.6-123.9c-20.3-48-30.7-99.1-30.7-151.7s10.3-103.6,30.6-151.7
			c19.5-46.3,47.6-88,83.5-123.9s77.6-64,123.9-83.6c48-20.3,99.1-30.7,151.7-30.7s103.6,10.3,151.7,30.6
			c46.3,19.5,88,47.6,123.9,83.5s64,77.6,83.6,123.9C894.5,407,904.8,458.1,904.8,510.7z" />
    <path d="M726.8,474.5L451.7,315.6c-6.4-3.8-13.5-5.7-21-5.7c-23.2,0-42.1,18.9-42.1,42.1v317.7c0,23.2,18.9,42.1,42.1,42.1
			c7.3,0,14.4-1.9,21-5.7l275.1-158.8c13.2-7.6,21-21.3,21-36.5C747.7,495.6,739.9,482,726.8,474.5z M679.6,510.7L443.7,646.9V374.6
			L679.6,510.7z" />
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
