import { createStore, createLogger } from "vuex";

export default createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== "production",
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
