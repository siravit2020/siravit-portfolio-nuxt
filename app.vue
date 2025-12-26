<script setup lang="ts">
import AppBarComponent from "./src/components/AppBarComponent.vue";
import AboutMe from "./src/components/AboutSection.vue";
import EducationSection from "./src/components/EducationSection.vue";
import ExperienceSection from "./src/components/ExperienceSection.vue";
import ProjectSection from "./src/components/ProjectSection.vue";
import SkillSection from "./src/components/SkillSection.vue";

// SEO Meta Tags
useSeoMeta({
  title: "Siravit Pichphol | Software Engineer",
  description:
    "High-impact Software Engineer specializing in Flutter with a proven track record of delivering high-scale applications (800k+ downloads). Expert in Clean Architecture, Firebase, and real-time communication features.",
  ogTitle: "Siravit Pichphol | Software Engineer",
  ogDescription:
    "High-impact Software Engineer specializing in Flutter with a proven track record of delivering high-scale applications.",
  ogType: "website",
  ogUrl: "https://siravit.dev",
  ogImage: "/images/siravit.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Siravit Pichphol | Software Engineer",
  twitterDescription:
    "High-impact Software Engineer specializing in Flutter with expertise in Clean Architecture and real-time features.",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
  <div class="dot-pattern min-h-screen">
    <AppBarComponent />
    <main class="pt-16">
      <div id="about">
        <AboutMe />
      </div>
      <div id="experience" class="mb-20!">
        <ExperienceSection />
      </div>
      <div id="education" class="mb-20!">
        <EducationSection />
      </div>
      <div id="skill" class="mb-20!">
        <SkillSection />
      </div>
      <div id="project" class="mb-20!">
        <ProjectSection />
      </div>
    </main>
  </div>
</template>
