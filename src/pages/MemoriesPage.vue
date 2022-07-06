<template>
  <base-layout page-title="My Memories">
    <template v-slot:actions-end>
      <ion-button color="primary" size="small" router-link="/memories/new">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="getMemories" />
  </base-layout>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store";
import MemoriesList from "../components/memories/MemoriesList.vue";
import { IonIcon, IonButton } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  name: "MemoriesPage",
  components: {
    IonButton,
    IonIcon,
    MemoriesList,
  },
  data() {
    return {
      add,
    };
  },
  computed: {
    ...mapState(useStore, ["getMemories"]),
  },
};
</script>
