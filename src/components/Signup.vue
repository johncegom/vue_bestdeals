<template>
  <div class="modal" id="signup">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Sign Up</h2>
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 col-4">
              <form data-toggle="validator">
                <div class="form-group">
                  <i class="fas fa-font"></i>
                  <label for="fname">First Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                    v-model="firstname"
                    required
                  >
                </div>
                <div class="form-group">
                  <i class="fas fa-font"></i>
                  <label for="lname">Last Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    name="lastname"
                    v-model="lastname"
                    required
                  >
                </div>
                <div class="form-group">
                  <i class="fas fa-user-alt"></i>
                  <label for="email">Email Address:</label>
                  <input type="email" class="form-control" id="email" name="email" v-model="email" required>
                </div>
                <div class="form-group">
                  <i class="fas fa-lock"></i>
                  <label for="pwd">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    name="password"
                    v-model="password"
                    required
                  >
                </div>
                <div class="form-group">
                  <i class="fas fa-check"></i>
                  <label for="pwd">Confirm Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    name="Password"
                    v-model="confirmpassword"
                    required
                  >
                </div>
              </form>
            </div>

            <div class="col-md-6 col-8">
              <ul class="signup-benefit">
                Create an account with us and you'll be able to:
                <li>Receive discount information.</li>
                <li>Save multiple shipping addresses.</li>
                <li>Access your order history.</li>
                <li>Track new orders.</li>
                <li>Save items to your wish list.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-primary" @click="Signup">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase.js";

export default {
  name: "Signup",
  data() {
    return {
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      confirmpassword: null
    };
  },
  methods: {
    Signup() {
      fb.auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          $("#signup").modal("hide");
          Toast.fire({
              type: 'success',
              title: 'Signed up successfully! You can login now.',
            });
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            Toast.fire({
              type: 'warning',
              title: 'The password is too weak!',
            });
          } else {
            Toast.fire({
              type: 'warning',
              title: errorMessage,
            });
          }
        });
    },
    ValidateSignup() {}
  }
};
</script>

<style scoped>
.form-group label {
  margin-left: 5px;
}
</style>


