<script setup>
import AppContainer from "./AppContainer.vue";
import SocialButton from "./SocialButton.vue";
import { VueWriter } from "vue-writer";
</script>

<template>
  <AppContainer class="min-h-screen">
    <NuxtImg
      data-aos="fade-up"
      src="/images/siravit.jpg"
      class="h-[40vw] max-w-[250px] max-h-[250px] w-[40vw] rounded-full bg-background-gray"
    />
    <div class="flex flex-col items-center mt-10">
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        class="text-4xl sm:text-5xl text-text-primary font-medium"
      >
        SIRAVIT PICHPHOL
      </h1>
      <VueWriter
        :array="['SOFTWARE ENGINEER']"
        :type-speed="100"
        :delay="400"
        class="mb-8 sm:text-2xl text-xl text-accent"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        class="sm:text-base text-sm text-center text-text-primary px-4 max-w-4xl"
      >
        I am a dedicated software engineer specializing in mobile application
        development. I focus on building high-quality, scalable systems by
        following best practices and emphasizing maintainable code. Driven by
        continuous learning, I constantly seek new tools and techniques to
        deliver better solutions for users and businesses.
      </p>

      <div class="flex flex-row mt-10" data-aos="fade-up" data-aos-delay="300">
        <SocialButton
          icon-svg="/icons/line.svg"
          link="https://line.me/ti/p/X1KcXqED80"
        />
        <SocialButton
          icon-svg="/icons/github.svg"
          link="https://github.com/siravit2020?tab=repositories"
          class="mx-3"
        />
        <SocialButton icon-svg="/icons/phone.svg" link="tel:0851325654" />
      </div>
    </div>
  </AppContainer>
</template>
