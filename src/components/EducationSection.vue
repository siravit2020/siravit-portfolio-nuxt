<script setup lang="ts">
import TopicComponent from "./TopicComponent.vue";
</script>

<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center py-10 px-4 max-w-[64rem]"
  >
    <TopicComponent>Education</TopicComponent>
    <div class="flex flex-row justify-between items-start">
      <div
        class="sm:text-xl text-lg font-bold text-accent mr-4"
        data-aos="fade-left"
      >
        2017-2021
      </div>
      <div class="flex flex-col" data-aos="fade-up">
        <div class="sm:text-xl text-lg font-bold">
          KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK
        </div>
        <div class="sm:text-xl text-lg text-app-secondary">
          Faculty of Industrial Technology College of Technology Electronics
          Engineering Computer
        </div>
      </div>
    </div>
  </div>
</template>
