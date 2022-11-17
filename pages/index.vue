<script setup>
import { useCounterStore } from "~/store/foo";
const counterStore = useCounterStore();
const test = ref("Hello Markus");
const appConfig = useAppConfig();
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <h3>{{ test }}</h3>
    <h5>{{ counterStore.count }}</h5>
    <h5>{{ counterStore.doubleCount }}</h5>
    <button @click="counterStore.increment">Click me</button>
    <div>
      <NuxtLink to="/Test">Test</NuxtLink>
    </div>
    <div>appConfig: {{ appConfig }}</div>
    <a>Test</a>
  </div>
</template>
