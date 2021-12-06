import { defineStore } from 'pinia';

export interface UserInfo {
  id: string;
  token: string;
  username: string;
}

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    id: '',
    username: '',
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setId(id: string) {
      this.id = id;
    },
    login(user: Partial<UserInfo>) {
      this.$patch({
        ...user,
      });
    },
  },
});

const instance = useUserStore();
instance.$subscribe((mutation, state) => {
  localStorage.setItem(instance.$id, JSON.stringify(state));
});

const val = localStorage.getItem(instance.$id);
if (val) {
  instance.login(JSON.parse(val));
}

export default useUserStore;
