import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/runner/work/weebyapi-guide/weebyapi-guide/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/runner/work/weebyapi-guide/weebyapi-guide/guide/.vuepress/theme/layouts/Layout.vue")),
}
