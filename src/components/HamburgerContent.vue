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
            <li v-for="brand in brands" :key="brand.title">
              <router-link :to="{name: 'BrandShowcase', params: {brand: brand.title, showcases}}">
                <span class="menu-text">{{brand.title}}</span>
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
  props: {
    showcases: { type: Array }
  },
  methods: {
    CloseSidebar() {
      $(".page-wrapper").removeClass("toggled");
    }
  },
  data() {
    return {
      brands: [
        {
          title: "Adidas",
          children: ["Stan Smith", "Yeezy", "Utra Boost", "NMD", "Super Star"]
        },
        {
          title: "Nike",
          children: ["Flyknit", "React", "Air Jordan", "Presto", "Blazer"]
        },
        {
          title: "Air Max",
          children: [
            "Air Max 1",
            "Air Max 90",
            "Air Max 95",
            "Air Max 97",
            "Air Max 270"
          ]
        },
        {
          title: "Converse",
          children: []
        },
        {
          title: "Vans",
          children: []
        },
        {
          title: "Reebok",
          children: []
        },
        {
          title: "New Balance",
          children: []
        }
      ]
    }
  }
}
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
