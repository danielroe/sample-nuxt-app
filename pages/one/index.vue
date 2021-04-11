<template>
  <div>
    <h1>Page One</h1>
    <p>This page <strong>doesn't</strong> have any components from the library</p>
    <p>Current Count : {{counter}}</p>
    <button type="button" @click="increment">Increment</button>
  </div>

</template>

<script >
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value = counter.value + 1;
    };

    return {counter, increment};
  }
});
</script>
