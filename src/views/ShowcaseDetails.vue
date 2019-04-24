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
        <div>
          <h4 class="text-center">
            <span>Size EU &nbsp;</span>
            <a href="#">Size Guide</a>
          </h4>
          <div id="testtt">
          <button
            @click="GetSize()"
            type="button"
            class="myButton"
            v-for="size in showcase.sizes"
            :key="size"
            :value="size"
          >{{size}}</button>
        </div>
        </div>

        <div>
          <button id="AddToCart" class="myButton">Add To Cart</button>
        </div>
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
    return {
      ChoseSize: null
    };
  },

  methods: {
    GetSize() {
    const ChoseSize = $(this).val();
      alert(ChoseSize);
    }
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

#testtt {
  margin: auto;
}

.myButton {
  background: black;
  padding-bottom: 10px;
}

#AddToCart {
  margin-left: 50px;
}

.price {
  font-weight: 650;
  font-size: 17px;
}
</style>

