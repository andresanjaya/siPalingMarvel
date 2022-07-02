<template>
<base-card3>
  <form @submit.prevent="submitForm">
    <div class="card-body text-center mt-1">
      <h4>Interested? Borrow Book Now!</h4>
    </div>
    <div class="mb-3">
      <label class="form-label" for="fullName">Full name</label>
      <input type="text" class="form-control" id="fullName" v-model.trim="fullName" required />
      <div id="emailHelp" class="form-text">First and last name. For example: John Smith</div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="email">Email address</label>
      <input type="email" class="form-control" id="email" v-model.trim="email" required />
      <div id="emailHelp" class="form-text">We need this to send you an order confirmation</div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="phoneNumber">Phone number</label>
      <input type="number" class="form-control" id="phoneNumber" v-model.trim="phoneNumber" required/>
      <div id="emailHelp" class="form-text">Your phone number is required for borrowing purposes only</div>
    </div>
    <div class="mb-3">
      <label class="form-label" for="date">Borrow date</label>
      <input type="date" class="form-control" id="date" v-model.trim="date" disabled/>
    </div>
    
    <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
    <div class="actions">
      <base-button1>Send Borrow Requests</base-button1>
    </div>
  </form>
</base-card3>
</template>

<script>
export default {
  
  data() {
    return {
      fullName: '',
      email: '',
      phoneNumber: null,
      date: new Date().toISOString().substr(0, 10),
      formIsValid: true,
      
    };
  },
  
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.fullName === '' ||
        this.email === '' || 
        !this.email.includes('@') ||
        this.phoneNumber === '' || 
        this.date === ''
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch('requests/contactCoach', {
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        date: this.date,
        coachId: this.$route.params.id
      });
      this.$router.replace('/books');

    },
  },

};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 50px;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>