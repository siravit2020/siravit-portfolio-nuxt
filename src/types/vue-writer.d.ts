declare module "vue-writer" {
  import type { DefineComponent } from "vue";

  export const VueWriter: DefineComponent<{
    array: string[];
    typeSpeed?: number;
    eraseSpeed?: number;
    delay?: number;
    intervals?: number;
    start?: number;
    caret?: string;
    iterations?: number;
  }>;
}
