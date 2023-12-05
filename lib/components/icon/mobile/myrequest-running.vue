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
    <path class="st1" d="M829.7,194.7C745,110.2,632.5,63.6,512.9,63.6c-119.7,0-232.2,46.7-316.8,131.1
		c-83.2,83.3-129.6,193.8-131,311.4v10.8c1.4,117.6,47.8,228,131,311.4c84.6,84.6,197.1,131.3,316.8,131.3
		c119.7,0,232.2-46.7,316.8-131.3c84.6-84.6,131.3-197.1,131.3-316.8C960.9,391.9,914.3,279.3,829.7,194.7z M512.9,917.4
		c-223.7,0-405.9-182-405.9-405.9c0-223.7,182.1-405.9,405.9-405.9c223.9,0,406,182.1,405.9,405.9
		C918.8,735.3,736.8,917.4,512.9,917.4z" />
    <path class="st1" d="M442.4,267.6c-8.4-8.1-21.7-7.8-29.7,0.6c-8.1,8.4-7.8,21.7,0.6,29.7l220.2,211.8L422.9,728.5
		c-8.1,8.4-7.8,21.7,0.6,29.7c4.1,3.9,9.4,5.9,14.6,5.9c5.5,0,10.9-2.1,15.1-6.4l225.1-234c3.9-4.1,6-9.4,5.9-15
		c-0.1-5.6-2.4-10.8-6.4-14.7L442.4,267.6z" />
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
