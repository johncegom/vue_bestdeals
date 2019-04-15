<template>
  <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
      <li data-target="#carouselIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="http://www.feriadurugby.com/images/amplusfigura/reebok-black-green-hi-sports-shoes-44EU.jpg"
          alt="900x500"
          data-holder-rendered="true"
        >
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://oriasshop.cdn.shoprenter.hu/custom/oriasshop/image/cache/w900h500/Term%C3%A9kek/f%C3%A9rfi%20cip%C5%91k/New%20Balance/ml574-lpk-lth-beige.jpg?lastmod=1549140771.1498566185"
          alt="900x500"
          data-holder-rendered="true"
        >
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="http://www.mymounthope.ca/images/cashoes/Genuine-NIKE-SKY-FORCE-88-MID-VNTG-BLACK-Black-Nike-Mens-BASKETBALL-SHO03241487.jpg"
          alt="900x500"
          data-holder-rendered="true"
        >
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="https://images.solecollector.com/complex/image/upload/wdbqzwqesnceofhwdakx.jpg"
          alt="900x500"
          data-holder-rendered="true"
        >
      </div>
      <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  props: {
    showcases: { type: Array}
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.carousel-indicators li {
  background-color: red;
}
</style>

