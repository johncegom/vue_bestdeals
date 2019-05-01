<template>
  <div class="showcase">
    <div class="title" v-show="title != ''">
      <h1>{{title}}</h1>
      <hr>
    </div>

    <div class="showcase-items">
      <div :key="showcase.title" v-for="showcase in showcases_s">
        <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcase.brand, title: showcase.title, showcase, showcases}}">
          <img class="img-fluid" :src="showcase.img">
        </router-link>
        <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcase.brand, title: showcase.title, showcase, showcases}}">
          <p class="link">{{ showcase.title }}</p>
        </router-link>
          <span class="sale" v-show="showcase.price != '' ">{{showcase.price}}₫</span>
          <p class="price">{{ showcase.saleprice }}₫</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showcase",
  props: {
    title: String,
    showcases: { type: Array},
    showcases_s: {type: Array}
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
  .link {
    font-size: 18px;
    color: black;
  }

  .link:hover {
    color: blue;
  }

  .price {
    font-weight: 800;
    font-size: 17px;
  }

  .sale {
    text-decoration: line-through;
    font-weight: 700;
    color: red;
  }
</style>


