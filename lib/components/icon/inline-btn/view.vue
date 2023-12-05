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
    <path d="M510.4,159.3c-216.4,0-397.8,149.5-446.8,350.8c49,201.3,230.4,350.8,446.8,350.8s397.8-149.5,446.8-350.8
			C908.2,308.8,726.7,159.3,510.4,159.3z M755.4,709.3c-34.1,27.2-72.1,48.3-113,62.8c-42.3,15.1-86.7,22.7-132.1,22.7
			s-89.8-7.6-132.1-22.7c-40.9-14.5-78.9-35.7-113-62.8c-33.8-26.9-62.8-59-86.2-95.3c-20.8-32.3-36.7-67.2-47.2-104
			c10.6-36.7,26.4-71.7,47.2-104c23.3-36.2,52.5-68.4,86.2-95.3c34.1-27.2,72.1-48.3,113-62.8c42.3-15.1,86.7-22.7,132.1-22.7
			s89.8,7.6,132.1,22.7c40.9,14.5,78.9,35.7,113,62.8c33.8,26.9,62.8,59,86.2,95.3c20.8,32.3,36.7,67.2,47.2,104
			c-10.6,36.7-26.4,71.7-47.2,104C818.3,650.4,789.3,682.4,755.4,709.3z" />
    <path
      d="M510.4,314.2c-108.2,0-195.9,87.7-195.9,195.9S402.2,706,510.4,706s195.9-87.7,195.9-195.9
			C706.2,401.9,618.5,314.2,510.4,314.2z M602.2,602c-24.5,24.5-57.2,38-91.9,38s-67.3-13.5-91.9-38c-24.5-24.5-38-57.2-38-91.9
			s13.5-67.3,38-91.9c24.5-24.5,57.2-38,91.9-38s67.3,13.5,91.9,38c24.5,24.5,38,57.2,38,91.9C640.3,544.8,626.8,577.4,602.2,602z" />
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
