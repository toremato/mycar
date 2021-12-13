export type Mark = {
  id: number;
  name: string;
  name_ru: string;
  logo: string;
  sfu?: string;
  new_auto_models_count?: null | number;
};

export type Model = {
  id: number;
  name: string;
  name_ru: string;
  car_mark_id: number;
  logo?: null | string;
  sfu?: string;
};
