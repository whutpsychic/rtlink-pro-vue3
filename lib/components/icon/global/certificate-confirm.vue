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
    <path d="M792.6,64.9H212.8c-41,0-74.3,33.3-74.3,74.3v745.6c0,41,33.3,74.3,74.3,74.3h579.9c41,0,74.3-33.3,74.3-74.3V139.2
			C867,98.2,833.6,64.9,792.6,64.9z M801.2,884.8c0,4.7-3.8,8.5-8.6,8.5H212.8c-4.7,0-8.6-3.8-8.6-8.5V139.2c0-4.7,3.8-8.5,8.6-8.5
			h579.9c4.7,0,8.6,3.8,8.6,8.5V884.8z" />
    <path d="M589.6,401.9c17.9-20.4,28.8-47.1,28.8-76.3c0-63.8-51.9-115.7-115.7-115.7S387,261.8,387,325.6
			c0,29.2,10.9,55.9,28.8,76.3c-42.3,28.2-70.2,76.3-70.2,130.8c0,18.2,14.7,32.9,32.9,32.9c18.2,0,32.9-14.7,32.9-32.9
			c0-50.4,41-91.4,91.4-91.4c50.4,0,91.4,41,91.4,91.4c0,18.2,14.7,32.9,32.9,32.9s32.9-14.7,32.9-32.9
			C659.8,478.2,632,430.1,589.6,401.9z M502.8,375.6c-27.6,0-50-22.4-50-49.9c0-27.6,22.4-50,50-50c27.6,0,50,22.4,50,50
			C552.7,353.2,530.2,375.6,502.8,375.6z" />
    <path d="M627,624.1H378.5c-18.2,0-32.9,14.7-32.9,32.9s14.7,32.9,32.9,32.9H627c18.2,0,32.9-14.7,32.9-32.9S645.1,624.1,627,624.1
			z" />
    <path d="M523.5,748.4h-145c-18.2,0-32.9,14.7-32.9,32.9s14.7,32.9,32.9,32.9h145c18.2,0,32.9-14.7,32.9-32.9
			S541.5,748.4,523.5,748.4z" />
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
