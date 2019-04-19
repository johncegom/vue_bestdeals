<template>
  <header class="header">
    <button class="hamburger" @click="ShowSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/img/logo.png" alt="logo">
      </router-link>
    </div>

    <SearchBar/>

    <div class="dropdown">
      <button class="user" data-toggle="dropdown">
        <i class="fas fa-user fa-2x"></i>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" data-toggle="modal" href="#signin">
          <i class="fas fa-lock"></i>
        </a>
        <a class="dropdown-item" data-toggle="modal" href="#signup">
          <i class="fas fa-pencil-alt"></i>
        </a>
      </div>
    </div>

    <div class="header-btn">
      <a class="myButton" data-toggle="modal" href="#signin">Sign In</a>
      <a class="myButton" data-toggle="modal" href="#signup">Sign Up</a>
    </div>

    <HamburgerContent/>
  </header>
</template>

<script>
import SearchBar from "../SearchBar";
import HamburgerContent from "../HamburgerContent";
import $ from "jquery";
export default {
  name: "Header",
  components: {
    SearchBar,
    HamburgerContent
  },
  methods: {
    ShowSidebar() {
      $(".page-wrapper").addClass("toggled");
    }
  }
};
</script>

<style scoped>
</style>




