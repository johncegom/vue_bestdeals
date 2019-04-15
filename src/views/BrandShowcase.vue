<template>
  <div>
    <Showcase title="Testing" :showcases="showcases[0]"/>
  </div>
</template>

<script>
import Showcase from "../components/Showcase";
export default {
  name: "BrandShowcase",
  components: {
    Showcase
  },
  data() {
    return {
      showcases: [
        {
          title: "Nike React Element 87",
          img:
            "https://cdn.shopify.com/s/files/1/2031/6995/products/AQ1090004_1_1280x.jpg?v=1539175782",
          price: "2.800.000"
        },
        {
          title: "Nike Epic React Flyknit 2",
          img: "https://i1.adis.ws/i/jpl/jd_1204269_a?qlt=80&w=600&h=425&v=1",
          price: "3.590.000"
        },
        {
          title: "Yeezy static v2 700",
          img:
            "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F12%2Fadidas-yeezy-boost-700-v2-static-store-list-1-e1545536030742.jpg?q=75&w=800&cbr=1&fit=max",
          price: "10.990.000"
        },
        {
          title: "Nike Zoom Fly",
          img:
            "http://justfreshkicks.com/wp-content/uploads/2018/05/Nike-Zoom-Fly-Be-True.jpg",
          price: "2.700.000"
        },
        {
          title: "Nike  ",
          img:
            "http://www.mymounthope.ca/images/cashoes/Genuine-NIKE-SKY-FORCE-88-MID-VNTG-BLACK-Black-Nike-Mens-BASKETBALL-SHO03241487.jpg",
          price: "3.590.000"
        },
        {
          title: "Nike 2 ",
          img:
            "https://sneakernews.com/wp-content/uploads/2014/08/nike-tennis-best-of-4.jpg",
          price: "3.590.000"
        },
        {
          title: "1 ",
          img:
            "http://www.mapforid.it/media/import/Images/nike%20air%20jordan%201%20retro%20uomo-394cxr.jpg",
          price: "3.590.000"
        },
        {
          title: "Reebok ",
          img:
            "http://www.local510.ca/images/inngasge/shoes-Black-reebok-classic-streetboro-blk-Mens-J93277-Canada-online-sale.jpg",
          price: "3.590.000"
        },
        {
          title: "Reebok 1",
          img:
            "https://sneakerbardetroit.com/wp-content/uploads/2018/06/Reebok-Workout-3-AM-NOLA-Pack-2.jpg",
          price: "3.590.000"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
