<template>
  <base-layout page-title="My Memories asdf">
    <ion-list>
      <ion-item
        v-for="memory in memories"
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
  data() {
    return {
      memories: [
        {
          id: 1,
          title: "Memory 1",
          description: "This is the first memory",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 2,
          title: "Memory 2",
          description: "This is the second memory",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          title: "Memory 3",
          description: "This is the third memory",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          title: "Memory 4",
          description: "This is the fourth memory",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        },
      ],
    };
  },
};
</script>
