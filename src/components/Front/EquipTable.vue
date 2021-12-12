<template>
  <el-table :data="equipList" style="width: 100%" border>
    <el-table-column prop="id" label="ID" align="center">
      <template #default="{ row }">
        <el-popover placement="right-start" title="" trigger="hover" :width="260">
          <template #reference>
            <el-link type="primary">{{ row.id.slice(0, 8) }}</el-link>
          </template>
          <EquipItem :equip="row" :showDigit="showDigit" v-if="row"></EquipItem>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="suit_id" label="御魂类型" align="center">
      <template #default="{ row }">{{ formatYhName(row.suit_id) }}</template>
    </el-table-column>
    <el-table-column prop="base_attr.type" label="主属性 | 固定属性" align="center" min-width="120">
      <template #default="{ row }">
        {{ attrMap[row.base_attr.type] }}
        <template v-if="row.single_attrs.length">
          <span>|</span>
          {{ attrMap[row.single_attrs[0].type] }}
        </template>
      </template>
    </el-table-column>

    <el-table-column prop="pos" label="位置" align="center">
      <template #default="{ row }">{{ row.pos + 1 }}号位</template>
    </el-table-column>
    <el-table-column label="速度" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.SPEED"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="暴击" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.CRIT_RATE"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="暴击伤害" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.CRIT_POWER"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="攻击加成" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.ATTACT_RATE"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="防御加成" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.DEF_RATE"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="生命加成" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.HP_RATE"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="效果命中" align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.EFFECT_HIT"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column label="效果抵抗 " align="center">
      <template #default="{ row }">
        <AttrItem
          :random-attrs="row.random_attrs"
          :show-digit="showDigit"
          :show-tag="showTag"
          :type="EAttrType.EFFECT_RESIST"
        ></AttrItem>
      </template>
    </el-table-column>
    <el-table-column prop="level" label="等级" align="center"></el-table-column>
    <el-table-column prop="quality" label="星级" align="center"></el-table-column>
    <el-table-column prop="born" label="获取时间" align="center">
      <template #default="{ row }">{{ formatTimeStamp(row.born) }}</template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { formatYhName } from '@/assets/data/yuhunInfo';
  import { formatTimeStamp } from '@/utils/date';
  import AttrItem from '@/components/Front/AttrItem.vue';
  import { EAttrType } from '@/utils/types';
  import { IHeroEquip } from '@/store/modules/types';
  import { attrMap } from '@/assets/data/translateMap';
  import EquipItem from '@/components/Front/EquipItem.vue';

  // const EAttrType ;

  const props = defineProps<{
    equipList: IHeroEquip[];
    showDigit: Boolean;
    showTag: Boolean;
  }>();
</script>

<style scoped></style>
