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
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
          id: 4,
          title: "Memory 4",
          description: "This is the fourth memory",
          image:
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
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
