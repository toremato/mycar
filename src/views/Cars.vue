<template>
  <section class="flex flex-col justify-center items-center pt-10">
    <router-link to="/cars/new" class="btn-primary mb-4">
      <span class="mr-2 text-lg leading-none">+</span>
      Новое авто
    </router-link>
    <div class="border border-gitGray-600 bg-gitGray-700 rounded-md pt-2 pb-4">
      <table class="bg-gitGray-900 text-gitGray-100 border-collapse">
        <thead>
          <tr class="rounded-md bg-gitGray-700">
            <th v-for="header in headers" :key="header" class="p-2">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="car in carsList"
            :key="car.id"
            class="hover:bg-gitGray-800 rounded-md border-b border-gray-300"
          >
            <td
              v-for="property in Object.keys(headers)"
              :key="property"
              class="p-2"
            >
              {{
                property.includes("date")
                  ? formatDate(car[property])
                  : car[property]
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-10 flex">
      <Select v-model="test1" :options="testOptions" class="mr-4 w-60"></Select>
      <Select
        v-model="test2"
        :options="testOptions"
        placeholder="test"
        class="w-60"
      ></Select>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import moment from "moment";
import Select from "@/components/base/Select.vue";
import Button from "@/components/base/Button.vue";

interface Car {
  id: number;
  brand: string;
  model: string;
  licensePlate: string;
  status: "reserved" | "inRent" | "inParking";
  client: string | null;
  dateRentBegin: Date | null;
  dateRentEnd: Date | null;
}
const carsList: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    licensePlate: "111 AA 02",
    status: "inRent",
    client: "Tore Maratov",
    dateRentBegin: new Date("2021-12-05"),
    dateRentEnd: new Date("2021-12-15"),
  },
  {
    id: 2,
    brand: "Toyota",
    model: "Camry",
    licensePlate: "222 BB 02",
    status: "inRent",
    client: "Tore Maratov",
    dateRentBegin: new Date("2021-12-05"),
    dateRentEnd: new Date("2021-12-15"),
  },
  {
    id: 3,
    brand: "Hyundai",
    model: "Accent",
    licensePlate: "333 CC 02",
    status: "inRent",
    client: "Tore Maratov",
    dateRentBegin: new Date("2021-12-05"),
    dateRentEnd: new Date("2021-12-15"),
  },
  {
    id: 4,
    brand: "Mitsubishi",
    model: "Lancer",
    licensePlate: "444 DD 02",
    status: "inRent",
    client: "Tore Maratov",
    dateRentBegin: new Date("2021-12-05"),
    dateRentEnd: new Date("2021-12-15"),
  },
];

const headers = {
  brand: "Марка",
  model: "Модель",
  licensePlate: "Госномер",
  status: "Статус",
  client: "Клиент",
  dateRentBegin: "Дата выдачи",
  dateRentEnd: "Дата возврата",
};

const testOptions = ["one", "two", "three", "four", "five", "tryujkldsfghjk"];
const test1 = ref("");
const test2 = ref("");
watch(test2, (newVal: any) => {
  console.log("Select changed: ...", newVal);
});

watch([test1, test2], (newVals: any) => {
  console.log("Select changed: ", newVals);
});

const formatDate = (date: Date): string => {
  return moment(date).format("DD/MM/YYYY");
};
</script>
