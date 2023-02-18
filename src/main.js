import { createApp } from "vue"
import { createPinia } from "pinia"
// import {
//   // create naive ui
//   create,
//   // component
//   NButton,
// } from "naive-ui"

import naive from "naive-ui"

// const naive = create({
//   components: [NButton],
// })

import App from "./App.vue"
import router from "./router"

// import "./assets/main.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount("#app")
