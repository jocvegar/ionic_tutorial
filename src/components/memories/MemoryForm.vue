<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="memory.title" required />
      </ion-item>
      <!-- <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" v-model="memory.url" required />
      </ion-item> -->
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="previewImage" alt="" />
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera" />
          Take Photo
        </ion-button>
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
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
  IonThumbnail,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const emit = defineEmits(["save-memory"]);

const memory = ref({
  title: "",
  url: "",
  description: "",
});

const previewImage = ref("");

const submitForm = () => {
  memory.value.url = previewImage.value;
  emit("save-memory", memory.value);
};

const takePhoto = async () => {
  console.log("I was clicked");
  const photo = await Camera.getPhoto({
    quality: 60,
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
  });
  previewImage.value = photo.webPath;
};
</script>
