<template>
  <div class="showcase">
    <div class="title">
      <h1>{{title}}</h1>
      <hr>
    </div>

    <div class="showcase-items">
      <div :key="showcase.title" v-for="showcase in showcases">
        <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcase.brand, title: showcase.title, showcase}}">
          <img :src="showcase.img">
        </router-link>
        <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcase.brand, title: showcase.title, showcase}}">
          <p>{{ showcase.title }}</p>
        </router-link>
        <p>{{ showcase.price }}₫</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showcase",
  props: {
    title: String,
    showcases: { type: Array}
  },
  data() {
    return {

    };
  }
};
</script>

