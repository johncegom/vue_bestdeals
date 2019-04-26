<template>
  <footer>
    <div class="row">
      <div class="col">
        <router-link to="/">
          <img id="logo" src="../../assets/img/logo.png" alt>
        </router-link>
      </div>
      <div class="col">
        <h3>Best Deals - 100% Authentic</h3>
        <p>Address: Số 69 đường Lý Thái Tổ - Quận 1 - TP. Hồ Chí Minh</p>
        <p>
          Hotline:
          <a href="tel:0337xxxxx9">0337 xxx xxx</a>
        </p>
        <p>
          <a href="mailto:BD1001@gmail.com">Email: BD1001@gmail.com</a>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h3>Follow us</h3>
        <br>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a
              href="https://www.facebook.com/johncegom"
              target="_blank"
              rel="nofollow"
              class="fbbg facebookicon"
            >
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="iconbg twittericon">
              <span>
                <i class="fab fa-twitter"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="iconbg instaicon">
              <span>
                <i class="fab fa-instagram"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#" class="iconbg youtubeicon">
              <span>
                <i class="fab fa-youtube"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
p a {
  color: var(--gold);
  text-decoration: none;
}

li a {
  transition: all 150ms ease-in-out;
}

.iconbg,
.fbbg {
  border-radius: 50%;
  background: white;
  padding: 9px 14px 9px 14px;
}

.fbbg {
  padding: 9px 18px 9px 18px;
}

.facebookicon {
  color: #47649e;
}

.facebookicon:hover {
  background: #47649e;
  color: white;
}

.twittericon {
  color: #00a0d1;
}

.twittericon:hover {
  background: #00a0d1;
  color: white;
}

.instaicon {
  color: #e4405f;
}

.instaicon:hover {
  background: #e4405f;
  color: white;
}

.youtubeicon {
  color: red;
}

.youtubeicon:hover {
  background: red;
  color: white;
}

#logo {
  max-width: 300px;
  max-height: 300px;
}
</style>
