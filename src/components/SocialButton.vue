<script setup>
defineProps({
  iconSvg: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-btn icon color="#d49c6b" :href="link" variant="text" target="_blank">
    <NuxtImg :src="iconSvg" class="h-6 w-6" />
  </v-btn>
</template>
