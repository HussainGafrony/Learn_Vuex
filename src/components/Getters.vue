<template>
  <div class="hello">
    <h1>hussein</h1>
    <h2>Name : {{ name + " " + lastname }}</h2>
    <h2>LastName: {{ lastname }}</h2>
    <h2>Jop : {{ jop }}</h2>
    <v-divider thickness="3" color="black" class="mt-3 pt-4"></v-divider>
    <h1>Getters</h1>
    <h2>Name : {{ gettername }}</h2>
    <h2>getIdTaksDone : {{ getIdTaksDone }}</h2>
    <h2>Tasks Time : {{ tasksTime }}</h2>
    <h2>Get LengthTasks : {{ getLengthTasks }}</h2>
    <h2>getTasksByID : {{ getTasksByID(2) }}</h2>
    <v-divider thickness="3" color="black" class="mt-3 pt-4"></v-divider>
    <h1 class="pt-4 pb-4">Map_Getters</h1>
    <h2>Name : {{ getName }}</h2>
    <h2>Name : {{ Name }}</h2>
    <h2>GetTimeTask {{ getTimeTask }}</h2>
    <h2>Tasks Time : {{ getLengthTasks }}</h2>
    <h2>Get LengthTasks : {{ getLengthTasks }}</h2>
    <h2>getTasksByID : {{ getTasksByID(2) }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Getters_",

  computed: {
    ...mapState(["name", "lastname", "jop"]),
    // use another title for propery
    ...mapGetters({
      Name: "getName",
    }),
    ...mapGetters(["getName", "getTimeTask", "getLengthTasks"]),
    gettername() {
      return this.$store.getters.getName;
    },
    tasksTime() {
      return this.$store.getters.getTimeTask;
    },
    getLengthTasks() {
      return this.$store.getters.getLengthTasks;
    },
    getIdTaksDone() {
      return this.$store.getters.getIdTaksDone;
    },
    /// methodes
    getTasksByID() {
      return this.$store.getters.getTasksByID;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
