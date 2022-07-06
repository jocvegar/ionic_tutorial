<template>
  <base-layout
    :page-title="memory ? memory.title : 'Loading...'"
    page-default-fallback="/memories"
  >
    <h2 v-if="!memory">Could not find memory :(</h2>

    <memory-detail
      v-else
      :title="memory.title"
      :image="memory.image"
      :description="memory.description"
    />
  </base-layout>
</template>

<script setup>
import { useStore } from "../store";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import MemoryDetail from "../components/memories/MemoryDetail.vue";
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
