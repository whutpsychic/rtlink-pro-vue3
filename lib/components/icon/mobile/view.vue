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
    <path class="st1" d="M511.2,180.4c-250.1,0-444.7,239-444.7,333.5c0,94.5,194.5,333.5,444.7,333.5c250.1,0,444.7-239,444.7-333.5
		C955.9,419.5,761.3,180.4,511.2,180.4z M511.2,791.9c-216.8,0-389.1-211.2-389.1-277.9S294.4,236,511.2,236
		c216.8,0,389.1,211.2,389.1,277.9S728,791.9,511.2,791.9z" />
    <path class="st1" d="M511.2,375c-77.8,0-139,61.1-139,139c0,77.8,61.1,139,139,139c77.8,0,139-61.1,139-139
		C650.1,436.1,589,375,511.2,375z M511.2,597.3c-44.5,0-83.4-38.9-83.4-83.4c0-44.5,38.9-83.4,83.4-83.4c44.5,0,83.4,38.9,83.4,83.4
		C594.6,558.4,555.7,597.3,511.2,597.3z" />
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
