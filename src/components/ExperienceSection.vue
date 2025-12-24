<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AppContainer from "./AppContainer.vue";
import TopicComponent from "./TopicComponent.vue";
import type { Experience } from "../interfaces/Experiences";
import ExperienceTimeline from "./ExperienceTimeline.vue";

const isSmallScreen = ref(false);

const { data: professionalExperienceData } = await useAsyncData(
  "experience",
  async () => {
    const result = await queryCollection("experience").first();
    return result ?? null;
  }
);

const { data: freelanceData } = await useAsyncData(
  "experience_freelance",
  async () => {
    const result = await queryCollection("experience")
      .where("stem", "=", "experience/experiences_freelance")
      .first();
    return result ?? null;
  }
);

const professionalExperience = (professionalExperienceData.value?.body ??
  []) as Experience[];
const freelanceExperience = (freelanceData.value?.body ?? []) as Experience[];

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 768;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <AppContainer>
    <TopicComponent> Professional Experience </TopicComponent>
    <v-timeline :side="isSmallScreen ? 'end' : undefined">
      <ExperienceTimeline :experiences="professionalExperience" />
      <v-timeline-item hide-dot height="224">
        <template v-if="!isSmallScreen" #opposite>
          <TopicComponent class="mb-0! invisible"> Freelance</TopicComponent>
        </template>
        <div class="flex! flex-col! items-center! h-56! justify-center!">
          <TopicComponent class="mb-0!"> Freelance</TopicComponent>
          <!-- <div class="sm:text-xl text-lg font-bold">Freelance</div> -->
        </div>
      </v-timeline-item>
      <ExperienceTimeline :experiences="freelanceExperience" />
    </v-timeline>
  </AppContainer>
</template>
