<template>
  <div>
    <Header/>
    <Navigation/>
    <br>

    <div class="row">
      <div class="col-sm-5">
        <img class="img-fluid image-border" :src="showcase.img">
      </div>
      <div class="col-sm-7">
        <p class="text-center brand">{{showcase.brand}}</p>
        <h3 class="text-center">{{showcase.title}}</h3>
        <h5 class="text-center sale" v-show="showcase.price != ''">{{showcase.price}}</h5>
        <h4 class="text-center price">{{showcase.saleprice}}₫</h4>
        <div>
          <h4 class="text-center">
            <span>Size EU &nbsp;</span>
            <a data-toggle="modal" href="#">Size Guide</a>
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
        <hr>

        <div>
          <h4>Brand: {{showcase.brand}}</h4>
          <h4>Condition: New</h4>
        </div>

      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
// import Carousel from "../components/Carousel";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
export default {
  name: "ShowcaseDetails",
  components: {
    Header,
    Navigation,
    // Carousel,
    Footer
  },
  props: {
    showcase: { type: Object }
  },

  data() {
    return {
      ChoseSize: null,
    };
  },

  methods: {
    GetSize() {
    },
    range(min,max) {
      var array = [],
      j = 0;
      for(var i = min; i <= max; i++){
        array[j] = i;
        j++;
      }
      return array;
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


.sale {
  text-decoration: line-through;
  font-weight: 700;
  color: red;
}

.price {
  font-weight: 650;
  font-size: 17px;
}

.image-border {
  border: 1px solid lightgray;
}
</style>

