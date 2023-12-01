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
    <path class="st1" d="M303.1,910.6h417.7c30.7,0,55.6-24.8,56.2-55.3V153.6c-0.6-30.7-25.6-55.4-56.2-55.4H303.1
		c-31.1,0-56.3,25.3-56.3,56.5v699.5C246.8,885.3,272.1,910.6,303.1,910.6z M274.5,154.7c0-15.9,12.9-28.8,28.7-28.8h417.7
		c15.8,0,28.6,13,28.6,28.8v699.5c0,15.9-12.8,28.8-28.6,28.8H303.1c-15.8,0-28.7-12.9-28.7-28.8V154.7z" />
    <path class="st1" d="M512,776.3c-20.3,0-36.8,16.6-36.8,36.9c0,20.3,16.5,36.9,36.8,36.9c20.3,0,36.8-16.6,36.8-36.9
		C548.8,792.8,532.3,776.3,512,776.3z M502.9,813.2c0-5.1,4.1-9.3,9.2-9.3c5,0,9.2,4.2,9.2,9.3C521.1,823.4,502.9,823.4,502.9,813.2
		z" />
    <path class="st1" d="M311.3,749.5h399c7.6,0,13.9-6.2,13.9-13.9V175.7c0-7.6-6.3-13.9-13.9-13.9h-399c-7.6,0-13.9,6.2-13.9,13.9
		v560C297.4,743.4,303.7,749.5,311.3,749.5z M325.1,189.6h371.3v532.3H325.1V189.6z" />
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
