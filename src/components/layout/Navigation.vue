<template>
  <nav class="main-nav" id="test">
    <div class="drop-nav">
      <div class="dropdown" v-for="brand in brands" :key="brand.title">
        <router-link :to="{name: 'BrandShowcase', params: {brand: brand.title}}" class="dropdown-title" data-toggle="dropdown">{{brand.title}}</router-link>
        <div class="dropdown-menu" v-show="brand.children!=''">
          <router-link :to="{name: 'BrandShowcase', params: {brand: children}}" v-for="children in brand.children" :key="children" class="dropdown-item" >{{children}}</router-link>
        </div>
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
            'Utra Boost',
            'NMD',
            'Super Star'
          ]
        },
        {
          title: 'Nike',
          children: [
            'Flyknit',
            'React',
            'Air Jordan',
            'Presto',
            'Blazer'
          ]
        },
        {
          title: 'Air Max',
          children: [
            'Air Max 1',
            'Air Max 90',
            'Air Max 95',
            'Air Max 97',
            'Air Max 270'
          ]
        },
        {
          title: 'Converse',
          children: []
        },
        {
          title: 'Vans',
          children: []
        },
        {
          title: 'Reebok',
          children: []
        },
        {
          title: 'New Balance',
          children: []
        }
      ]
    }
  }
};
</script>

