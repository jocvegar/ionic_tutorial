<template>
  <base-layout page-title="My Memories">
    <memories-list :memories="getMemories" />
  </base-layout>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store";
import MemoriesList from "../components/memories/MemoriesList.vue";

export default {
  name: "MemoriesPage",
  components: { MemoriesList },
  computed: {
    ...mapState(useStore, ["getMemories"]),
  },
};
</script>
