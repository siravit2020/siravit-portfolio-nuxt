<script setup lang="ts">
import type { Skill } from "~/src/interfaces/Skills";
import type { PropType } from "vue";
import ChipItemComponent from "./ChipItemComponent.vue";

defineProps({
  skill: {
    type: Array as PropType<Skill[]>,
    required: true,
  },
});
</script>
<template>
  <div v-for="(item, index) in skill" :key="index">
    <h3
      data-aos="fade-up"
      class="sm:text-xl text-lg font-bold mb-3 text-text-primary"
    >
      {{ item.topic }}
    </h3>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="(skillListItem, i) in item.list"
        :key="i"
        data-aos="fade-up"
        :data-aos-delay="i * 100"
      >
        <ChipItemComponent :skill="skillListItem" />
      </div>
    </div>
  </div>
</template>
