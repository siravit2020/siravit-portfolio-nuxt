<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Import Google Font
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Satisfy&display=swap",
    },
  ],
});

const scrolled = ref(false);
const activeTab = ref<string | null>(null);
const showMobileMenu = ref(false);

const isScrolling = ref(false); // Flag to prevent tab jumping during programmatic scroll
let scrollEndTimer: NodeJS.Timeout | null = null;

const menuItems = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "skill", title: "Skill" },
  { id: "project", title: "Projects" },
];

const updateActiveTab = () => {
  // Don't update if we're programmatically scrolling
  if (isScrolling.value) return;

  const scrollPosition = window.scrollY + 150; // offset for better detection

  // Find which section is currently in view
  for (let i = menuItems.length - 1; i >= 0; i--) {
    const element = document.getElementById(menuItems[i].id);
    if (element) {
      const offsetTop = element.offsetTop;
      if (scrollPosition >= offsetTop) {
        activeTab.value = menuItems[i].id;
        return;
      }
    }
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 200;
  updateActiveTab();

  // Detect when scroll ends
  if (isScrolling.value) {
    if (scrollEndTimer) clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(() => {
      isScrolling.value = false;
    }, 150); // Reset flag shortly after scroll stops
  }
};

const scrollToSection = (id: string) => {
  activeTab.value = id;
  isScrolling.value = true; // Set flag to prevent updateActiveTab from interfering

  const element = document.getElementById(id);
  if (element) {
    const offset = 100;
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
  showMobileMenu.value = false;

  // Initial timeout as backup
  if (scrollEndTimer) clearTimeout(scrollEndTimer);
  scrollEndTimer = setTimeout(() => {
    isScrolling.value = false;
  }, 150);
};

onMounted(() => {
  // Initialize scroll state and active tab
  scrolled.value = window.scrollY > 200;
  updateActiveTab(); // Always update active tab on mount

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 w-full h-16 flex items-center z-1000 transition-all duration-500"
    :class="scrolled ? 'bg-white shadow-lg backdrop-blur-sm' : 'bg-transparent'"
  >
    <v-container style="max-width: 1024px">
      <div class="flex justify-between items-center w-full">
        <!-- Logo -->
        <div class="flex-1">
          <a
            class="logo-text text-3xl cursor-pointer no-underline transition-all duration-500 hover:scale-110 transform text-accent drop-shadow-[0_2px_8px_rgba(212,156,107,0.3)]"
            @click="scrollToSection('about')"
          >
            Siravit
          </a>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex gap-8 items-center">
          <div
            v-for="item in menuItems"
            :key="item.id"
            class="relative flex flex-col items-center group"
          >
            <a
              class="text-base font-semibold cursor-pointer no-underline py-2 transition-all duration-300 hover:scale-105 transform text-text-primary hover:text-accent"
              @click="scrollToSection(item.id)"
            >
              {{ item.title }}
            </a>
            <div
              v-if="activeTab === item.id"
              class="underline-active h-0.75 w-full mt-0.5 rounded-full bg-accent! shadow-[0_0_8px_rgba(212,156,107,0.4)]"
            />
            <div
              v-else
              class="underline-hover h-0.75 w-0 mt-0.5 rounded-full bg-accent! group-hover:w-full"
            />
          </div>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors duration-300 relative z-1100 bg-transparent text-text-primary hover:bg-accent/10!"
          @click="showMobileMenu = !showMobileMenu"
        >
          <svg
            class="w-6 h-6 transition-transform duration-300"
            :class="showMobileMenu ? 'rotate-90' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!showMobileMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </v-container>
  </div>

  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-[-10px]"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-[-10px]"
  >
    <div
      v-if="showMobileMenu"
      class="md:hidden fixed top-16 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-1050"
    >
      <div class="max-w-5xl mx-auto px-4 py-4">
        <nav class="flex flex-col gap-2">
          <a
            v-for="item in menuItems"
            :key="item.id"
            class="px-4 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 text-text-primary hover:bg-accent/10! hover:text-accent hover:translate-x-2"
            :class="
              activeTab === item.id
                ? 'bg-accent! text-white shadow-md'
                : 'bg-transparent'
            "
            @click="scrollToSection(item.id)"
          >
            {{ item.title }}
          </a>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.logo-text {
  font-family: "Satisfy", cursive;
  letter-spacing: 1px;
}

.underline-active {
  animation: slideInScale 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.underline-hover {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes slideInScale {
  0% {
    width: 0;
    opacity: 0;
    transform: scaleX(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 100%;
    opacity: 1;
    transform: scaleX(1);
  }
}
</style>
