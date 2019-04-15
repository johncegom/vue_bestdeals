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
        <button @click="GetSearch" class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
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
			
		}
	}
}
</script>

<style>

.form-inline {
	margin-top: 17px;
}

@media (min-width: 980px) {
.form-inline {
  display: inline-flex;
}

.form-inline input[type=text]{
	width:350px !important;
}
}
</style>

