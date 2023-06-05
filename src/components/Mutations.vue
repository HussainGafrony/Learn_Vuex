<template>
  <div>
    <h1>Mutations</h1>
    <h2 class="pt-4">
      {{ $store.state.count }}
    </h2>
    <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="increment()"> + </v-btn>
    <v-btn color="orange" class="text-h5 mt-5" @click="decrement()"> _ </v-btn>
    <v-col class="pa-0">
      <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="n_increment()"> N + </v-btn>

      <v-btn color="orange" class="text-h5 mt-5" @click="n_decrement()"> N _ </v-btn>
    </v-col>

    <h2 class="mt-3">An other way</h2>
    <v-col class="pa-0">
      <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="n_incrementway_2()"> NW2 + </v-btn>

      <v-btn color="orange" class="text-h5 mt-5" @click="n_decrementway_2()"> NW2 _ </v-btn>
    </v-col>

    <h1 class="mt-5">MapMutations</h1>
    <h2 class="pt-4">
      {{ $store.state.count }}
    </h2>
    <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="increment()"> + </v-btn>
    <v-btn color="orange" class="text-h5 mt-5" @click="decrement()"> _ </v-btn>
    <v-col class="pa-0">
      <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="n_increment(2)"> N + </v-btn>

      <v-btn color="orange" class="text-h5 mt-5" @click="n_decrement(2)"> N _ </v-btn>
    </v-col>

    <h2 class="mt-3">An other way</h2>
    <v-col class="pa-0">
      <v-btn class="text-h5 mt-5 mr-8" color="orange" @click="n_incrementway_2({ plus: 4 })"> NW2 + </v-btn>

      <v-btn color="orange" class="text-h5 mt-5" @click="n_decrementway_2({ minus: 4 })"> NW2 _ </v-btn>
    </v-col>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "Mutations_",
  data() {
    return {
      // Count: 4,
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    n_increment() {
      this.$store.commit("n_increment", 2);
    },
    n_decrement() {
      this.$store.commit("n_decrement", 2);
    },
    // An other way
    n_incrementway_2() {
      this.$store.commit("n_incrementway_2", { plus: 3 });
    },
    n_decrementway_2() {
      this.$store.commit({ type: "n_decrementway_2", minus: 3 });
    },

    // MapMutations
    ...mapMutations(["increment", "decrement", "n_increment", "n_decrement", "n_incrementway_2", "n_decrementway_2"]),
  },
};
</script>
