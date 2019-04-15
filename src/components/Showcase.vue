<template>
  <div class="showcase">
    <div class="title">
      <h1>{{title}}</h1>
      <hr>
    </div>

    <div class="showcase-items">
      <div :key="showcase.title" v-for="showcase in showcases">
        <router-link v-bind:to="'/'+showcase.title">
          <img :src="showcase.img">
        </router-link>
        <router-link v-bind:to="'/'+showcase.title">
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

