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
    <path d="M819.1,251.3H191.5c-3.4,0-6.7,0.4-9.9,1.2l304,303.9c7.8,7.8,20.5,7.8,28.3,0L819.1,251.3z M862.4,264.6L617.6,509.4
		l246.9,246.9c5.3-7,8.1-15.5,8.1-24.2V291.4C872.6,281.1,868.8,271.7,862.4,264.6L862.4,264.6z M823.7,772.2L589.3,537.8
		l-47.1,47.1c-11.3,11.3-26.6,17.6-42.5,17.6c-15.9,0-31.2-6.3-42.5-17.6l-47.1-47.1L178.1,769.8c4.3,1.5,8.9,2.3,13.4,2.3H823.7
		L823.7,772.2z M152.1,739.2l229.8-229.8L152.9,280.5c-1,3.5-1.5,7.2-1.5,10.8v440.7C151.4,734.5,151.6,736.9,152.1,739.2
		L152.1,739.2z M191.5,211.2h641.1c21.3,0,41.6,8.4,56.7,23.5c15,15,23.5,35.4,23.5,56.7v440.7c0,21.3-8.4,41.6-23.5,56.7
		c-15,15-35.4,23.5-56.7,23.5H191.5c-21.3,0-41.6-8.4-56.7-23.5c-15-15-23.5-35.4-23.5-56.7V291.4c0-21.3,8.4-41.6,23.5-56.7
		C149.9,219.7,170.3,211.2,191.5,211.2L191.5,211.2z M191.5,211.2" />
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
