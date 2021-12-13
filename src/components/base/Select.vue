<template>
  <div
    class="transition relative min-w-max text-left text-gitGray-100 cursor-pointer select-none"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="flex items-center justify-between transition border rounded-md h-full w-full px-4 py-2 hover:bg-gitGray-600 hover:border-gitGray-300"
      :class="
        open
          ? 'rounded-b-none bg-gitGray-600 border-gitGray-300'
          : 'bg-gitGray-700 border-gitGray-500'
      "
      @click="open = !open"
    >
      <div>
        <slot :selected="selected">
          {{ selected ? selected : placeholder }}
        </slot>
      </div>

      <svg
        class="fill-current transform transition duration-300 ml-4 justify-self-end"
        :class="{ 'rotate-180': open }"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
      >
        <path d="M14 20l10 10 10-10z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
    </div>

    <ul
      class="transition bg-gitGray-700 absolute w-full border border-gitGray-500 border-t-0 rounded-b-md overflow-y-scroll overflow-x-hidden max-h-96"
      :class="{ hidden: !open }"
    >
      <li
        v-for="(option, i) of options"
        :key="i"
        @click="onClick(option)"
        class="hover:bg-gitGray-600 px-4 py-2"
      >
        <slot name="test" :option="option">{{ option }}</slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  default: {
    required: false,
    default: null,
  },
  placeholder: {
    type: String,
    default: "Select...",
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selected = ref();
const open = ref(false);

const onClick = (option: string) => {
  selected.value = option;
  open.value = false;
  emit("update:modelValue", option);
};

onMounted(() => {
  emit("update:modelValue", selected.value);
});
</script>

<style lang="scss" scoped></style>
