<template>
  <section>
    <base-card>
      <h2>Publish a book right now!</h2>
      <book-form @save-data="saveData"></book-form>
    </base-card>
  </section>
</template>

<script>
import BookForm from '../../components/books/BookForm.vue';

export default {
  components: {
    BookForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('books/registerBook', data);
      this.$router.replace('/books');
    }
  }
};
</script>