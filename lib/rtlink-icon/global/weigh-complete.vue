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
    <path class="st1" d="M68.1,193.5v633.9c0,59.3,48,107.5,107,107.5h676.4c59,0,107-48.2,107-107.5V193.5
			c0.4-58.8-47.2-107.1-106.1-107.5H175.1C116.1,86,68.1,134.2,68.1,193.5z M127.1,193.5c0-26.7,21.6-48.5,48-48.5h676.4l0.7-29.5
			L852,145c26.4,0.2,47.7,21.8,47.5,48.3v634.1c0,26.7-21.6,48.5-48,48.5H175.1c-26.5,0-48-21.8-48-48.5
			C127.1,827.4,127.1,193.5,127.1,193.5z" />
    <path class="st2" d="M513.6,266.8c1.1,0,2.1,0,3.2,0c171.6,1.8,309.3,142.3,307.5,313.9c0,14-11.3,26-25.9,26
			c-13.9,0-25.8-11.3-25.8-26c0-144-115.9-261.3-259.7-261.3c-143.1,0-259.7,116.6-259.7,261.3c0,14-11.3,26-25.8,26
			c-13.9,0-25.9-11.3-25.9-26C201.6,407.5,341.3,266.8,513.6,266.8z" />
    <path class="st2" d="M484.3,559.1c17.4,0,34,4.8,48.3,13.6l133.9-115.5c12.9-11.1,32.3-9.6,43.5,3.2c11,13.1,9.6,32.5-3.2,43.8
			L571.5,620.4c3.5,10,5.3,20.5,5.5,31.1c0,51-41.1,93.2-92.6,93.2c-50.7,0-92.6-41.4-92.6-93.2
			C392.5,601.3,433.7,559.1,484.3,559.1z" />
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
