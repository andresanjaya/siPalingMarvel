<template>
  <span class="badge me-2 mt-3" :class="type">{{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>

.adventure {
  background-color: #E23E57;
  color: white;
}

.comedy {
  background-color: #FFD460;
  color: white;
}

.crime {
  background-color: #D72323;
  color: white;
}


.fantasy {
  background-color: #00ADB5;
  color: white;
}

.horror {
  background-color: #880808;
  color: white;
}

.scifi {
  background-color: #3d008d;
  color: white;
}

.war {
  background-color: #303841;
  color: white;
}



</style>