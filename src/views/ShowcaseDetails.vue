<template>
  <div>
    <Header :showcases="showcases"/>
    <br>

    <div class="row">
      <div class="col-md-8">
        <img class="img-fluid image-border" :src="showcase.img">
      </div>
      <div class="col-md-4">
        <p class="text-center brand">{{showcase.brand}}</p>
        <h3 class="text-center">{{showcase.title}}</h3>
        <h5 class="text-center sale" v-show="showcase.price != ''">{{showcase.price}}</h5>
        <h4 class="text-center price">{{showcase.saleprice}}₫</h4>
        <div>
          <h6 class="text-center">
            <span class="SizeGuide">EU Size &nbsp;</span>
            <a data-toggle="modal" href="#sizeguide" class="SizeGuide">Size Guide</a>
          </h6>
          <div id="center">
            <button
              type="button"
              class="myButton"
              v-for="size in showcase.sizes"
              :key="size"
              :v-model="ChoseSize"
              value="42"
            >{{size}}</button>
          </div>
        </div>

        <div class="modal" id="sizeguide">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                  <h2 class="modal-title">SHOES SIZE GUIDE</h2>
                  <button type="button" class="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
                <p>Need help with sizing? We are here to help you 7 days a week: 12pm - 7pm</p>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <p class="title">Men</p>
                    <div class="sizetable">
                      <p class="sizetype">US</p>
                      <p class="sizetype">UK</p>
                      <p class="sizetype">EUROPE</p>
                      <p class="sizetype">CM</p>

                      <p>6</p>
                      <p>5.5</p>
                      <p>38.5</p>
                      <p>24</p>

                      <p>6.5</p>
                      <p>6</p>
                      <p>39</p>
                      <p>24.5</p>

                      <p>7</p>
                      <p>6</p>
                      <p>40</p>
                      <p>25</p>

                      <p>7.5</p>
                      <p>6.5</p>
                      <p>40.5</p>
                      <p>25.5</p>

                      <p>8</p>
                      <p>7</p>
                      <p>41</p>
                      <p>26</p>

                      <p>8.5</p>
                      <p>7.5</p>
                      <p>42</p>
                      <p>26.5</p>

                      <p>9</p>
                      <p>8</p>
                      <p>42.5</p>
                      <p>27</p>

                      <p>9.5</p>
                      <p>8.5</p>
                      <p>43</p>
                      <p>27.5</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <p class="title">Womens</p>
                    <div class="sizetable">
                      <p class="sizetype">US</p>
                      <p class="sizetype">UK</p>
                      <p class="sizetype">EUROPE</p>
                      <p class="sizetype">CM</p>

                      <p>4</p>
                      <p>1.5</p>
                      <p>34.5</p>
                      <p>21</p>

                      <p>4.5</p>
                      <p>2</p>
                      <p>35</p>
                      <p>21.5</p>

                      <p>5</p>
                      <p>2.5</p>
                      <p>35.5</p>
                      <p>22</p>

                      <p>5.5</p>
                      <p>3</p>
                      <p>36</p>
                      <p>22.5</p>

                      <p>6</p>
                      <p>3.5</p>
                      <p>36.5</p>
                      <p>23</p>

                      <p>6.5</p>
                      <p>4</p>
                      <p>37.5</p>
                      <p>23.5</p>

                      <p>7</p>
                      <p>4.5</p>
                      <p>38</p>
                      <p>24</p>

                      <p>7.5</p>
                      <p>5</p>
                      <p>38.5</p>
                      <p>24.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br>
        <div>
          <button id="AddToCart" class="myButton">ADD TO CART</button>
        </div>
        <hr>

        <div>
          <h3>Brand: {{showcase.brand}}</h3>
          <h3>Condition: New</h3>
          <h3>Colorway: </h3>
        </div>

        <hr>

        <div>
          <p class="description">Description here</p>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
// import Carousel from "../components/Carousel";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
export default {
  name: "ShowcaseDetails",
  components: {
    Header,
    // Carousel,
    Footer
  },
  props: {
    showcase: { type: Object },
    showcases: { type: Array }
  },

  data() {
    return {
      ChoseSize: ""
    };
  },

  methods: {
    range(min, max) {
      var array = [],
        j = 0;
      for (var i = min; i <= max; i++) {
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

#center {
  display: flex;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /* Safari 6.1+ */
  display: flex;
  justify-content: center;
}

.SizeGuide {
  text-transform: uppercase;
  color: gray;
}

a.SizeGuide:hover {
  color: red;
}

.myButton {
  background: black;
  padding: 0;
  height: 25px;
  width: 50px;
}

#AddToCart {
  height: 50px;
  width: 100%;
  border-radius: 0;
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
  width: 100%;
  object-fit: contain;
  height: 450px;
}

.description {
  color: gray;
}

/* Modal */
.close {
  position: absolute;
  top: 10px;
  right: 10px;
}

.modal-header {
  display: flex;
  flex-direction: column;
}

.modal-header p, h2.modal-title {
  margin: auto;
}

.sizetable {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.modal-content p {
  text-align: center;
}

.title, .sizetype {
  font-weight: 800;
  text-transform: uppercase;
}

.sizetype {
  font-weight: 650;
}
</style>

