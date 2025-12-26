<script setup lang="ts">
import AppContainer from "./AppContainer.vue";
import SocialButton from "./SocialButton.vue";
import { VueWriter } from "vue-writer";
</script>

<template>
  <AppContainer class="min-h-screen">
    <div class="relative inline-block">
      <NuxtImg
        data-aos="fade-up"
        src="/images/siravit.jpg"
        alt="Siravit Pichphol - Software Engineer"
        class="h-[40vw] max-w-62.5 max-h-62.5 w-[40vw] rounded-full bg-background-gray shadow-glow"
      />
    </div>
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
        High-impact Software Engineer specializing in Flutter with a proven
        track record of delivering high-scale applications (800k+ downloads).
        Expert in Clean Architecture, the Firebase Ecosystem, and sophisticated
        State Management (Bloc/GetX). Highly experienced in engineering
        real-time communication features (VoIP/Messaging) and building secure,
        scalable mobile solutions with automated CI/CD pipelines.
      </p>

      <nav
        class="flex flex-row mt-10"
        data-aos="fade-up"
        data-aos-delay="300"
        aria-label="Social links"
      >
        <SocialButton
          icon-svg="/icons/github.svg"
          link="https://github.com/siravit2020?tab=repositories"
          aria-label="GitHub Profile"
          class="mx-3"
        />
        <SocialButton
          icon-svg="/icons/linkedin.svg"
          link="https://www.linkedin.com/in/siravit-pichphol-180429211/"
          aria-label="LinkedIn Profile"
          class="mr-3"
        />
        <SocialButton
          icon-svg="/icons/email.svg"
          link="mailto:siravitpichphol@gmail.com"
          aria-label="Send Email"
          class="mr-3"
        />
        <SocialButton
          icon-svg="/icons/phone.svg"
          link="tel:0851325654"
          aria-label="Call Phone"
        />
      </nav>
    </div>
  </AppContainer>
</template>
