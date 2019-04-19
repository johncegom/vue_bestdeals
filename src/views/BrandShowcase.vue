<template>
  <div>
    <Header/>
    <Navigation/>

    <p>I don't know what to do here but you can go here is my success!!</p>

    <Footer/>
  </div>
</template>

<script>
// import Showcase from "../components/Showcase";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
export default {
  name: "BrandShowcase",
  components: {
    Header,
    Navigation,
    // Showcase,
    Footer
  },
  props: { 
    brand: {type: Array}
    },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
  p {
    height: 500px;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
  }
</style>
