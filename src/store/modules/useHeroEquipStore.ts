import { defineStore } from 'pinia';

import type { IHeroEquip } from './types';

const useHeroEquipStore = defineStore({
  id: 'heroEquip',
  state: () => {
    return {
      heroEquips: [] as IHeroEquip[],
    };
  },
  actions: {
    loadHeroEquipData(data: IHeroEquip[]) {
      this.$patch({
        heroEquips: [...data],
      });
    },
    hasHeroEquipData(): Boolean {
      return this.heroEquips.length > 0;
    },
    clearEquipData() {
      this.heroEquips = [];
      localStorage.removeItem(this.$id);
    },
  },
});

const instance = useHeroEquipStore();
instance.$subscribe((_, state) => {
  localStorage.setItem(instance.$id, JSON.stringify(state));
});

const oldStore = localStorage.getItem(instance.$id);
if (oldStore) {
  instance.$state = JSON.parse(oldStore);
}

export default useHeroEquipStore;
