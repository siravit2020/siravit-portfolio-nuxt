<script setup lang="ts">
import AppContainer from "./AppContainer.vue";
import TopicComponent from "./TopicComponent.vue";

const contactInfo = [
  {
    icon: "/icons/email.svg",
    label: "Email",
    value: "siravitpichphol@gmail.com",
    link: "mailto:siravitpichphol@gmail.com",
  },
  {
    icon: "/icons/phone.svg",
    label: "Phone",
    value: "085-132-5654",
    link: "tel:0851325654",
  },
  {
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
    value: "Siravit Pichphol",
    link: "https://www.linkedin.com/in/siravit-pichphol-180429211/",
  },
  {
    icon: "/icons/github.svg",
    label: "GitHub",
    value: "siravit2020",
    link: "https://github.com/siravit2020?tab=repositories",
  },
];
</script>

<template>
  <AppContainer>
    <TopicComponent id="contact-title">CONTACT</TopicComponent>

    <div class="w-full max-w-2xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          v-for="(contact, index) in contactInfo"
          :key="contact.label"
          :href="contact.link"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          :data-aos-delay="100 + index * 100"
          class="flex items-center gap-4 p-4 rounded-xl bg-background-gray/50 border border-accent/20 hover:border-accent/60 hover:bg-background-gray transition-all duration-300 group"
        >
          <div
            class="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors"
          >
            <NuxtImg :src="contact.icon" :alt="contact.label" class="h-6 w-6" />
          </div>
          <div class="flex flex-col">
            <span class="text-accent text-sm font-medium">{{
              contact.label
            }}</span>
            <span
              class="text-text-primary sm:text-base text-sm group-hover:text-accent transition-colors"
              >{{ contact.value }}</span
            >
          </div>
        </a>
      </div>
    </div>
  </AppContainer>
</template>
