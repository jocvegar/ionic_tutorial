<template>
  <base-layout
    :page-title="memory ? memory.title : 'Loading...'"
    pageDefaultFallback="/memories"
  >
    <h2 v-if="!memory">Could not find memory :(</h2>
    <h2 v-else>I work!!</h2>
    memory: {{ memory }}
  </base-layout>
</template>

<script setup>
import { useStore } from "../store";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();
const memoryId = ref(route.params.id);

// watch(
//   route,
//   (currentRoute) => {
//     memoryId.value = currentRoute.params.id;
//   },
//   { deep: true, immediate: true }
// );

const memory = computed(() => store.getMemory(parseInt(memoryId.value)));
</script>

<script>
export default {
  name: "MemoryShowPage",
};
</script>
