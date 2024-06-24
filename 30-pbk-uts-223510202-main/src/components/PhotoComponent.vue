<template>
    <div class="photo-container">
      <h1>Photos in Album {{ albumId }}</h1>
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" @click="showPhoto(photo.url)" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [],
        albumId: this.$route.params.id
      }
    },
    created() {
      this.fetchPhotos()
    },
    methods: {
      fetchPhotos() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`)
          .then(response => response.json())
          .then(data => {
            this.photos = data
          })
      },
      showPhoto(url) {
        window.open(url, '_blank')
      }
    },
    watch: {
      '$route.params.id'(newId) {
        this.albumId = newId
        this.fetchPhotos()
      }
    }
  }
  </script>
  
  <style scoped>
  .photo-container {
    padding: 20px;
  }
  .photo-container img {
    cursor: pointer;
    margin: 10px;
  }
  </style>
  