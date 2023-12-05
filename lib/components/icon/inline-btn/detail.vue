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
    <path class="st1"
      d="M832.9,64.8H195.5C125.1,64.8,68,121.9,68,192.3v637.4c0,70.4,57.1,127.5,127.5,127.5h637.4
			c70.4,0,127.5-57.1,127.5-127.5V192.3C960.4,121.9,903.3,64.8,832.9,64.8z M896.6,829.7c0,35.2-28.5,63.7-63.7,63.7H195.5
			c-35.2,0-63.7-28.5-63.7-63.7V192.3c0-35.2,28.5-63.7,63.7-63.7h637.4c35.2,0,63.7,28.5,63.7,63.7L896.6,829.7L896.6,829.7z" />
    <rect x="323" y="447.3" class="st1" width="446.2" height="63.7" />
    <rect x="323" y="638.5" class="st1" width="318.7" height="63.7" />
    <rect x="195.5" y="638.5" class="st1" width="63.7" height="63.7" />
    <rect x="323" y="256.1" class="st1" width="446.2" height="63.7" />
    <rect x="195.5" y="447.3" class="st1" width="63.7" height="63.7" />
    <rect x="195.5" y="256.1" class="st1" width="63.7" height="63.7" />
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
