<template>
<base-card3 class="mt-5">

  <div class="text-center mt-4">
    <h4>Publish a Book Right Now!</h4>
  </div>
  <form @submit.prevent="submitForm">
    <div class="mb-3" :class="{invalid: !title.isValid}">
      <label class="form-label" for="title">Title</label>
      <input
        class="form-control"
        type="text"
        id="title"
        v-model.trim="title.val"
        @blur="clearValidity('title')"
        required
      />
      <p v-if="!title.isValid">title must not be empty.</p>
    </div>
    <div class="mb-3" :class="{invalid: !writer.isValid}">
      <label class="form-label" for="writer">Writer</label>
      <input
        class="form-control"
        type="text"
        id="writer"
        v-model.trim="writer.val"
        @blur="clearValidity('writer')"
        required
      />
      <p v-if="!writer.isValid">writer must not be empty.</p>
    </div>
    <div class="mb-3" :class="{invalid: !publishDate.isValid}">
      <label class="form-label" for="publishDate">Published Date</label>
      <input
        class="form-control"
        type="date"
        id="publishDate"
        v-model.trim="publishDate.val"
        @blur="clearValidity('publishDate')"
        required
      />
      <p v-if="!publishDate.isValid">publishDate must not be empty.</p>
    </div>
    <div class="mb-3" :class="{invalid: !image.isValid}">
      <label class="form-label" for="image">Image</label>
      <input
        class="form-control"
        type="text"
        id="image"
        v-model.trim="image.val"
        @blur="clearValidity('image')"
        required
      />
      <p v-if="!image.isValid">image must not be empty.</p>
    </div>
    
    <div class="mb-3" :class="{invalid: !description.isValid}">
      <label class="form-label" for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
        required
      ></textarea>
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="mb-3" :class="{invalid: !price.isValid}">
      <label class="form-label" for="price">Price of book</label>
      <input type="number" id="price" v-model.number="price.val" @blur="clearValidity('price')" />
      <p v-if="!price.isValid">price must be greater than 0.</p>
    </div>
    <div class="mb-3" :class="{invalid: !genres.isValid}">
      <label class="form-label" >Genres of book</label>
      <div>
        <input
          type="checkbox"
          id="adventure"
          value="adventure"
          v-model="genres.val"
          @blur="clearValidity('genres')"
          
        />
        <label class="form-label" for="adventure">Adventure</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="comedy"
          value="comedy"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="comedy">Comedy</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="crime"
          value="crime"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="crime">Crime</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="fantasy"
          value="fantasy"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="fantasy">Fantasy</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="horror"
          value="horror"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="horror">Horror</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="scifi"
          value="scifi"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="scifi">Sci-Fi</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="war"
          value="war"
          v-model="genres.val"
          @blur="clearValidity('genres')"
        />
        <label class="form-label" for="war">War</label>
      </div>
      <p v-if="!genres.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <base-button1>Register</base-button1>
  </form>
</base-card3>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      writer: {
        val: '',
        isValid: true,
      },
      publishDate: {
        val: '',
        isValid: true,
      },
      image: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      price: {
        val: null,
        isValid: true,
      },
      genres: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.title.val === '') {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.writer.val === '') {
        this.writer.isValid = false;
        this.formIsValid = false;
      }
      if (this.publishDate.val === '') {
        this.publishDate.isValid = false;
        this.formIsValid = false;
      }
      if (this.image.val === '') {
        this.image.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.price.val || this.price.val < 0) {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (this.genres.val.length === 0) {
        this.genres.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        title: this.title.val,
        writer: this.writer.val,
        publishDate: this.publishDate.val,
        image: this.image.val,
        description: this.description.val,
        price: this.price.val,
        genres: this.genres.val,
      };

      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
  margin-bottom: 50px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>