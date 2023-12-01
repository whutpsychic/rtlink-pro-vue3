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
    <path d="M624.6,549.1c0-10.8-9.1-17.3-17.9-17.3l-524.2,0c-1-0.2-2-0.4-3-0.4c-7.9,0-15.4,7.6-15.4,15.7c0,10.3,8.3,19.3,17.9,19.3
		h524.7C617.9,566.4,624.6,557.6,624.6,549.1z" />
    <path d="M81.9,469.4h524.7c11.2,0,17.9-8.8,17.9-17.3c0-10.8-9.1-17.3-17.9-17.3l-524.2,0c-1-0.2-1.9-0.4-3-0.4
		c-7.9,0-15.4,7.6-15.4,15.7C64,460.4,72.4,469.4,81.9,469.4z" />
    <path d="M116,372.6h524.7c11.2,0,17.9-8.8,17.9-17.3c0-10.8-9.1-17.3-17.9-17.3l-524.4,0c-1.1-0.2-2.3-0.4-3.4-0.4
		c-9.3,0-14.9,8-14.9,15.7C98.1,364.6,105.4,372.6,116,372.6z" />
    <path d="M957.9,525.9c-0.4-0.8-0.8-1.5-0.8-2.1v-0.6l-132.8-181c-4.6-4.4-9.2-4.4-13.3-4.4h-68.2v-64.1c0-10.8-9.1-17.3-17.9-17.3
		H166.1c-11.3,0-17.9,8.8-17.9,17.3c0,8.5,6.7,17.3,17.9,17.3H705v255.9c0,10.8,9,17.3,17.9,17.3h198.5v108.8h-32.7
		c-8.8-37.1-43.8-63.9-83.7-63.9c-39.9,0-74.8,26.8-83.6,63.9H588.1c-8.8-37.1-43.8-63.9-83.7-63.9c-39.9,0-74.8,26.8-83.6,63.9
		H128.2c-11.2,0-17.9,8.9-17.9,17.3c0,10.9,9.1,17.4,17.9,17.4h294.6c8.8,37.1,43.8,64,83.7,64c39.9,0,74.8-26.8,83.6-64h133.2
		c8.8,37.1,43.8,64,83.6,64c39.9,0,74.8-26.8,83.6-64h50.6c11.2,0,17.9-8.9,17.9-17.4V529.7C959.1,528.2,958.5,527,957.9,525.9z
		 M742.8,529.8V372.6H802l115.5,157.2H742.8z M506.5,739.1c-27.1,0-48.2-20.5-48.2-46.7c0-26.1,21.2-46.6,48.2-46.6
		c27,0,48.2,20.5,48.2,46.6C554.7,718.6,533.5,739.1,506.5,739.1z M807,739.1c-27,0-48.2-20.5-48.2-46.7c0-26.1,21.2-46.6,48.2-46.6
		c27,0,48.2,20.5,48.2,46.6C855.2,718.6,834,739.1,807,739.1z" />
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
