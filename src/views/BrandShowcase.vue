<template>
  <div>
    <Header/>
    <Navigation/>

    <div class="wrapper">
      <h1>{{brand}} Shoes</h1>
      <div class="row">
        <div class="sidebar col-md-3">
          <div class="sidebar-item">
            <h3>Price</h3>
            <div class="table-cell input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id>₫</span>
              </div>
              <input placeholder="minimum..." type="text" class="form-control">
              <input placeholder="maximum..." type="text" class="form-control">
            </div>
          </div>

          <div class="sidebar-item">
            <h3>Size</h3>
            <div class="checkbox">
              <div>
                <input type="checkbox">
                <label>&nbsp; 38</label>
              </div>

              <div>
                <input type="checkbox">
                <label>&nbsp; 39</label>
              </div>
              <div>
                <input type="checkbox">
                <label>&nbsp; 40</label>
              </div>
              <div>
                <input type="checkbox">
                <label>&nbsp; 42</label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="content col-md-9"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi suscipit at unde, natus ex et accusantium neque sint dolores, error aut dicta non quos fuga dolor nobis assumenda aspernatur, minima fugiat temporibus perspiciatis repellat atque. Vitae ducimus eum, nostrum ratione commodi error tempora rem impedit enim perspiciatis, ad labore?</div>
      </div>
    </div>
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
    brand: { type: Array }
  },
  data() {
    return {};
  },
  methods: {
    GetSearch() {
      alert("Under construction");
    }
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

h3 {
  background: lightgray;
  padding: 10px;
}

.sidebar-item {
  border: 1px solid lightgray;
  padding-bottom: 5px;
}

.checkbox {
  padding-left: 10px;
}

</style>
