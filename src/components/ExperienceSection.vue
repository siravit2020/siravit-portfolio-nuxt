<script setup lang="ts">
import { ref } from "vue";
import AppContainer from "./AppContainer.vue";
import TopicComponent from "./TopicComponent.vue";
import type { Experience } from "../interfaces/Experiences";
import ExperienceTimeline from "./ExperienceTimeline.vue";

const isSmallScreen = ref(false);

const { data: professionalExperienceData } = await useAsyncData(
  "experience",
  () => {
    return queryCollection("experience").first();
  }
);

const { data: freelanceData } = await useAsyncData(
  "experience_freelance",
  () => {
    return queryCollection("experience")
      .where("stem", "=", "experience/experience_freelance")
      .first();
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
      <!-- <v-timeline-item v-for="(item, i) in professionalExperience" :key="i" size="small">
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
    </v-timeline-item> -->
    </v-timeline>
    <!-- <ExperienceTimeline :experiences="professionalExperience" />
    <TopicComponent> Freelance Projects </TopicComponent>
    <ExperienceTimeline :experiences="freelanceExperience" /> -->
  </AppContainer>
</template>
