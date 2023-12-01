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
    <path d="M377.6,645.6c0-24.8,20.1-44.9,44.9-44.9h295.6l-58-58c-17.5-17.5-17.5-45.9,0-63.5c17.5-17.5,45.9-17.5,63.5,0L858,613.7
		c1.1,1.1,2.2,2.3,3.2,3.5c0.2,0.2,0.3,0.4,0.5,0.6c0.7,0.9,1.5,1.9,2.1,2.9c0.3,0.4,0.5,0.9,0.8,1.3c0.5,0.8,1,1.6,1.4,2.4
		c0.3,0.5,0.5,1.1,0.8,1.6c0.4,0.8,0.8,1.6,1.1,2.4c0.2,0.6,0.4,1.1,0.6,1.7c0.3,0.8,0.6,1.6,0.9,2.5c0.2,0.6,0.3,1.2,0.5,1.8
		c0.2,0.8,0.4,1.6,0.6,2.4c0.1,0.7,0.2,1.5,0.3,2.2s0.2,1.4,0.3,2.1c0.3,2.9,0.3,5.9,0,8.8c-0.1,0.7-0.2,1.4-0.3,2.1
		c-0.1,0.7-0.2,1.5-0.3,2.2c-0.2,0.8-0.4,1.6-0.6,2.4c-0.2,0.6-0.3,1.2-0.5,1.8c-0.3,0.8-0.6,1.6-0.9,2.5c-0.2,0.6-0.4,1.1-0.6,1.7
		c-0.3,0.8-0.7,1.6-1.1,2.4c-0.3,0.5-0.5,1.1-0.8,1.6c-0.4,0.8-0.9,1.6-1.4,2.4c-0.3,0.4-0.5,0.9-0.8,1.3c-0.7,1-1.4,2-2.1,2.9
		c-0.2,0.2-0.3,0.4-0.5,0.6c-1,1.2-2.1,2.4-3.2,3.5L723.5,812c-8.8,8.8-20.3,13.2-31.7,13.2c-11.5,0-23-4.4-31.7-13.2
		c-17.5-17.5-17.5-45.9,0-63.5l58-58H422.5C397.7,690.4,377.6,670.4,377.6,645.6z" />
    <path d="M890.3,476.2v-100c0-13.6-6.2-26.5-16.9-35.1L536.8,71.9c-16.4-13.1-39.7-13.1-56.1,0L144.1,341.2
		c-10.7,8.5-16.9,21.4-16.9,35.1v538.6c0,24.8,20.1,44.9,44.9,44.9h673.3c24.8,0,44.9-20.1,44.9-44.9v-90.3
		c0-24.8-20.1-44.9-44.9-44.9c-24.8,0-44.9,20.1-44.9,44.9V870H217V397.8l291.8-233.4l291.8,233.4v78.4c0,24.8,20.1,44.9,44.9,44.9
		C870.2,521.1,890.3,501,890.3,476.2z" />
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
