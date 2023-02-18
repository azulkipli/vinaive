<script>
import { defineComponent, ref } from "vue"
import { darkTheme } from "naive-ui"
import { /* RouterLink, */ RouterView } from "vue-router"

export default defineComponent({
  setup() {
    return {
      darkTheme,
      theme: ref(null),
    }
  },
  components: {
    RouterView,
  },
})
</script>

<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <RouterView />
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
