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
    <path d="M870.9,379.2V155.5c0-49.4-40.2-89.5-89.5-89.5h-537c-49.3,0-89.5,40.1-89.5,89.5v223.7c-49.3,0-89.5,40.1-89.5,89.5
			v402.7c0,49.4,40.2,89.5,89.5,89.5h268.5c-24.7,0-44.7-20-44.7-44.7v-44.7H154.9V468.8l0,0h716v402.7h-67.1v44.7
			c0,24.7-20,44.7-44.7,44.7H871c49.3,0,89.5-40.1,89.5-89.5V468.7C960.4,419.3,920.2,379.2,870.9,379.2z M781.4,379.2h-537V155.5
			h537V379.2z" />
    <path d="M803.7,916.2v-44.7V737.2c0-24.7-20-44.7-44.7-44.7H423.4c-24.7,0-44.7,20-44.7,44.7v134.2v44.7c0,24.7,20,44.7,44.7,44.7
			H759C783.7,960.9,803.7,940.9,803.7,916.2z" />
    <path d="M311.5,513.4h-67.1c-24.7,0-44.7,20-44.7,44.7s20,44.7,44.7,44.7h67.1c24.7,0,44.7-20,44.7-44.7
			C356.3,533.5,336.2,513.4,311.5,513.4z" />
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
