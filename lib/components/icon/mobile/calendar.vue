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
    <rect x="232.8" y="679.8" class="st1" width="111.9" height="111.9" />
    <rect x="456.6" y="679.8" class="st1" width="111.9" height="111.9" />
    <rect x="232.8" y="455.9" class="st1" width="111.9" height="111.9" />
    <rect x="680.4" y="64.2" class="st1" width="56" height="109.1" />
    <path class="st1" d="M792.3,120.2v111.9H624.5V120.2H400.6v111.9H232.8V120.2H64.9v839.4h895.3V120.2H792.3z M904.3,903.6H120.8
		V344h783.4V903.6z" />
    <rect x="456.6" y="455.9" class="st1" width="111.9" height="111.9" />
    <rect x="288.7" y="64.2" class="st1" width="56" height="109.1" />
    <rect x="680.4" y="455.9" class="st1" width="111.9" height="111.9" />
    <rect x="680.4" y="679.8" class="st1" width="111.9" height="111.9" />
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
