import { State } from "./state";
import { Mark } from "@/types";

export type Mutations = {
  SET_MARKS(state: State, marks: Array<Mark>): void;
};

export const mutations: Mutations = {
  SET_MARKS(state, marks) {
    console.log("Mutation commited???");
    state.marks = marks;
  },
};
