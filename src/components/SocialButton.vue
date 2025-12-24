<script setup lang="ts">
defineProps<{
  iconSvg: string;
  link: string;
  ariaLabel?: string;
}>();
</script>

<template>
  <v-btn
    icon
    color="#d49c6b"
    :href="link"
    variant="text"
    target="_blank"
    :aria-label="ariaLabel || 'Social link'"
    rel="noopener noreferrer"
  >
    <NuxtImg :src="iconSvg" class="h-6 w-6" :alt="ariaLabel || 'Social icon'" />
  </v-btn>
</template>
