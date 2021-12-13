import type { IEquipFilterParams } from '@/hooks/types';
import { ref, onMounted } from 'vue';
import useHeroEquipStore from '@/store/modules/useHeroEquipStore';
import type { IHeroEquip } from '@/store/modules/types';
import { getSuitIdsByType } from '@/assets/data/yuhunInfo';
import { union } from 'lodash';

export const useHeroEquip = (size: number = 10) => {
  const heroEquipStore = useHeroEquipStore();

  const equipList = ref<IHeroEquip[]>([]);
  const total = ref(0);
  const params = ref<IEquipFilterParams>({
    size: size,
    page: 1,
    pos: undefined,
    suitId: undefined,
    quality: undefined,
    level: undefined,
    mainAttr: undefined,
    suitType: undefined,
    randomAttrs: [],
  });

  const getEquipList = (filterParams: Partial<IEquipFilterParams> = {}) => {
    if (!heroEquipStore.hasHeroEquipData()) {
      return;
    }
    params.value = { ...params.value, ...filterParams };
    let heroEquips = [...heroEquipStore.heroEquips];

    if (params.value.pos || params.value.pos === 0) {
      heroEquips = heroEquips.filter((item) => item.pos === params.value.pos);
    }
    if (params.value.quality) {
      heroEquips = heroEquips.filter((item) => item.quality === params.value.quality);
    }
    if (params.value.level) {
      heroEquips = heroEquips.filter((item) => item.level === params.value.level);
    }
    if (params.value.suitId) {
      heroEquips = heroEquips.filter((item) => item.suit_id === params.value.suitId);
    }
    if (params.value.mainAttr) {
      heroEquips = heroEquips.filter((item) => item.base_attr.type === params.value.mainAttr);
    }
    if (params.value.suitType) {
      let suitIds = getSuitIdsByType(params.value.suitType);
      heroEquips = heroEquips.filter((item) => suitIds.includes(item.suit_id));
    }
    if (params.value.randomAttrs.length) {
      heroEquips = heroEquips.filter((item) => {
        // 判断 params.value.randomAttrs 是否为 rAttrs 的子集
        const rAttrs = item.random_attrs.map((i) => i.type);
        return union(rAttrs, params.value.randomAttrs).length === rAttrs.length;
      });
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
