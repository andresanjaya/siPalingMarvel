<template>
  <div class="col-md-4 mb-3">
            <div class="card">
                <img :src="image" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <small>
                       <p>{{ writer }}</p>
                    </small>
                    <p class="card-text"><small class="text-muted">{{ publishDate }}</small></p>
                    <p class="card-text">{{ description }}</p>
                    <b><p class="card-text">${{ price }}/month</p></b>
                    <base-badge2 v-for="genre in genres" :key="genre" :type="genre" :title="genre"></base-badge2>
                </div>
            <div class="card-footer bg-transparent border-success">
                <base-button2 mode="outline" link :to="borrowBookLink">Borrow</base-button2>
                <base-button1 link :to="bookDetailsLink">View Details</base-button1>
            </div>
            </div>
    </div>
</template>

<script>

export default {
  props: ['id', 'title', 'writer', 'publishDate', 'description',  'price', 'image' , 'genres'],
  computed: {
    borrowBookLink() {
      return this.$route.path + '/' + this.id + '/borrow'; // /books/c1/borrow
    },
    bookDetailsLink() {
      return this.$route.path + '/' + this.id; // /books/c1
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.card {
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>