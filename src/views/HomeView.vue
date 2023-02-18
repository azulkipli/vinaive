<template>
  <n-config-provider :theme="theme">
    <n-layout>
      <n-layout-header>
        <n-card>
          <n-space>
            <n-button @click="changeTheme">
              <n-icon size="20">
                <moon v-if="theme?.name === 'light'" />
                <sunny v-if="theme?.name === 'dark'" />
              </n-icon>
            </n-button>
          </n-space>
        </n-card>
      </n-layout-header>
      <n-layout-content>
        <n-card>
          <n-space>
            <n-button @click="increase">+</n-button>
            <n-button>
              {{ count }}
            </n-button>
            <n-button @click="decrease">-</n-button>
          </n-space>
        </n-card>
      </n-layout-content>
      <n-layout-footer>
        <n-card align-text="center"> vue naiveui </n-card>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from "vue"
import { darkTheme, lightTheme } from "naive-ui"
import { Sunny, Moon } from "@vicons/ionicons5"

export default defineComponent({
  components: {
    Sunny,
    Moon,
  },
  methods: {
    increase() {
      this.count++
    },
    decrease() {
      this.count++
    },
    changeTheme() {
      console.log("before str : ", this.str)
      console.log("before theme : ", this.theme?.name)
      if (this.theme?.name === "light") {
        this.theme = this.darkTheme
      } else {
        this.theme = this.lightTheme
      }
    },
  },
  setup() {
    const count = ref(0)
    return {
      darkTheme,
      lightTheme,
      theme: ref(lightTheme),
      str: ref("light"),
      count,
    }
  },
})
</script>
