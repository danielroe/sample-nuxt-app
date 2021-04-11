<template>
  <div>
    <h1>Home</h1>
    <h2>Pages</h2>
    <ul>
      <li><NuxtLink to="/one">Page One - Without Library Component</NuxtLink></li>
      <li><NuxtLink to="/two">Page Two - With Library Component</NuxtLink></li>
    </ul>
  </div>
</template>

<script >
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>
