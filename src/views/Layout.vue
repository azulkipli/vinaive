<template>
  <n-layout-footer
    color="transparent"
    position="absolute"
    style="bottom: 20px; padding: 24px; text-align: right"
  >
    <n-button text @click="show = true">
      <n-icon size="30"> <cart /> </n-icon>
    </n-button>
  </n-layout-footer>

  <n-drawer v-model:show="show" :width="522">
    <n-drawer-content title="Your cart" closable>
      Stoner is a 1965 novel by the American writer John Williams.
    </n-drawer-content>
  </n-drawer>
</template>
<style scoped>
.n-layout-footer {
  background: transparent;
}
</style>
<script>
import { defineComponent, ref } from "vue"
import { Cart } from "@vicons/ionicons5"

export default defineComponent({
  components: {
    Cart,
  },
  setup() {
    return {
      show: ref(false),
    }
  },
})
</script>
