import { Mark } from "@/types";

export interface State {
  count: number;
  marks: Mark[];
}
export const state: State = {
  count: 0,
  marks: [],
};
