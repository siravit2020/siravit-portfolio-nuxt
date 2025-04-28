<script setup lang="ts">
defineProps({
  skill: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="sm:text-base text-sm px-4 py-2 rounded-full bg-zinc-100">
    {{ skill }}
  </div>
</template>
