import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Introduction",["/index.html","/README.md"]],
  ["v-22a39d25","/about.html","About",["/about","/about.md"]],
  ["v-65628465","/branding.html","Branding",["/branding","/branding.md"]],
  ["v-60d79892","/other/privacypolicy.html","Privacy Policy",["/other/privacypolicy","/other/privacypolicy.md"]],
  ["v-6d1059fa","/other/socialmedia.html","Social Media",["/other/socialmedia","/other/socialmedia.md"]],
  ["v-5c0967f0","/other/stayingsafeonline.html","Staying Safe Online",["/other/stayingsafeonline","/other/stayingsafeonline.md"]],
  ["v-3f9ed18a","/other/termsofservice.html","Terms of Service",["/other/termsofservice","/other/termsofservice.md"]],
  ["v-19d8ba1d","/previews/custom.html","Custom",["/previews/custom","/previews/custom.md"]],
  ["v-65c355a2","/previews/effects.html","Effects",["/previews/effects","/previews/effects.md"]],
  ["v-2470f46e","/previews/generators.html","Generators",["/previews/generators","/previews/generators.md"]],
  ["v-2254ad6b","/previews/overlays.html","Overlays",["/previews/overlays","/previews/overlays.md"]],
  ["v-375c3ab4","/weeby-api/authentication.html","Authenticating with the API",["/weeby-api/authentication","/weeby-api/authentication.md"]],
  ["v-4ced9bde","/weeby-api/bot-commands.html","Bot commands",["/weeby-api/bot-commands","/weeby-api/bot-commands.md"]],
  ["v-e0d28fe0","/weeby-api/faq.html","Frequently asked questions",["/weeby-api/faq","/weeby-api/faq.md"]],
  ["v-7dc6b7f4","/weeby-api/first-request.html","Making your first request",["/weeby-api/first-request","/weeby-api/first-request.md"]],
  ["v-200fdc09","/weeby-api/guidelines.html","Guidelines",["/weeby-api/guidelines","/weeby-api/guidelines.md"]],
  ["v-4f711be9","/weeby-api/obtaining-a-token.html","Obtaining an API Token",["/weeby-api/obtaining-a-token","/weeby-api/obtaining-a-token.md"]],
  ["v-2380ef44","/weeby-api/privacy.html","Our Privacy Policy",["/weeby-api/privacy","/weeby-api/privacy.md"]],
  ["v-b1c38f48","/weeby-api/requirements.html","Requirements",["/weeby-api/requirements","/weeby-api/requirements.md"]],
  ["v-1538dd10","/weeby-api/webhooks.html","Webhooks",["/weeby-api/webhooks","/weeby-api/webhooks.md"]],
  ["v-b411e45a","/weeby-js/authentication.html","Authentication",["/weeby-js/authentication","/weeby-js/authentication.md"]],
  ["v-d509e7bc","/weeby-js/examples.html","Examples",["/weeby-js/examples","/weeby-js/examples.md"]],
  ["v-6715ffca","/weeby-js/setup.html","Setup",["/weeby-js/setup","/weeby-js/setup.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
