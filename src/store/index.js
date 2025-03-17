import { createStore } from "vuex";
import state from "./handlers/state.js";
import * as actions from "./handlers/actions.js";
import * as mutations from "./handlers/mutations.js";
import * as getters from "./handlers/getters.js";

const store = createStore({
    state,
    actions,
    mutations,
    getters
});

export default store;