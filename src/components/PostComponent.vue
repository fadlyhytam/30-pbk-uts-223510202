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
    <ul id="postItems" v-if="!loading">
      <li v-for="post in posts" :key="post.id" class="post-item">
        {{ post.title }}
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
      loading: false
    }
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data
        })
    },
    fetchPosts() {
      if (this.searchUser) {
        const filteredUsers = this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchUser.toLowerCase())
        )
        if (filteredUsers.length > 0) {
          this.selectedUser = filteredUsers[0].id
        }
      }
      if (this.selectedUser) {
        this.loading = true
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`)
          .then((response) => response.json())
          .then((data) => {
            this.posts = data
            this.loading = false
          })
      }
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style scoped>
/* Retain the same styles from the original component */
.input-search-user,
.user-select {
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
.loading-animation {
  text-align: center;
  color: #007bff;
}
</style>
