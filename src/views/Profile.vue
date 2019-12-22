<template>
	<div>
		<div class="container">
			<div class="row h-100 justify-content-center align-items-center">
				<div class="col-md-6">
					<h1>Profile Settings</h1>
					<h3>Change your profile here.</h3>
				</div>
				<div class="col-md-6">
					<img class="img-fluid" src="../assets/img/product.svg" alt="demonstrate">
				</div>
			</div>
		</div>

		
	</div>
</template>

<script>
export default {
	name: "Profile",
	data() {
    return {
      profile: {
				firstname: null,
				lastname: null,
				phone: null,
				address: null
			}
    };
	},
	
	firestore() {
		const user = fb.auth().currentUser;
		return {
			profile: db.collection("profiles").doc(user.uid)
		}
	},

	methods: {
		updateProfile() {
			this.$firestore.profile.update(this.profile);
		}
	}
}
</script>
