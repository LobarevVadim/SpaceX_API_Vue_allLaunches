import { createStore } from "vuex";
import launches from "./modules/launches";

export default createStore({
  modules: {
     launches
  },
});
