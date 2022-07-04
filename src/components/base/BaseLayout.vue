<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultFallback"
          ></ion-back-button>
        </ion-buttons>
        <ion-title size="large">{{ props.pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { defineProps } from "vue";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

const props = defineProps({
  pageTitle: {
    type: String,
    default: "HOLA",
  },
  pageDefaultFallback: {
    type: String,
  },
});
</script>
