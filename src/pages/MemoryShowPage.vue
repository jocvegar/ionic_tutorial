<template>
  <base-layout page-title="Details" pageDefaultFallback="/memories">
    <h3>The details page!</h3>
    memory: {{ memory }}
  </base-layout>
</template>

<script setup>
import { useStore } from "../store";
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const memoryId = ref(null);

watch(
  route,
  (currentRoute) => {
    memoryId.value = currentRoute.params.id;
  },
  { deep: true, immediate: true }
);

const memory = computed(() => store.getMemory(parseInt(memoryId.value)));
</script>

<script>
export default {
  name: "MemoryShowPage",
};
</script>
