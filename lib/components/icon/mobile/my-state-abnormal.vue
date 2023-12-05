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
    <path d="M534.5,686.5c0-19.3,2.2-37.7,6.7-55.6c-9.9-9-16.2-16.2-18.4-19.3c-8.1-10.8-8.1-24.2-8.1-40.8c0-5.4,2.7-13.5,5.4-18.8
		l2.7-5.4c2.7-5.4,13.5-32.3,21.5-48.9c0-2.7,5.4-10.8,10.8-16.2c8.1-5.4,16.2-13.5,29.6-29.6c21.5-32.3,10.8-62.4-8.1-75.8v-5.4
		c10.8-29.6,16.2-65.1,13.5-108.1c-2.6-45.1-43.7-112.8-149-116.1h-16.2c-104.8,3.2-146.2,68.8-148.8,116.1
		c-2.7,43.5,2.7,78.5,13.5,105.4v5.4c-18.8,16.2-26.9,46.2-8.1,78.5c10.8,16.2,21.5,24.2,29.6,29.6c5.4,5.4,10.8,13.5,10.8,16.2
		c8.1,16.1,18.8,40.4,21.5,48.9l2.7,5.4c2.7,8.1,5.4,13.5,5.4,18.8c0,13.5,0,29.6-8.1,40.8c-8.1,10.8-54.3,62.4-146.2,83.9
		c-78,18.7-129.8,62.9-132.7,163.3v10.4c0.8,5.3,5.9,12,13.3,12h562.6C576.6,839.9,534.5,768.1,534.5,686.5z" />
    <path d="M766.8,491.8c-107.7,0-194.7,87.5-194.7,194.7c0,107.7,87.5,194.7,194.7,194.7c107.7,0,194.7-87.5,194.7-194.7
		C961.5,578.8,874.1,491.8,766.8,491.8z M796.7,803.5h-60.5v-60.5h60.5V803.5z M797.5,717.3h-61.4V563.9h61.4V717.3z" />
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
