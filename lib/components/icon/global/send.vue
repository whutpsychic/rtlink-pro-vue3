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
    <path class="st1" d="M920.2,103.3c-9.3-7.2-22-8.1-32.3-2.2l-20.9,12l-57.2,33L725.5,195l-103.2,59.7l-112.7,65.2l-113.8,65.8
			L289.7,447L200,498.9l-64.7,37.5c-10.2,5.9-20.4,11.7-30.5,17.7l-1.3,0.8c-19.4,11.2-18.2,38.7,0,50.2l65.8,41.6l104.4,66l24,15.2
			c12.9,8.1,32.6,3.1,39.7-10.4c7.6-14.3,3.3-31.1-10.4-39.7L261.2,636l-87-55l36.7-21.2l84.3-48.8l103.3-59.7l112.7-65.2L625,320.2
			l106-61.3l49.7-28.7l-50.3,61.5c-29.4,36-58.8,71.9-88.2,107.9l-89.3,109.3l-79.8,97.5l-59.6,72.8c-9.4,11.5-18.9,23.1-28.2,34.6
			c-5.2,6.4-9.2,12.9-9.5,21.8c-0.1,3.1,0,6.3,0,9.4v182.2c0.2,16.1,13.4,29,29.5,28.8c7.5-0.1,14.7-3.1,20-8.3l48.1-48l76.7-76.7
			l4.9-4.9l64.3,22.3l127,44.1l29.1,10.1c13.7,4.7,33.3-5.5,35.7-20.3l3.2-19.8c2.9-17.9,5.8-35.9,8.6-53.8
			c4.3-26.5,8.6-53.1,12.8-79.6l15.7-97.2c5.7-35.5,11.4-71,17.2-106.4c5.8-35.8,11.5-71.6,17.3-107.5L902,309.7l13.7-84.7
			c3.3-20.4,6.6-40.8,9.9-61.2c1.5-9.6,3.1-19.2,4.6-28.7l0.2-1.3C932.5,121.9,930.2,111,920.2,103.3z M849.9,271.6l-15.7,97.2
			c-5.7,35.5-11.4,71-17.2,106.4c-5.8,35.8-11.5,71.6-17.3,107.5l-16.2,100.2l-13.7,84.7l-9.7,60.2l-49-17l-127-44.1L555,756.6
			c-9.6-3.3-21.3,0.5-28.2,7.5l-48.1,48L433.8,857V745.6l4.8-5.9l36.1-44.1l53.5-65.5l65-79.6c23.9-29.2,47.7-58.3,71.6-87.5
			l72.2-88.4l67.1-82l52.7-64.4C854.6,242.7,852.2,257.2,849.9,271.6z" />
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
