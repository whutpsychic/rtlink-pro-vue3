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
    <path d="M887.6,289.8h-745c-20.6,0-37.3,16.7-37.3,37.3v591.2c0,20.6,16.7,37.3,37.3,37.3h745c20.6,0,37.3-16.7,37.3-37.3V327.1
			C924.8,306.5,908.2,289.8,887.6,289.8z M850.3,881.1H179.8V364.3h670.5V881.1z" />
    <path d="M291.5,252.6h447c20.6,0,37.3-16.7,37.3-37.3S759.1,178,738.5,178h-447c-20.6,0-37.3,16.7-37.3,37.3
			S270.9,252.6,291.5,252.6z" />
    <path d="M279.1,542.7h447c20.6,0,37.3-16.7,37.3-37.3c0-20.6-16.7-37.3-37.3-37.3h-447c-20.6,0-37.3,16.7-37.3,37.3
			C241.9,526.1,258.5,542.7,279.1,542.7z" />
    <path d="M366,140.8h298c20.6,0,37.3-16.7,37.3-37.3S684.6,66.2,664,66.2H366c-20.6,0-37.3,16.7-37.3,37.3
			C328.8,124.2,345.4,140.8,366,140.8z" />
    <path d="M279.1,718.5h298c20.6,0,37.3-16.7,37.3-37.3s-16.7-37.3-37.3-37.3h-298c-20.6,0-37.3,16.7-37.3,37.3
			C241.9,701.8,258.5,718.5,279.1,718.5z" />
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
