<template>
  <div>
    <form class="form-inline">
      <div class="table-cell">
        <input
          class="form-control mr-sm-2"
          @keyup.enter="GetSearch"
          type="text"
          placeholder="Search..."
        >
      </div>
      <div class="table-cell">
        <button @click="GetSearch" class="btn btn-outline-light my-2 my-sm-0" type="submit"><img src="../assets/img/search.png" alt="Search img"></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
	name: "SearchBar",
	data() {
		return {

		}
	},
	methods: {
		GetSearch(){
      alert('Chua co lam bam cai gi')
		}
	}
}
</script>

<style scoped>

button {
  background: #000;
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
  margin-top: 17px;
  display: none;
}

@media (min-width: 980px) {
.form-inline {
  display: inline-flex;
}

.form-inline input[type=text]{
	width:300px !important;
}
}
</style>

