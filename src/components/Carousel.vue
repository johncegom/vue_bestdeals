<template>
  <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
      <li data-target="#carouselIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcases[5].brand, title: showcases[5].title, showcase: showcases[5]}}" class="carousel-item active">
        <img
          class="d-block w-100"
          :src="showcases[5].img"
          alt="900x500"
          data-holder-rendered="true"
        >
      </router-link>
      <router-link :to="{name: 'ShowcaseDetails', params: {brand: showcases[n].brand, title: showcases[n].title, showcase: showcases[n]}}" class="carousel-item" v-for="n in 3" :key="showcases[n].title">
        <img
          class="d-block w-100"
          :src="showcases[n].img"
          alt="900x500"
          data-holder-rendered="true"
        >
      </router-link>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  props: {
    showcases: { type: Array}
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped>
.carousel-indicators li {
  background-color: red;
}
</style>

