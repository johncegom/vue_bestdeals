<template>
	<div>
		<div class="container h-100">
			<div class="row h-100 justify-content-center align-items-center">
				<div class="col-md-6">
					<h1>Products</h1>
					<h3>Add and modify your products here</h3>
				</div>
				<div class="col-md-6">
					<img class="img-fluid" src="../assets/img/product.svg" alt="demonstrate">
				</div>
			</div>
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
						<h2 v-if="edit == true" class="modal-title">Edit</h2>
						<h2 v-if="edit == false" class="modal-title">Add</h2>
						<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-8">
								<div class="form-group">
									<label>Name</label>
									<input type="text" class="form-control" placeholder="Enter shoes name..." v-model="shoes.title">
								</div>
								<div class="form-group">
									<label>Description</label>
									<vue-editor v-model="shoes.description"></vue-editor>
								</div>
								<div class="form-group">
									<label>Images</label>
									<input type="file" @change="uploadImage" class="form-control">
								</div>
								
							</div>

							<div class="col-4">
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
								<div class="form-group">
									<label>Tags</label>
									<input type="text" @keyup.188="addTag" class="form-control" placeholder="Enter shoes tag...."	v-model="tag">
									<br>
									<p class="d-inline tags" v-for="tag in shoes.tags" :key="tag">
										{{tag}}
									</p>
								</div>
								<div class="form-group d-flex">
									<div class="p-1 image-wrap" v-for="(image, index) in shoes.images" :key="index">
										<img width="80px" :src="image" alt="">
										<span @click="deleteImage(image, index)" class="delete-image">&times;</span>
									</div>
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
import { VueEditor } from 'vue2-editor';

export default {
	name: "Products",
	components: {
		VueEditor
	},
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
				images: [],
				tags: []
			},
			activeitem: null,
			edit: false,
			tag: null
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
			this.reset();
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
		},
		addTag(){
			this.tag = this.tag.slice(0, this.tag.length-1);
			this.shoes.tags.push(this.tag);
			this.tag = "";
		},
		deleteImage(img, index){
			let image = fb.storage().refFromURL(img);
			this.shoes.images.splice(index, 1);
			image.delete()
				.then(() => {
					alert("Image deleted!");
				})
				.catch((error) => {
					alert(error);
				});
		},
		reset() {
			this.shoes = {
				brand: null,
				title: null,
				quantities: null,
				saleprice: null,
				price: null,
				description: null,
				images: [],
				tags: []
			}
		},
		uploadImage(e){
			if (e.target.files[0]) {
				let file = e.target.files[0];
				var storageRef = fb.storage().ref('shoes/' + ( Math.floor(Math.random() * 10) + 1) + '-' + file.name );
				let uploadTask = storageRef.put(file);
				
				uploadTask.on('state_changed', (snapshot) => {

				},
				(error) => {

				},
				() => {
					uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
						this.shoes.images.push(downloadURL);
					})
				})
			}
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

	.tags {
		border: 2px solid black;
		text-align: center;
		margin-right: 2px;
		padding: 1px;
	}

	.image-wrap {
		position: relative;
	}
	
	.delete-image {
		position: absolute;
		top: -2px;
		right: 15px;
	}

	.delete-image:hover {
		cursor: pointer;
	}
</style>

