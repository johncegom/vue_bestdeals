<template>
  <nav class="main-nav" id="test">
    <div class="drop-nav">
      <div class="dropdown" v-for="brand in brands" :key="brand.title">
        <router-link :to="{name: 'BrandShowcase', params: {brand: brand.title}}" class="dropdown-title" data-toggle="dropdown">{{brand.title}}</router-link>
        <div class="dropdown-menu">
          <router-link :to="{name: 'BrandShowcase', params: {brand: children}}" v-for="children in brand.children" :key="children" class="dropdown-item" >{{children}}</router-link>
        </div>
      </div>

      <div class="dropdown">
        <router-link to="/" class="dropdown-title">Nike</router-link>
        <div class="dropdown-menu">
          <router-link to="/" class="dropdown-item">Flyknit</router-link>
          <router-link to="/" class="dropdown-item">React</router-link>
          <router-link to="/" class="dropdown-item">Air Jordan</router-link>
          <router-link to="/" class="dropdown-item">Kobe Bryant</router-link>
          <router-link to="/" class="dropdown-item">Air Force 1</router-link>
        </div>
      </div>

      <div class="dropdown">
        <router-link to="/" class="dropdown-title" data-toggle="dropdown">Air Max</router-link>
        <div class="dropdown-menu">
          <router-link to="/" class="dropdown-item">Air Max 1</router-link>
          <router-link to="/" class="dropdown-item">Air Max 90</router-link>
          <router-link to="/" class="dropdown-item">Air Max 95</router-link>
          <router-link to="/" class="dropdown-item">Air Max 97</router-link>
          <router-link to="/" class="dropdown-item">Air Max 270</router-link>
        </div>
      </div>

      <div class="dropdown">
        <router-link to="/" class="dropdown-title">Converse</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/" class="dropdown-title">Vans</router-link>
      </div>

      <div class="dropdown">
        <router-link to="/" class="dropdown-title">Reebok</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      brands: [
        {
          title: 'Adidas',
          children: [
            'Stan Smith',
            'Yeezy',
            'XAmlz'
          ]
        },
        {
          title: 'Nike',
          children: [
            'Flyknit',
            'React'
          ]
        }
      ]
    }
  }
};
</script>

