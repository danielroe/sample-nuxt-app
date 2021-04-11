<template>
  <div>
    <h1>Page Two</h1>
    <p>This page <strong>does</strong> have any components from the library</p>
    <p>Current Count : {{counter}}</p>
    <Dropdown
      :title="'Select how much to increment by'"
    >
      <template>
        <li
          @click="updateValue(1)"
          :class="{ selected: incrementValue === 1 }"
        >
          One
        </li>
        <li
          @click="updateValue(2)"
          :class="{ selected: incrementValue === 2 }"
        >
          Two
        </li>
        <li
          @click="updateValue(3)"
          :class="{ selected: incrementValue === 3 }"
        >
          Three
        </li>
      </template>
    </Dropdown>
    <button type="button" @click="increment">Increment</button>
  </div>

</template>

<script >

import { defineComponent, ref } from "@nuxtjs/composition-api";
import { Dropdown } from "sample-vue-library";

export default defineComponent({
  components: {
    Dropdown
  },
  setup() {
    const counter = ref(0);
    const incrementValue = ref(1);

    const increment = () => {
      counter.value = counter.value + incrementValue.value;
    };

    const updateValue = (value) => {
      incrementValue.value = value;
    };

    return {counter, incrementValue, increment, updateValue};
  }
});
</script>
