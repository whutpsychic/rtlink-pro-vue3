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
    <path d="M917.4,517.3c-24.8,0-44.8,20-44.8,44.8v285.5c0,12.3-10.1,22.4-22.4,22.4H178.6c-12.4,0-22.4-10.1-22.4-22.4V175.9
			c0-12.3,10-22.4,22.4-22.4h386.2c24.8,0,44.8-20,44.8-44.8s-20-44.8-44.8-44.8H178.6c-61.7,0-112,50.2-112,112v671.7
			c0,61.7,50.2,112,112,112h671.7c61.7,0,112-50.2,112-112V562.1C962.2,537.4,942.2,517.3,917.4,517.3z" />
    <path d="M572.3,345.7c-17.5,17.5-17.5,45.8,0,63.3l133.9,134c3.3,3.4,7.1,6.2,11.3,8.4c0,0,0.1,0,0.1,0.1c1.3,0.7,2.5,1.3,3.9,1.8
			h0.1c1.3,0.5,2.6,1,4,1.4h0.1c1.3,0.4,2.7,0.7,4.1,1c0.1,0,0.1,0,0.2,0c1.3,0.3,2.7,0.5,4.1,0.6c0.1,0,0.1,0,0.2,0
			c1.4,0.1,2.8,0.2,4.2,0.2s2.8-0.1,4.2-0.2c0.1,0,0.1,0,0.2,0c1.4-0.1,2.8-0.3,4.1-0.6c0.1,0,0.1,0,0.2,0c1.4-0.3,2.7-0.6,4.1-1
			h0.1c1.4-0.4,2.7-0.9,4-1.4h0.1c1.3-0.5,2.6-1.1,3.9-1.8c0,0,0.1,0,0.1-0.1c4.2-2.2,8-5.1,11.3-8.4l133.9-133.9
			c17.5-17.5,17.5-45.8,0-63.3s-45.8-17.5-63.3,0l-57.9,57.9v-295c0-24.8-20-44.8-44.8-44.8s-44.8,20-44.8,44.8v294.9L636,345.7
			C618.1,328.3,589.8,328.3,572.3,345.7z" />
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