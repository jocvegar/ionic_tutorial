import { defineStore } from "pinia";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("main", {
  state: () => {
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
  getters: {
    getMemories(state) {
      return state.memories;
    },
    getMemory: (state) => {
      return (memoryId) =>
        state.memories.find((memory) => memory.id === memoryId);
    },
  },
});
