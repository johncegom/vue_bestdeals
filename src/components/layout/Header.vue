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

    <div class="shoppingcart">
      <router-link to="/">
        <i class="fas fa-shopping-cart fa-2x"></i>
      </router-link>
    </div>

    <div class="header-btn">
      <a class="myButton" data-toggle="modal" href="#signin">Sign In</a>
      <a class="myButton" data-toggle="modal" href="#signup">Sign Up</a>
    </div>

    <HamburgerContent :showcases="showcases"/>
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
  props: {
    showcases: { type: Array }
  },
  methods: {
    ShowSidebar() {
      $(".page-wrapper").addClass("toggled");
    }
  }

};
</script>

<style scoped>
.shoppingcart {
  margin-right: 5px;
}

.shoppingcart i {
  height: 25px;
  transition: all ease 300ms;
}


.shoppingcart i:hover {
  transform: rotate(25deg);
}

.shoppingcart i {
  margin-top: 25px;
  color: var(--gold);
}

@media (min-width: 980px) {
.shoppingcart {
  margin-left: auto;
}
}
</style>




