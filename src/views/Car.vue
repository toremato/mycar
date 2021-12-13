<template>
  <div>{{ $route.params.id }}</div>
  <div class="flex justify-center pt-10">
    <Select
      v-model="mark"
      :options="marks"
      placeholder="Выберите марку"
      class="w-80"
    >
      <template #default="{ selected }">
        <div v-if="selected" class="flex">
          <img
            :src="selected.logo"
            :alt="selected.name"
            class="object-contain h-5 w-10"
          />
          {{ selected.name_ru }}
        </div>
      </template>
      <template #test="{ option }">
        <div class="flex">
          <img
            :src="option.logo"
            :alt="option.name"
            class="object-contain h-5 w-10"
          />
          {{ option.name_ru }}
        </div>
      </template>
    </Select>
  </div>
</template>

<script setup lang="ts">
import Select from "@/components/base/Select.vue";
import { useStore } from "@/store";
import { computed, ref, watch } from "vue";

const mark = ref();
watch(mark, (newVal: any) => {
  console.log("New mark: ", newVal);
});

const store = useStore();

const marks = computed(() => store.state.marks);
</script>

<style></style>
