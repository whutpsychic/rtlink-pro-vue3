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
    <path d="M945.9,336.6c-14.3-10.5-33.2-5.5-42.2,11c-80,145.7-229.7,236.1-390.6,236.1c-160.9,0-310.6-90.5-390.6-236.1
	c-9-16.5-27.9-21.4-42.2-11c-8.5,6.2-13.4,16.3-14.1,27v5.7c0.4,5.5,1.9,10.9,4.6,15.8c25.6,46.7,57.5,88.5,94.1,124.3l-45.7,144
	c-5.8,18.3,2.3,38.5,18.3,45.1c3.4,1.5,7,2.2,10.5,2.2c12.5,0,24.2-8.8,28.7-23.2L216,553.5c40.5,30.5,85,54.6,132.2,71.7
	l-22.8,150.2c-2.9,19.2,8.3,37.4,24.9,40.8c1.8,0.3,3.5,0.5,5.3,0.5c14.6,0,27.5-12.1,30.1-29.2l22-145
	c34.3,7.7,69.6,11.7,105.4,11.7c33.3,0,66.1-3.5,98.2-10.1l25.9,144.5c3,16.7,15.7,28.1,29.9,28.1c2.1,0,4.1-0.2,6.2-0.7
	c16.6-3.9,27.2-22.6,23.8-41.6l-26.3-146.6c44.9-15.4,87.5-37.3,126.6-64.9l48.9,142c4.8,13.9,16.3,22.2,28.5,22.2
	c3.9,0,7.7-0.8,11.3-2.5c15.7-7.2,23.4-27.7,17.2-45.7l-54.1-156.9c-0.1-0.2-0.2-0.4-0.3-0.7c41.8-38.4,78-84.1,106.5-136
	C964.5,368.8,960.2,347,945.9,336.6z" />
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
