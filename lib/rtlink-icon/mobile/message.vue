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
    <path d="M553.2,492.1l320-278.7c-13.7-3.4-31-10.3-48.2-10.3H205.6c-24.1,0-34.4,0-51.6,10.3l323.4,278.7
		C501.5,509.3,529.1,509.3,553.2,492.1z" />
    <path d="M329.6,440.5L116.1,251.2c-10.3,13.7-17.2,37.8-17.2,55.1v416.3c0,17.2,6.9,34.4,20.7,51.6l216.7-251.1
		C360.5,499,353.6,464.5,329.6,440.5z" />
    <path
      d="M577.3,543.7L536,578.1c-6.9,6.9-10.3,6.9-17.2,6.9c-6.9,0-10.3,0-17.2-6.9l-41.3-34.4c-24.1-17.2-58.5-17.2-82.6,6.9
		L154.1,805.2c10.3,10.3,34.4,17.2,51.6,17.2h619.4c17.2,0,34.4-6.9,58.5-17.2L659.9,550.6C635.8,526.5,601.4,519.6,577.3,543.7z" />
    <path d="M911,254.6L697.7,443.9c-24.1,17.2-31,58.5-6.9,82.6l223.7,244.3c3.4-13.7,10.3-31,10.3-48.2h3.4V309.7
		C928.2,289.1,921.4,265,911,254.6z" />
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
