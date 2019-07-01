<template>
  <div id="app">
    <div id="main-wrapper">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
      <ListPage></ListPage>
    </div>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";

export default {
  name: "App",
  components: {
    Topbar,
    Sidebar,
    ListPage
  }
};
</script>
<style>
</style>