<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId"/>
  </svg>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },

})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

