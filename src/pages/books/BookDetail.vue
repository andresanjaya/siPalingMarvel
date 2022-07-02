<template>
  <div>
    <div class="container">
      <div class="row row justify-content-center">
        <div class="col-md-4 mb-3">
          <base-card2>
            <img :src="image" class="card-img-top">
            <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text mt-3"><b>Writer:</b> {{ writer }}</p>
                    <p class="card-text mt-1"><b>Published:</b> {{ publishDate }}</p>
                    <p class="card-text mt-1"><b>Price:</b> ${{ price }}/month</p>
                    <base-badge1 v-for="genre in genres" :key="genre" :type="genre" :title="genre"></base-badge1>
            </div>
          </base-card2>
        </div>
      </div>
    </div>

    <section>
        <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedBook: null,
    };
  },
  computed: {
    title() {
      return this.selectedBook.title;
    },
    publishDate() {
      return this.selectedBook.publishDate;
    },
    writer() {
      return this.selectedBook.writer;
    },
    image() {
      return this.selectedBook.image;
    },
    genres() {
      return this.selectedBook.genres;
    },
    price() {
      return this.selectedBook.price;
    },
    description() {
      return this.selectedBook.description;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedBook = this.$store.getters['books/books'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>