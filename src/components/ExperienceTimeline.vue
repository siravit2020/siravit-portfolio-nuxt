<script setup lang="ts">
import { ref } from "vue";
import type { Experience } from "../interfaces/Experiences";

const isSmallScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

defineProps({
  experiences: {
    type: Array as PropType<Experience[]>,
    required: true,
  },
});
</script>

<template>
  <v-timeline-item v-for="(item, i) in experiences" :key="i" size="small">
    <template v-if="!isSmallScreen" #opposite>
      <div
        data-aos="fade-up"
        class="sm:text-xl text-lg font-bold w-full"
        v-text="item.year"
      />
    </template>
    <div data-aos="fade-up" data-aos-delay="50" class="py-7">
      <div v-if="isSmallScreen" class="text-base font-bold mb-2">
        {{ item.year }}
      </div>
      <div class="sm:text-xl text-lg font-bold text-text-primary">
        {{ item.company }}
      </div>
      <div
        class="text-text-primary mb-4 whitespace-pre-line sm:text-base text-sm"
      >
        {{ item.position }}
      </div>
      <ul class="sm:text-base text-sm list-disc pl-6 pr-4">
        <li
          v-for="(des, index) in item.description"
          :key="index"
          class="text-text-primary list-outside"
        >
          {{ des }}
        </li>
      </ul>
    </div>
  </v-timeline-item>
</template>
