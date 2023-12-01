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
    <path d="M512,65.4C265.4,65.4,64.9,266,64.9,512.5S265.4,959.6,512,959.6S959,759,959,512.5S758.5,65.4,512,65.4z M878.3,512.5
			c0,86.5-30.1,166-80.4,228.8L283.2,226.6c62.7-50.3,142.3-80.4,228.8-80.4C713.9,146.2,878.3,310.5,878.3,512.5z M145.6,512.5
			c0-86.5,30.1-166.1,80.5-228.8l514.6,514.6C678,848.7,598.4,878.8,512,878.8C310,878.8,145.6,714.5,145.6,512.5z" />
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