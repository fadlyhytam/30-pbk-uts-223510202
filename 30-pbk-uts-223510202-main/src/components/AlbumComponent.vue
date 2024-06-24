<template>
    <div class="album-container">
      <h1>Albums</h1>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        albums: []
      }
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
          this.albums = data
        })
    }
  }
  </script>
  
  <style scoped>
  .album-container {
    padding: 20px;
  }
  </style>
  