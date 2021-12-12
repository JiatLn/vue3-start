import type { IEquipFilterParams } from '@/hooks/types';
import { ref, onMounted } from 'vue';
import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
import type { IHeroEquip } from '@/store/modules/types';

export const useHeroEquip = (size: number = 10) => {
  const heroEquipStore = useHeroEquipStore();

  const equipList = ref<IHeroEquip[]>([]);
  const total = ref(0);
  let params = ref<IEquipFilterParams>({
    pos: -1,
    suitId: -1,
    size: size,
    page: 1,
    quality: -1,
    level: -1,
    mainAttr: undefined,
  });

  const getEquipList = (filterParams: Partial<IEquipFilterParams> = {}) => {
    if (!heroEquipStore.hasHeroEquipData()) {
      return;
    }
    params.value = { ...params.value, ...filterParams };
    let heroEquips = [...heroEquipStore.heroEquips];

    if (params.value.pos !== -1) {
      heroEquips = heroEquips.filter((item) => item.pos === params.value.pos);
    }
    if (params.value.quality !== -1) {
      heroEquips = heroEquips.filter((item) => item.quality === params.value.quality);
    }
    if (params.value.level !== -1) {
      heroEquips = heroEquips.filter((item) => item.level === params.value.level);
    }
    if (params.value.suitId !== -1) {
      heroEquips = heroEquips.filter((item) => item.suit_id === params.value.suitId);
    }
    if (params.value.mainAttr) {
      heroEquips = heroEquips.filter((item) => item.base_attr.type === params.value.mainAttr);
    }

    total.value = heroEquips.length;
    equipList.value = heroEquips.slice(
      params.value.page - 1,
      params.value.page - 1 + params.value.size
    );
  };

  onMounted(() => {
    getEquipList();
  });

  return {
    params,
    total,
    equipList,
    getEquipList,
  };
};
