<template>
  <div class="page-wrapper hamburger default-theme sidebar-bg bg1">
    <nav class="sidebar-wrapper">
      <div class="sidebar-content">
        <div class="sidebar-item sidebar-brand">
          <a href="#" @click="CloseSidebar">
            <img id="burger-icon" src="../assets/img/icon.png" alt="logo">
          </a>
          <a href="#" @click="CloseSidebar">Best Deals</a>
          <div id="show-burger" @click="CloseSidebar">
            <i class="fas fa-times fa-2x"></i>
          </div>
        </div>
        <div class="sidebar-item sidebar-menu">
          <ul>
            <li>
              <router-link to="/Adidas">
                <span class="menu-text">Adidas</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Nike">
                <span class="menu-text">Nike</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Air Max">
                <span class="menu-text">Air Max</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Converse">
                <span class="menu-text">Converse</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Vans">
                <span class="menu-text">Vans</span>
              </router-link>
            </li>
            <li>
              <router-link to="/Reebok">
                <span class="menu-text">Reebok</span>
              </router-link>
            </li>

            <hr>

            <ul>
              <li>
                <a data-toggle="modal" href="#signin">Sign In</a>
              </li>
              <li>
                <a data-toggle="modal" href="#signup">Sign Up</a>
              </li>
            </ul>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name: "HamburgerContent",
  components: {
    SearchBar
  },
  methods: {
    CloseSidebar() {
      $(".page-wrapper").removeClass("toggled");
    }
  }
};
</script>

<style scoped>
#burger-icon {
  opacity: 0.8;
  height: 50px;
}

#burger-icon:hover {
  opacity: 1;
}

hr {
  border-color: white;
  border-style: solid;
}
</style>
