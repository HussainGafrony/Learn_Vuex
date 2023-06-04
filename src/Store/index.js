import Vuex from "vuex";

// Create a new store instance.

const state = {
  name: "ahmad",
  lastname: "nory",
  jop: "software developer",

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

const store = new Vuex.Store({
  state,
  getters,
  mutations: {},
  actions: {},
  modules: {},
});

export default store;
