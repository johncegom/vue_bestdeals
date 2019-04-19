<template>
  <div>
    <Header/>
    <Navigation/>

    <div class="row">
      <div class="col-sm-5">
        <img class="img-fluid" :src="showcase.img">
      </div>
      <div class="col-sm-7">
        <p class="text-center brand">{{showcase.brand}}</p>
        <h3 class="text-center">{{showcase.title}}</h3>
        <h4 class="text-center price">{{showcase.price}}₫</h4>
        <h4>
          <span>Size EU &nbsp;</span>
          <a href="#">Size Guide</a>
        </h4>

        <button type="button" class="myButton" v-for="size in showcase.sizes" :key="size">{{size}}</button>
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
    showcase: { type: Object }
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
.brand {
  font-size: 40px;
  font-weight: 650;
}

.row {
  margin: auto;
  width: 80%;
  height: 500px;
}

.sizeblock {
  height: 27px;
  width: 47px;
}

.myButton {
  background: black;
  padding-bottom: 10px;
}



.price {
  font-weight: 650;
  font-size: 17px;
}
</style>

