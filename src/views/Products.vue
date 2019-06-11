<template>
	<div>
		<div class="container">
			<div id="alert"></div>
			<h1>Products</h1>
			<br>
			<h3 class="d-inline-block">Products List</h3>
			<button @click="addNew()" class="myButton float-right">Add New</button>
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
						<td>{{shoe.brand}}</td>
						<td>{{shoe.title}}</td>
						<td>{{shoe.quantities}}</td>
						<td>{{shoe.price}}</td>
						<td>{{shoe.saleprice}}</td>
						<td>
							<button @click="editProduct(shoe)" class="btn btn-primary">Edit</button>
							<button @click="deleteProduct(shoe.id)" class="btn btn-danger">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>

<!-- Modal -->
			<div class="modal" id="shoes">
			<div class="modal-dialog modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<h2 class="modal-title">Edit</h2>
						<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-6">
								<div class="form-group">
									<label>Name</label>
									<input type="text" class="form-control" placeholder="Enter shoes name..." v-model="shoes.title">
								</div>
								<div class="form-group">
									<label>Description</label>
									<textarea rows="5" cols="50" class="form-control" v-model="shoes.description">Shoes description...</textarea>
								</div>
								<div class="form-group">
									<label>Images</label>
									<input type="file" @change="uploadImage()" class="form-control">
								</div>
							</div>

							<div class="col-6">
								<div class="form-group">
									<label>Brand</label>
									<input type="text" class="form-control" placeholder="Enter shoes brand..." v-model="shoes.brand">
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

						</div>
					</div>
					<div class="modal-footer">
						<button v-if="edit == false" @click="addShoes()" type="button" class="btn btn-primary">Add</button>
						<button v-if="edit == true" @click="updateProduct()" type="button" class="btn btn-primary">Save Changes</button>
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
				price: null,
				description: null,
				image: null
			},
			activeitem: null,
			edit: false
		}
	},
	firestore() {
		return {
			allshoes: db.collection('shoes')
		}
	},
	methods: {
		addNew() {
			this.edit = false;
			$('#shoes').modal('show');
		},
		addShoes() {
			this.$firestore.allshoes.add(this.shoes);
			$('#shoes').modal('hide');
			Toast.fire({
						type: 'success',
						title: 'Add successfully!'
					})
		},
		deleteProduct(doc){
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor : '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No!'
			}).then((result) => {
				if (result.value) {
				
					this.$firestore.allshoes.doc(doc).delete()

					Toast.fire({
						type: 'success',
						title: 'Delete successfully!'
					})
				}
			})
		},
		editProduct(shoe){
			$('#shoes').modal('show');
			this.shoes = shoe;
			this.edit = true;
		},
		updateProduct(){
			this.$firestore.allshoes.doc(this.shoes.id).update(this.shoes);
			$('#shoes').modal('hide');		
			Toast.fire({
				type: 'success',
				title: 'Update successfully!'
			})
		}
	},
	created() {

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

