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
    <path class="st1" d="M210.2,724.7h194l0,0c19.9,0,36.1-17.2,36.1-38.3s-16.2-38.3-36.1-38.3h-194c-1.9-0.2-3.9-0.2-5.9,0
			c-18.3,1.7-31.9,18.9-30.2,38.3c0,0.4,0,0.7,0,1.1C174.3,708.4,190.5,725,210.2,724.7z" />
    <path class="st1" d="M214.7,337.1h397.1c19.9,0,36.1-17.1,36.1-38.3c0-21.1-16.2-38.3-36.1-38.3H214.7c-1.9-0.2-3.9-0.2-5.9,0
			c-18.3,1.7-31.9,18.9-30.2,38.3c0,0.3,0,0.5,0,0.8C178.8,320.5,194.9,337.3,214.7,337.1z" />
    <path class="st1" d="M521.5,495c0-21.1-16.2-38.3-36.1-38.3H214.7c-2-0.2-4-0.2-6,0c-18.3,1.7-31.8,18.9-30.1,38.3
			c0,0.4,0,0.8,0,1.2c0.3,20.8,16.5,37.5,36.1,37.1h270.8l0,0C505.4,533.3,521.5,516.1,521.5,495z" />
    <path class="st1" d="M715.6,509.4c-117.1,0-212.1,100.7-212.1,225c0,0.2,0,0.4,0,0.7c0.2,124.1,95.1,224.5,212.1,224.3
			c117.1,0,212.1-100.7,212.1-225S832.7,509.4,715.6,509.4z M715.6,892.3c-79.8,0-144.4-68.6-144.4-153.2
			c0.6-84.3,64.9-152.5,144.4-153.2c79.8,0,144.4,68.6,144.4,153.2S795.3,892.3,715.6,892.3z" />
    <path class="st1" d="M462.9,915c-0.4-20.7-16.5-37.2-36.1-36.8H160.5c-16.1-1.8-28-16.6-27.1-33.7v-675
			c-0.8-17,11.1-31.7,27.1-33.5h491.9c16,1.8,27.9,16.5,27.1,33.5v201c-0.2,2.1-0.2,4.1,0,6.2c1.6,19.4,17.8,33.8,36.1,32.1
			c0.2,0,0.5,0,0.7,0c19.7-0.2,35.6-17.4,35.4-38.3v-201c0-0.4,0-0.8,0-1.2c0.9-56.5-41.5-103.1-94.8-104.1H165c-0.5,0-1,0-1.5,0
			c-53.2,1.8-94.9,48.9-93.3,105.3v674.9c0,0.5,0,1,0,1.5c-0.8,56.4,41.6,102.9,94.8,103.8l266.3,0.2c2.1,0.2,4.2,0.2,6.3,0
			c15.7-1.8,27-16.8,25.3-33.5C462.9,915.9,462.9,915.5,462.9,915z" />
    <path class="st1" d="M778.8,657.7l-90.3,86.2l-31.6-38.3c-13.6-13.8-35-13.8-48.6,0c-14,14.2-14.5,37.8-1.1,52.6l54.2,62.2
			c16,12.9,38.1,12.9,54.2,0l112.8-110.1c13-14.4,13-37.1,0-51.5C815,644,792.8,643.5,778.8,657.7z" />
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
