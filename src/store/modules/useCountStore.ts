import { defineStore } from 'pinia';

const useCountStore = defineStore({
  id: 'count',
  state: () => ({
    count: 1,
  }),
  actions: {
    increment() {
      this.count += 1;
    },
  },
});

const instance = useCountStore();
instance.$subscribe((_, state) => {
  localStorage.setItem('count-store', JSON.stringify(state));
});

const oldStore = localStorage.getItem('count-store');
if (oldStore) {
  instance.$state = JSON.parse(oldStore);
}

export default useCountStore;
