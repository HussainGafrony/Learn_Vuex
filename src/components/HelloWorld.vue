<template>
  <div class="hello">
    <!-- <h1>hussein</h1>
    <h2>Name : {{ name + " " + lastname }}</h2>
    <h2>LastName: {{ lastname }}</h2>
    <h2>Jop : {{ jop }}</h2> -->

    <h1>Getters</h1>
    <h2>Name : {{ gettername }}</h2>
    <h2>{{ getIdTaksDone }}</h2>
    <!-- <h1>Tasks Time {{ tasksTime }}</h1> -->
    <!-- <h2>Get LengthTasks {{ getLengthTasks }}</h2> -->
    <!-- <h2>getTasksByID : {{ getTasksByID(1) }}</h2> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["name", "lastname", "jop"]),
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
    }, // getTasksByID() {
    //   return this.$store.getters.getTasksByID;
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
