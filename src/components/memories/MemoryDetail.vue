<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script setup>
import { defineProps } from "vue";
import { IonImg } from "@ionic/vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  image: String,
  title: String,
  description: String,
});
</script>
