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
    <path d="M409.6,562.9H268.2c-14.9,0-27.3,9.9-27.3,24.8c0,12.4,12.4,24.8,27.3,24.8h141.4c14.9,0,27.3-12.4,27.3-24.8
		C436.9,572.8,424.5,562.9,409.6,562.9z" />
    <path d="M709.8,265.2H263.3c-12.4,0-24.8,12.4-24.8,24.8c0,12.4,12.4,24.8,24.8,24.8h446.5c12.4,0,24.8-12.4,24.8-24.8
		C734.6,277.6,722.2,265.2,709.8,265.2z" />
    <path d="M734.6,438.8c0-12.4-12.4-24.8-24.8-24.8H263.3c-12.4,0-24.8,12.4-24.8,24.8c0,12.4,12.4,24.8,24.8,24.8h446.5
		C722.2,463.6,734.6,451.2,734.6,438.8z" />
    <path d="M409.6,711.7H268.2c-14.9,0-27.3,9.9-27.3,24.8c0,12.4,12.4,24.8,27.3,24.8h141.4c14.9,0,27.3-12.4,27.3-24.8
		C436.9,721.6,424.5,711.7,409.6,711.7z" />
    <path d="M486.5,910.1H139.2V116.3h694.6v372.1c0,14.9,9.9,24.8,24.8,24.8c14.9,0,24.8-9.9,24.8-24.8V91.5
		c0-12.4-12.4-24.8-24.8-24.8H114.4c-12.4,0-24.8,12.4-24.8,24.8v843.4c0,12.4,12.4,24.8,24.8,24.8h372.1c14.9,0,24.8-9.9,24.8-24.8
		C511.3,920.1,501.4,910.1,486.5,910.1z" />
    <path d="M791.6,756.9H742v-49.6c0-12.4-12.4-24.8-24.8-24.8c-12.4,0-24.8,12.4-24.8,24.8v74.4c0,12.4,12.4,24.8,24.8,24.8h74.4
		c12.4,0,24.8-12.4,24.8-24.8C816.4,769.3,804,756.9,791.6,756.9z" />
    <path d="M734.6,562.9c-109.1,0-198.4,89.3-198.4,198.4c0,109.1,89.3,198.4,198.4,198.4c109.1,0,198.4-89.3,198.4-198.4
		C933,652.2,843.7,562.9,734.6,562.9z M734.6,910.1c-81.9,0-148.8-67-148.8-148.8c0-81.9,67-148.8,148.8-148.8
		c81.9,0,148.8,67,148.8,148.8C883.4,843.2,816.4,910.1,734.6,910.1z" />
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
