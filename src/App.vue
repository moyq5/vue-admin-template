<template>
  <div id="app">
    <div id="main-wrapper">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <transition><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import routes from "./components/WrapperRoutes.js";


export default {
  name: "App",
  components: {
    Topbar,
    Sidebar
  },
  routes: routes
};
</script>
<style>
</style>