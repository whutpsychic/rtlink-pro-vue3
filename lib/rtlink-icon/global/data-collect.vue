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
    <path d="M940.7,427.7c0-25.8-13.1-58.5-64.1-87.8c39.8-23,64.1-51.9,64.1-87.2c0-106.9-221.8-155.6-428-155.6s-428,48.7-428,155.6
			c0,35.3,24.2,64.3,64.1,87.2c-51,29.3-64.1,62-64.1,87.8c0,35.3,24.2,64.3,64.1,87.2c-51,29.3-64.1,62-64.1,87.8
			c0,35.3,24.2,64.3,64.1,87.2c-51,29.3-64.1,62-64.1,87.8c0,106.9,221.8,155.6,428,155.6s428-48.7,428-155.6
			c0-25.8-13.1-58.5-64.1-87.8c39.8-23,64.1-51.9,64.1-87.2c0-25.8-13.1-58.5-64.1-87.8C916.5,492,940.7,463,940.7,427.7z
			 M512.7,174.8c227.6,0,344.3,56.8,350.2,77.2c-5.9,21.6-122.6,78.4-350.2,78.4s-344.3-56.8-350.2-77.2
			C168.5,231.6,285.1,174.8,512.7,174.8z M512.7,408.2c88.9,0,180.8-9.1,256.5-28c72.2,20.5,92.3,42.9,93.7,46.8
			c-5.9,21.6-122.6,78.4-350.2,78.4s-344.3-56.8-350.2-77.2c1.4-5.1,21.5-27.5,93.7-48C332,399.2,423.8,408.2,512.7,408.2z
			 M862.9,777.2c-5.9,21.6-122.6,78.4-350.2,78.4s-344.3-56.8-350.2-77.2c1.4-5.1,21.5-27.5,93.7-48c75.7,18.9,167.5,28,256.5,28
			c88.9,0,180.8-9.1,256.5-28C841.4,750.9,861.5,773.3,862.9,777.2z M862.9,602.2c-5.9,21.6-122.6,78.4-350.2,78.4
			s-344.3-56.8-350.2-77.2c1.4-5.1,21.5-27.5,93.7-48c75.7,18.9,167.5,28,256.5,28c88.9,0,180.8-9.1,256.5-28
			C841.4,575.8,861.5,598.2,862.9,602.2z" />
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
