<script setup>
import { useCounterStore } from "~/store/foo";
const counterStore = useCounterStore();
</script>
<template>
  <div>
    <p>{{ $route.params.slug }}</p>
    <h5>{{ counterStore.count }}</h5>
    <h5>{{ counterStore.doubleCount }}</h5>
    <div>
      <button @click="counterStore.increment">Click me</button>
    </div>
    <div>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>
</template>
