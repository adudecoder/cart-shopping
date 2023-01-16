import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/victo/OneDrive/Desktop/cart-shopping/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}