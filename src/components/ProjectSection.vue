<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import AppContainer from "./AppContainer.vue";
import TopicComponent from "./TopicComponent.vue";
import type { ProjectCategory } from "~/src/interfaces/Projects";
import ChipItemComponent from "./ChipItemComponent.vue";

const { data } = await useAsyncData("project", () => {
  return queryCollection("project").first();
});

const projects = (data.value?.body ?? []) as ProjectCategory[];

const tabs = ref(projects);
const tab = ref(0);
const windowWidth = ref(0);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<template>
  <AppContainer>
    <TopicComponent>Projects</TopicComponent>
    <v-tabs
      v-model="tab"
      grow
      data-aos="fade-up"
      color="#252b31"
      class="mb-14 w-full sm:text-lg text-base"
    >
      <v-tab v-for="item in tabs" :key="item.title" :value="item.title">
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab" data-aos="fade-up">
      <v-tabs-window-item
        v-for="(project, index) in tabs"
        :key="index"
        :value="project.title"
      >
        <div
          v-for="(item, index2) in project.projectList"
          :key="index2"
          class="flex sm:flex-row flex-col sm:gap-x-10 gap-y-10"
          style="
            width: 100%;
            margin-bottom: 80px;
            justify-content: center;
            align-items: center;
          "
        >
          <div class="flex-3/6 max-h-96 flex justify-center">
            <NuxtImg
              data-aos="fade-up"
              :src="`/images/${item.image}`"
              class="rounded-lg h-96 object-scale-down"
            />
          </div>

          <div
            data-aos="fade-up"
            class="flex-3/6 flex flex-col items-start w-full"
          >
            <div
              v-if="item.title"
              class="sm:text-3xl text-2xl font-bold text-text-primary"
            >
              {{ item.title }}
            </div>
            <div
              v-if="item.subTitle"
              class="sm:text-base text-sm text-text-primary mb-1"
            >
              {{ item.subTitle }}
            </div>
            <div class="flex flex-row gap-2 mb-4">
              <a
                v-for="(link, i) in item.links"
                :key="i"
                :href="link.linkTo"
                target="_blank"
                class="sm:text-base text-sm text-accent"
                >{{ link.title }}</a
              >
            </div>
            <div class="sm:text-base text-sm mb-4">
              {{ item.description }}
            </div>
            <div class="flex flex-wrap gap-2">
              <ChipItemComponent
                v-for="(tool, i) in item.tools"
                :key="i"
                :skill="tool"
              />
            </div>
          </div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </AppContainer>
</template>
