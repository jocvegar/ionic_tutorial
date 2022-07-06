<template>
  <base-layout page-title="Add a memory" page-default-fallback="/memories">
    <memory-form @save-memory="handleSubmit" />
  </base-layout>
</template>

<script>
import MemoryForm from "../components/memories/MemoryForm.vue";
import { useStore } from "../store";
import { mapActions } from "pinia";

export default {
  name: "MemoryAddPage",
  components: {
    MemoryForm,
  },
  methods: {
    ...mapActions(useStore, ["addMemory"]),
    handleSubmit(memory) {
      this.addMemory(memory);
      this.$router.replace("/memories");
    },
  },
};
</script>
