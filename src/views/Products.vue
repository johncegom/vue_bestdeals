<template>
	<div>
		<div class="container">
			<div id="alert"></div>
			<h1>Products</h1>
			<h3>Basic CRUD</h3>
			<div class="product-crud">
				
				<div class="form-group">
					<label>Brand</label>
					<input type="text" class="form-control" placeholder="Enter shoes brand..." v-model="shoes.brand">
				</div>
				<div class="form-group">
					<label>Name</label>
					<input type="text" class="form-control" placeholder="Enter shoes name..." v-model="shoes.title">
				</div>
				<div class="form-group">
					<label>Quantities</label>
					<input type="text" class="form-control" placeholder="Enter shoes quantities..." v-model="shoes.quantities">
				</div>
				<div class="form-group">
					<label>Sale Price</label>
					<input type="text" class="form-control" placeholder="Enter discount price..."	v-model="shoes.saleprice">
				</div>
				<div class="form-group">
					<label>Price</label>
					<input type="text" class="form-control" placeholder="Enter normal price...."	v-model="shoes.price">
				</div>
				<button type="button" class="myButton" @click="saveData">Add</button>
			</div>
			<br>
			<h3>Products List</h3>
			<table class="table">
				<thead>
					<tr>
						<th>Brand</th>
						<th>Name</th>
						<th>Quantities</th>
						<th>Price</th>
						<th>Sale Price</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="shoe in allshoes" :key="shoe.title">
						<td>{{shoe.data().brand}}</td>
						<td>{{shoe.data().title}}</td>
						<td>{{shoe.data().quantities}}</td>
						<td>{{shoe.data().price}}</td>
						<td>{{shoe.data().saleprice}}</td>
						<td>
							<button @click="editProduct(shoe)" class="btn btn-primary">Edit</button>
							<button @click="deleteProduct(shoe.id)" class="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>

<!-- Modal -->
			<div class="modal" id="edit">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h2 class="modal-title">Edit</h2>
						<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label>Brand</label>
							<input type="text" class="form-control" placeholder="Enter shoes brand..." v-model="shoes.brand">
						</div>
						<div class="form-group">
							<label>Name</label>
							<input type="text" class="form-control" placeholder="Enter shoes name..." v-model="shoes.title">
						</div>
						<div class="form-group">
							<label>Quantities</label>
							<input type="text" class="form-control" placeholder="Enter shoes quantities..." v-model="shoes.quantities">
						</div>
						<div class="form-group">
							<label>Sale Price</label>
							<input type="text" class="form-control" placeholder="Enter discount price..."	v-model="shoes.saleprice">
						</div>
						<div class="form-group">
							<label>Price</label>
							<input type="text" class="form-control" placeholder="Enter normal price...."	v-model="shoes.price">
						</div>

					</div>
					<div class="modal-footer">
						<button @click="updateProduct()" type="button" class="btn btn-primary">Save Changes</button>
						<button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>

		</div>
	</div>
</template>

<script>
import {fb,db} from '../firebase.js';

export default {
	name: "Products",
	data() {
		return {
			allshoes: [],
			shoes: {
				brand: null,
				title: null,
				quantities: null,
				saleprice: null,
				price: null
			},
			activeitem: null
		}
	},
	methods: {
		saveData() {
			db.collection("shoes").add(this.shoes)
			.then((docRef) => {
				$('#alert').text("Data has been added!");
				$('#alert').addClass("alert alert-success");
				this.reset();
			})
			.catch(function(error){
				alert("Error adding document: ", error);
			});
		},
		readData() {
			db.collection("shoes").get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					this.allshoes.push(doc);
				});
			});
		},
		deleteProduct(doc){
			if(confirm('Are you sure? ')) {
				db.collection("shoes").doc(doc).delete()
				.then(function() {
				$('#alert').text("Data has been deleted!");
				$('#alert').addClass("alert alert-danger");
				})
				.catch(function(error) {
					alert("Error: ", error);
				});
			}
		},
		editProduct(shoe){
			$('#edit').modal('show');
			this.shoes = shoe.data();
			this.activeitem = shoe.id;
		},
		updateProduct(){
			db.collection("shoes").doc(this.activeitem).update(this.shoes)
			.then(() => {
				this.shoes.brand = null;
				this.shoes.title = null;
				this.shoes.quantities = null;
				this.shoes.saleprice = null;
				this.shoes.price = null;
				this.watcher();
				$('#edit').modal('hide');
				this.watcher();
				$('#alert').text("Data has been updated!");
				$('#alert').addClass("alert alert-success");
			})
			.catch(function(error) {
				alert("Error: ", error);
			});
		},
		reset() {
			// Object.assign(this.$data, this.$options.data.apply(this));
		},
		watcher() {
			db.collection("shoes").onSnapshot((querySnapshot) => {
				this.allshoes = [];
				querySnapshot.forEach((doc) => {
					this.allshoes.push(doc);
				});
			});
		}
	},
	created() {
		this.readData();
	}
}
</script>

<style scoped>
	.myButton {
		padding: 0;
		background: #000;
	}
	.btn {
		margin-right: 5px;
	}

	.alert {
		font-size: 20px;
		font-weight: 650;
	}
</style>

