import Vuex from "vuex";

// Create a new store instance.

const state = {
  name: "ahmad",
  lastname: "nory",
  jop: "software developer",
  count: 0,

  tasks: [
    {
      id: 1,
      title: "check user name",
      time: "1 hourse",
      group: 2,
      maxTime: "2 hourse",
      done: true,
    },
    {
      id: 2,
      title: "check user style",
      time: "2 hourse",
      group: 2,
      maxTime: "2 hourse",
      done: true,
    },
    {
      id: 3,
      title: "check user brand",
      time: "2 hourse",
      group: 1,
      maxTime: "2 hourse",
      done: true,
    },
    {
      id: 4,
      title: "check user height",
      time: "2 hourse",
      group: 1,
      maxTime: "2 hourse",
      done: false,
    },
  ],
};
const getters = {
  getName: (state) => {
    return state.name;
  },
  getTimeTask: (state) => {
    return state.tasks.filter((task) => task.group > 1);
  },
  getLengthTasks: (state, getters) => {
    return getters.getTimeTask.length;
  },

  getIdTaksDone(state) {
    return state.tasks.filter((item) => item.done).length;
  },
  // methods
  getTasksByID: (state) => (id) => {
    return state.tasks.filter((value) => value.id === id);
  },
};
const mutations = {
  increment(state) {
    // type : increment
    state.count++; // handler
  },
  decrement(state) {
    state.count--;
  },
  n_increment(state, n) {
    state.count += n;
  },
  n_decrement(state, n) {
    state.count -= n;
  },

  // An other way
  n_incrementway_2(state, payload) {
    state.count += payload.plus;
  },

  n_decrementway_2(state, payload) {
    state.count -= payload.minus;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {},
  modules: {},
});

export default store;
