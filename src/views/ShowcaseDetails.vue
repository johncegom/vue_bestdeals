<template>
  <div>
    <Header/>
    <Navigation/>

    <div class="row">
      <div class="col-sm-8">
        <Carousel/>
      </div>
      <div class="col-sm-4">
        <h3 class="text-center">{{showcase.title}}</h3>
        <h4 class="text-center">{{showcase.price}}₫</h4>
        <h4 class="text-center">Size</h4>
        <!-- <select v-model="size" class="size">
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
        </select> -->
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
export default {
  name: "ShowcaseDetails",
  components: {
    Header,
    Navigation,
    Carousel,
    Footer
  },
  props: {
    showcase: {type: Object}
  },

  data() {
    return {
      // title: this.$route.params.title,
    }
  }
};
</script>

<style scoped>
.row {
  margin: auto;
  width: 80%;
}

.col-sm-8 {
  background: red;
}

.col-sm-4 {
  background: yellow;
}


</style>

