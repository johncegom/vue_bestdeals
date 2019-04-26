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
        <div class="content col-md-9">
          <nav class="paginationnav">
            <ul class="pagination">
              <li class="page-item disabled">
                <a class="page-link" href="#!" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#!">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#!" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="brandshowcase">
            <div class="brandshowcase-items">
              <div v-for="n in 8" :key="n">
                <router-link to="/">
                  <img
                    class="img-fluid"
                    src="https://stockx.imgix.net/Adidas-Human-Race-NMD-Pharrell-You-Nerd.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1538080256"
                  >
                </router-link>
                <router-link to="/">
                  <p class="link">Ten giay</p>
                </router-link>
                  <p class="price">x.xxx.xxx₫</p>
              </div>
            </div>
          </div>
        </div>
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

.disabled:hover {
  cursor: not-allowed;
}

.checkbox {
  padding-left: 10px;
}


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

ul {
  margin-bottom: 0;
}

.paginationnav {
  background: lightgray;
  padding: 10px;
}

.brandshowcase-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  text-align: center;
}

.brandshowcase-items div a {
  text-decoration: none;
  text-transform: capitalize;
}

.brandshowcase-items div img:hover {
  opacity: 0.8;
}

@media (min-width: 980px) {
  .brandshowcase-items {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
