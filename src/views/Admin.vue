<template>
  <div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" class="btn btn-sm btn-dark" href="#" @click="ShowSidebar">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Bestdeals</a>
            <div id="close-sidebar" @click="CloseSidebar">
              <i class="fas fa-times fa-2x"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png"
                alt="User picture"
              >
            </div>
            <div class="user-info">
              <span class="user-name">
                Minh
                <strong>Duong</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->
          <div class="sidebar-item sidebar-search">
            <div>
              <div class="input-group">
                <input type="text" class="form-control search-menu" placeholder="Search...">
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/overview">
                  <i class="fa fa-chart-line"></i>
                  <span class="menu-text">Overview</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span class="menu-text">Products</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown">
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Orders</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown">
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content">
        <router-view/> 
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import {fb} from '../firebase.js'
import $ from 'jquery'

export default {
  name: "Admin",
  methods: {
    logout() {
      fb.auth().signOut()
      .then(() => {
        Toast.fire({
          type: 'success',
          title: 'Signed out successfully'
        })
        this.$router.replace('/');
      })
      .cath((err) => {
        alert(err);
      })
    },
    CloseSidebar(){
      $(".page-wrapper").removeClass("toggled");
    },
    ShowSidebar() {
      $(".page-wrapper").addClass("toggled");
    }
  }
};
</script>

<style scoped>
.close span {
  color: white;
}
</style>

