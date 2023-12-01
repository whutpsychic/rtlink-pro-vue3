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
    <path d="M860.4,104.2H170.1c-56,0-101.5,45.5-101.5,101.5v609c0,56,45.5,101.5,101.5,101.5h690.2c56,0,101.5-45.5,101.5-101.5
			v-609C961.9,149.7,916.3,104.2,860.4,104.2z M880.7,814.7c0,11.2-9.1,20.3-20.3,20.3H170.1c-11.2,0-20.3-9.1-20.3-20.3V347.8
			h730.8v466.9H880.7z M880.7,266.6H149.8v-60.9c0-11.2,9.1-20.3,20.3-20.3h690.2c11.2,0,20.3,9.1,20.3,20.3L880.7,266.6
			L880.7,266.6z" />
    <path d="M434,550.8h324.8c22.4,0,40.6-18.2,40.6-40.6s-18.2-40.6-40.6-40.6H434c-22.4,0-40.6,18.2-40.6,40.6
			S411.6,550.8,434,550.8z" />
    <path d="M434,713.2h324.8c22.4,0,40.6-18.2,40.6-40.6S781.3,632,758.8,632H434c-22.4,0-40.6,18.2-40.6,40.6S411.6,713.2,434,713.2
			z" />
    <path d="M271.6,550.8h40.6c22.4,0,40.6-18.2,40.6-40.6s-18.2-40.6-40.6-40.6h-40.6c-22.4,0-40.6,18.2-40.6,40.6
			S249.2,550.8,271.6,550.8z" />
    <path d="M271.6,713.2h40.6c22.4,0,40.6-18.2,40.6-40.6S334.7,632,312.2,632h-40.6c-22.4,0-40.6,18.2-40.6,40.6
			S249.2,713.2,271.6,713.2z" />
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
