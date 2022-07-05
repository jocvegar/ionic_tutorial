<template>
  <ion-item :router-link="`/memories/${memory.id}`" :detail="true">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title" />
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script setup>
import { IonImg, IonItem, IonLabel, IonThumbnail } from "@ionic/vue";
import { defineProps } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  memory: Object,
});
</script>
