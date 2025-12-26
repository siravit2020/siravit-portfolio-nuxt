<script setup lang="ts">
import TopicComponent from "./TopicComponent.vue";
</script>

<template>
  <section
    class="container mx-auto flex flex-col justify-center items-center py-10 px-4 max-w-5xl"
    aria-labelledby="education-heading"
  >
    <TopicComponent id="education-heading">Education</TopicComponent>
    <article class="flex flex-row justify-between items-start">
      <div
        class="sm:text-xl text-lg font-bold text-accent mr-4"
        data-aos="fade-left"
      >
        <time datetime="2017/2021">2017-2021</time>
      </div>
      <div class="flex flex-col" data-aos="fade-up">
        <h3 class="sm:text-xl text-lg font-bold">
          KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK
        </h3>
        <p class="sm:text-xl text-lg text-app-secondary">
          Faculty of Industrial Technology College of Technology Electronics
          Engineering Computer
        </p>
      </div>
    </article>
  </section>
</template>
