<template>
  <div>
    <Header/>
    <Signin/>
    <Signup/>
    <Navigation/>
    <div class="wrapper">
      <Carousel :showcases="showcases[0]"/>
      <Showcase title="Flash Sales" :showcases="showcases[0]"/>
      <Showcase title="New Arrival" :showcases="showcases[1]"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Showcase from "../components/Showcase";
import Carousel from "../components/Carousel";
import Header from "../components/layout/Header";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "Home",
  components: {
    Showcase,
    Carousel,
    Header,
    Navigation,
    Footer,
    Signin,
    Signup
  },
  data() {
    return {
      showcases: [
        // First showcase
        [
          {
            brand: 'Nike',
            title: "Nike React Element 87",
            img:
              "https://cdn.shopify.com/s/files/1/2031/6995/products/AQ1090004_1_1280x.jpg?v=1539175782",
            price: "2.800.000"
          },
          {
            brand: 'Nike',
            title: "Nike Epic React Flyknit 2",
            img: "https://i1.adis.ws/i/jpl/jd_1204269_a?qlt=80&w=600&h=425&v=1",
            price: "3.590.000"
          },
          {
            brand: 'Yeezy',
            title: "Yeezy static v2 700",
            img:
              "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fadidas-yeezy-boost-700-v2-static-store-list-1-e1545536030742.jpg?q=75&w=800&cbr=1&fit=max",
            price: "10.990.000"
          },
          {
            brand: 'Nike',
            title: "Nike Zoom Fly",
            img:
              "http://justfreshkicks.com/wp-content/uploads/2018/05/Nike-Zoom-Fly-Be-True.jpg",
            price: "2.700.000"
          },
          {
            brand: 'Nike',
            title: "Nike  ",
            img:
              "http://www.mymounthope.ca/images/cashoes/Genuine-NIKE-SKY-FORCE-88-MID-VNTG-BLACK-Black-Nike-Mens-BASKETBALL-SHO03241487.jpg",
            price: "3.590.000"
          },
          {
            brand: 'Nike',
            title: "Nike 2 ",
            img:
              "https://sneakernews.com/wp-content/uploads/2014/08/nike-tennis-best-of-4.jpg",
            price: "3.590.000"
          },
          {
            brand: 'Nike',
            title: "1 ",
            img:
              "http://www.mapforid.it/media/import/Images/nike%20air%20jordan%201%20retro%20uomo-394cxr.jpg",
            price: "3.590.000"
          },
          {
            brand: 'Reebok',
            title: "Reebok ",
            img:
              "http://www.local510.ca/images/inngasge/shoes-Black-reebok-classic-streetboro-blk-Mens-J93277-Canada-online-sale.jpg",
            price: "3.590.000"
          },
          {
            brand: 'Reebok',
            title: "Reebok 1",
            img:
              "https://sneakerbardetroit.com/wp-content/uploads/2018/06/Reebok-Workout-3-AM-NOLA-Pack-2.jpg",
            price: "3.590.000"
          }
        ],
        // Second showcase
        [
          {
            brand: 'Adidas',
            title: "Adidas",
            img:
              "http://www.pnbpampernailbar.com/images/530de/adidas-basketball-shoes-adizero-derrick-rose-rose-1-home-65NF.jpg",
            price: "2.800.000"
          },
          {
            brand: 'Adidas',
            title: "Adidas",
            img:
              "http://www.mymounthope.ca/images/cashoes/Harvest-Time-Sale-ADIDAS-ORIGINALS-CIERO-MAROON-RED-UPDATE-Red-Adidas-Mens86795477.jpg",
            price: "3.590.000"
          },
          {
            brand: 'Adidas',
            title: "Adidas 2222",
            img:
              "http://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_34f3a7e54ea84ccc89bf61c8f4cb54865b4d2b65977ff.jpg",
            price: "10.990.000"
          },
          {
            brand: 'Nike',
            title: "Nikeeee",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4A6e6ai_PwqYDp0C-FSvGe4xebNVTFurQsF9vseik2H52quxw",
            price: "2.700.000"
          },
          {
            title: "e ",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-4GTp8vOgTtvfnGw4t-xwIld5rXbocA_RKrg-GGudrtBQD7k",
            price: "3.590.000"
          },
          {
            brand: 'Converse',
            title: "f ",
            img:
              "https://oriasshop.cdn.shoprenter.hu/custom/oriasshop/image/cache/w900h500/Term%C3%A9kek/f%C3%A9rfi%20cip%C5%91k/Converse/M9613_01-500x500.jpg?lastmod=1497348212.1498566185",
            price: "3.590.000"
          },
          {
            brand: 'Reebok',
            title: "g ",
            img: "https://basketzone.net/zdjecia/zdjecia/1320.jpg",
            price: "3.590.000"
          },
          {
            title: "555 ",
            img:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOQaCPU1s79kSt3ud7Oygd-MuksFmhvoqT-2ssX7iykTbrYKH",
            price: "3.590.000"
          },
          {
            brand: 'Adidas',
            title: "2222",
            img:
              "https://cdn.shopify.com/s/files/1/0970/9552/products/Sept-18-61.jpg?v=1544513359",
            price: "3.590.000"
          }
        ]
      ]
    };
  }
};
</script>
