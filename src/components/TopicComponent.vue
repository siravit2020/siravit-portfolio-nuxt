<script setup lang="ts">
defineProps<{
  id?: string;
}>();
</script>

<template>
  <h2 :id="id" data-aos="fade-up" class="sm:text-5xl text-4xl mb-12">
    <slot />
  </h2>
</template>
