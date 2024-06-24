<template>
  <div id="postList" class="post-container">
    <input
      type="text"
      v-model="searchUser"
      placeholder="Cari nama user"
      @input="fetchPosts"
      class="input-search-user"
    />
    <select v-model="selectedUser" @change="fetchPosts" class="user-select">
      <option v-for="user in users" :value="user.id" :key="user.id">
        {{ user.name }}
      </option>
    </select>
    <div v-if="loading" class="loading-animation">Loading...</div>
    <ul id="postItems" v-else>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      users: [],
      selectedUser: null,
      searchUser: '',
      loading: false,
    }
  },
  methods: {
    fetchPosts() {
      this.loading = true
      let url = 'https://jsonplaceholder.typicode.com/posts'
      if (this.selectedUser) {
        url += `?userId=${this.selectedUser}`
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
    },
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data
        })
    },
  },
  watch: {
    searchUser(newValue) {
      const user = this.users.find((user) =>
        user.name.toLowerCase().includes(newValue.toLowerCase())
      )
      if (user) {
        this.selectedUser = user.id
        this.fetchPosts()
      }
    },
  },
  created() {
    this.fetchUsers()
    this.fetchPosts()
  },
}
</script>

<style scoped>
.input-search-user {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.post-container {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.post-item {
  margin-bottom: 10px;
}
.user-select {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.loading-animation {
  text-align: center;
  font-size: 18px;
  color: #666;
}
</style>
