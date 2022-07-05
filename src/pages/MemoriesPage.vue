<template>
  <base-layout page-title="My Memories asdf">
    <ion-list>
      <ion-item
        v-for="memory in getMemories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
        :detail="true"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from "../store";

import { IonImg, IonItem, IonLabel, IonList, IonThumbnail } from "@ionic/vue";

export default {
  name: "MemoriesPage",
  components: {
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
  },
  computed: {
    ...mapState(useStore, ["getMemories"]),
  },
};
</script>
