<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <book-header></book-header>
      <book-filter @change-filter="setFilters">
      </book-filter>
      <base-card1>
          <base-button1 class="mx-5 my-4" @click="loadBooks(true)">Refresh</base-button1>
          <base-button1 class="mx-5 mb-4" link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Publish a Book</base-button1>
          <base-button1 class="mx-5 mb-4" v-if="isLoggedIn && !isBook && !isLoading" link to="/register">Register to Publish a Book</base-button1>
      </base-card1>
    </section>
    <section>
      <div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <div class="container" v-else-if="hasBooks">
          <div class="row">
            <book-item
              v-for="book in filteredBooks"
              :key="book.id"
              :id="book.id"
              :title="book.title"
              :writer="book.writer"
              :publishDate="book.publishDate"
              :description="book.description"
              :price="book.price"
              :image="book.image"
              :genres="book.genres"
            ></book-item>
          </div>
        </div>
        <h3 class="text-center" v-else>No Books found.</h3>
      </div>
    </section>
  </div>
</template>

<script>
import BookItem from '../../components/books/BookItem.vue';
import BookFilter from '../../components/books/BookFilter.vue';
import BookHeader from '../../components/books/BookHeader.vue';

export default {
  components: {
    BookItem,
    BookFilter,
    BookHeader
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        adventure: true,
        comedy: true,
        crime: true,
        fantasy: true,
        horror: true,
        scifi: true,
        war: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isBook() {
      return this.$store.getters['books/isBooks'];
    },
    filteredBooks() {
      const books = this.$store.getters['books/books'];
      return books.filter((book) => {
        if (this.activeFilters.adventure && book.genres.includes('adventure')) {
          return true;
        }
        if (this.activeFilters.comedy && book.genres.includes('comedy')) {
          return true;
        }
        if (this.activeFilters.crime && book.genres.includes('crime')) {
          return true;
        }
        if (this.activeFilters.fantasy && book.genres.includes('fantasy')) {
          return true;
        }
        if (this.activeFilters.horror && book.genres.includes('horror')) {
          return true;
        }
        if (this.activeFilters.scifi && book.genres.includes('scifi')) {
          return true;
        }
        if (this.activeFilters.war && book.genres.includes('war')) {
          return true;
        }
        return false;
      });
    },
    hasBooks() {
      return !this.isLoading && this.$store.getters['books/hasBooks'];
    },
  },
  created() {
    this.loadBooks();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadBooks(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('books/loadBooks', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}


.controls {
  display: flex;
  justify-content: space-between;
}
</style>