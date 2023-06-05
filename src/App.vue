<template>
  <v-app>
    <main class="pt-9">
      <router-link class="custom-link" to="/getters">Getters</router-link> | <router-link class="custom-link" to="/mutations">Mutations</router-link> |
      <router-link class="custom-link" to="/getters">GettersPage</router-link>
      <router-view class="pt-9 pl-9"></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.custom-link {
  color: blue;
  font-weight: bold;
  padding-left: 44px;
  padding-top: 5px;
}
</style>