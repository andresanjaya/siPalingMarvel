<template>
  <base-card1>
  <div class="card-body text-center">
    <h2 class="card-title fs-4">Find Your Books</h2>

    <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="adventure" checked @change="setFilter" />
          <label for="adventure">Adventure</label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="comedy" checked @change="setFilter" />
      <label for="comedy">Comedy</label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="crime" checked @change="setFilter" />
      <label for="crime">Crime</label>
    </div>

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="fantasy" checked @change="setFilter" />
        <label for="fantasy">Fantasy</label>
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="horror" checked @change="setFilter" />
      <label for="horror">Horror</label>
    </div> 

    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="scifi" checked @change="setFilter" />
      <label for="scifi">Sci-Fi</label>
    </div>
      
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="war" checked @change="setFilter" />
      <label for="war">War</label>
    </div>

  </div>
  </base-card1>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        adventure: true,
        comedy: true,
        crime: true,
        fantasy: true,
        horror: true,
        scifi: true,
        war: true,
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>