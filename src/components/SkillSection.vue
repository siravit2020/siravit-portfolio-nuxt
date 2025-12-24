<script setup lang="ts">
import AppContainer from "./AppContainer.vue";
import SkillComponent from "./SkillComponent.vue";
import TopicComponent from "./TopicComponent.vue";
import type { Skill } from "~/src/interfaces/Skills";

const { data } = await useAsyncData("skill", () => {
  return queryCollection("skill").first();
});

const skill = (data.value?.body ?? []) as Skill[];
</script>

<template>
  <AppContainer>
    <section aria-labelledby="skills-heading" class="w-full">
      <TopicComponent id="skills-heading">Skills</TopicComponent>
      <div class="flex sm:flex-row flex-col sm:justify-between">
        <div class="flex flex-col flex-1/2 gap-y-6 px-4">
          <SkillComponent :skill="skill.slice(0, 3)" />
        </div>
        <div class="flex flex-col flex-1/2 gap-y-6 px-4">
          <SkillComponent :skill="skill.slice(3)" />
        </div>
      </div>
    </section>
  </AppContainer>
</template>
