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
    <path d="M389.9,875.9H188.3V150.1h564.5v209.6c0,22.3,18,40.3,40.3,40.3s40.3-18,40.3-40.3V150.1c0-44.5-36.2-80.6-80.6-80.6
			H188.3c-44.5,0-80.6,36.2-80.6,80.6v725.8c0,44.5,36.2,80.6,80.6,80.6h201.6c22.3,0,40.3-18,40.3-40.3
			C430.3,893.9,412.2,875.9,389.9,875.9z" />
    <path d="M611.7,311.4c0-22.3-18-40.3-40.3-40.3H309.3c-22.3,0-40.3,18-40.3,40.3s18.1,40.3,40.3,40.3h262.1
			C593.7,351.7,611.7,333.7,611.7,311.4z" />
    <path
      d="M309.3,412.2c-22.3,0-40.3,18-40.3,40.3s18.1,40.3,40.3,40.3h100.8c22.3,0,40.3-18,40.3-40.3s-18-40.3-40.3-40.3H309.3z" />
    <path
      d="M672.2,472.7c-133.4,0-241.9,108.5-241.9,241.9s108.5,241.9,241.9,241.9S914.1,848,914.1,714.6S805.6,472.7,672.2,472.7z
			 M672.2,875.9c-89,0-161.3-72.3-161.3-161.3s72.3-161.3,161.3-161.3s161.3,72.3,161.3,161.3S761.2,875.9,672.2,875.9z" />
    <path d="M672.2,714.6c-22.3,0-40.3,18-40.3,40.3v60.5c0,22.3,18,40.3,40.3,40.3s40.3-18,40.3-40.3v-60.5
			C712.5,732.6,694.5,714.6,672.2,714.6z" />
    <circle cx="672.2" cy="634" r="40.3" />
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