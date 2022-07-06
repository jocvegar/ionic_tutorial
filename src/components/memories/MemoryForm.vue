<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="memory.title" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" v-model="memory.url" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea v-model="memory.description" rows="5"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" class="ion-margin-top" expand="block">
      Save
    </ion-button>
  </form>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
} from "@ionic/vue";

const emit = defineEmits(["save-memory"]);

const memory = ref({
  title: "",
  url: "",
  description: "",
});

const submitForm = () => {
  emit("save-memory", memory.value);
};
</script>
