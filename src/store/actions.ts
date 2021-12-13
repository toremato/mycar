import api from "@/api";
import { State } from "./state";
import { ActionContext, ActionTree } from "vuex";
import { Mutations } from "./mutations";

import { Mark, Model } from "@/types";
// import { MutationTree } from "vuex";

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  // getMarks(context: ActionAugments): Promise<Mark[]> | [];
  getMarks(context: ActionAugments): void;
  getModels(context: ActionAugments, markId: number): Promise<Model[]>;
};

export const actions: (ActionTree<State, State> & Actions) | Actions = {
  async getMarks({ commit }): Promise<void> {
    const marks = await api.getMarks();
    commit("SET_MARKS", marks);
  },

  // eslint-disable-next-line no-empty-pattern
  async getModels({}, markId: number): Promise<Model[]> {
    return await api.getModels(markId);
  },
};
