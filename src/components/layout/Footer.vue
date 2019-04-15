<template>
  <footer>
    &copy; Created By
    <router-link to="/author" class="router">Hoang Minh</router-link>
In 2019
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.router {
  text-decoration: none;
  color: red;
}

footer {
  cursor: default;
  font-size: 20px;
}
</style>
