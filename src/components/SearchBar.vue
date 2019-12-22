<template>
  <div>
    <form class="form-inline">
      <input
        class="form-control mr-sm-2 input-logo"
        @keyup.enter="GetSearch"
        type="text"
        placeholder="Search..."
      />
      <button
        @click="GetSearch"
        class="btn btn-outline-light my-2 my-sm-0"
        type="submit"
      >
        <img src="../assets/img/search.png" alt="Search img" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {};
  },
  methods: {
    GetSearch() {
      alert("Under Construction");
    }
  }
};
</script>

<style scoped>
button {
  background: #000;
  display: none;
}

button > img {
  height: 25px;
  transition: all ease 300ms;
}

button:hover {
  background: black;
}

button > img:hover {
  transform: rotate(120deg);
}

.form-inline {
  margin-top: 1rem;
}

.input-logo {
  background-image: url("../assets/img/search1.png");
  background-position: right;
  background-repeat: no-repeat;
}

@media (min-width: 980px) {
  button {
    display: initial;
  }

  .input-logo {
    background-image: none;
  }

  .form-inline .form-control {
    width: 21rem;
  }
}
</style>
