import { InjectionKey } from "vue";
import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex";

import { State, state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  // modules: {},
});

export function useStore(): Store<State> {
  // export function useStore() {
  return baseUseStore(key);
}
