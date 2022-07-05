<template>
  <ion-list>
    <memories-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    />
  </ion-list>
</template>

<script setup>
import { IonList } from "@ionic/vue";
import MemoriesListItem from "./MemoriesListItem.vue";
import { defineProps } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  memories: Array,
});
</script>
