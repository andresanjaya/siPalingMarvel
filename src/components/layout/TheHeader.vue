<template>
  <nav class="navbar navbar-light fixed-top p-2" style="background-color: #3d008d;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">SiPalingMarvel</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel" style="background-color: #3d008d;">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">SiPalingMarvel</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 pb-3">
            <li class="nav-item">
              <router-link class="nav-link" to="/books">All Books</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" to="/requests">Requests</router-link>
            </li>
            <li class="nav-item" v-else>
              <router-link class="nav-link" to="/auth">Login</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <base-button4 @click="logout">Logout</base-button4>
            </li>
          </ul>
          <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/books');
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  font-family: "Roboto", sans-serif !important;
}

a {
  color: #9ba1ab !important;
}

a:active,
a:hover,
a.router-link-active {
  color: white !important;
}
.navbar-brand,
.offcanvas-title {
  font-family: "Roboto", sans-serif !important;
  color: white !important;
}


</style>