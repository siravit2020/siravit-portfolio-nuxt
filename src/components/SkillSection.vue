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
    <TopicComponent>Skills</TopicComponent>
    <div class="flex sm:flex-row flex-col sm:justify-between">
      <div class="flex flex-col flex-1/2 gap-y-6 px-4">
        <SkillComponent :skill="skill.slice(0, 6)" />
      </div>
      <div class="flex flex-col flex-1/2 gap-y-6 px-4">
        <SkillComponent :skill="skill.slice(6)" />
      </div>
    </div>
  </AppContainer>
</template>

<!-- <style lang="scss" scoped>
.title {
  margin-bottom: 10px;
  color: var(--primary-color);
  font-weight: 500;
}
.skill {
  color: var(--primary-color);
  font-weight: 400;
  padding-right: 10px;
}
.tag {
  color: var(--primary-color);
  background-color: #e9e9e980;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 400;
  margin-bottom: 8px;
  margin-right: 8px;
  min-width: 130;
}
.desk {
  width: 100%;
}
</style> -->
