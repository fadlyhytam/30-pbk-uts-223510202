<template>
  <div class="app-container">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <a href="#" @click.prevent="showPosts" class="nav-link"> Post </a>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="showTodos" class="nav-link"> Todos </a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <post-component v-if="postListVisible" />
      <todos-component v-if="todoListVisible" />
    </main>
    <div v-if="welcomeVisible" class="welcome-notification">
      Selamat datang di web Todo dan Post!
    </div>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import TodosComponent from './components/TodosComponent.vue'

export default {
  components: {
    PostComponent,
    TodosComponent
  },
  data() {
    return {
      todoListVisible: false,
      postListVisible: false,
      completedTodosVisible: false,
      welcomeVisible: true
    }
  },
  methods: {
    showTodos() {
      this.todoListVisible = true
      this.postListVisible = false
      this.completedTodosVisible = false
      this.welcomeVisible = false
    },
    showPosts() {
      this.fetchUsers()
      this.postListVisible = true
      this.todoListVisible = false
      this.completedTodosVisible = false
      this.welcomeVisible = false
    },
    toggleCompletedTodosVisibility() {
      this.completedTodosVisible = !this.completedTodosVisible
    },
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data
        })
    }
  }
}
</script>

<style scoped>
/* Include the same styles as in the original app */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
header {
  background-color: #4c7ba9;
  padding: 10px 0;
  color: #f8f9fa;
  text-align: center;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between; /* Mengubah dari center ke space-between */
}
nav ul li {
  margin: 0 15px;
}
nav ul li a {
  color: #f8f9fa;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}
nav ul li a:hover {
  background-color: #007bff;
}
.nav-item {
  flex-grow: 1; /* Menambahkan flex-grow untuk memperluas item */
  text-align: center; /* Menambahkan text-align untuk memusatkan teks */
}
.nav-link {
  display: block; /* Menjadikan link sebagai block untuk mengisi ruang */
}
.btn-tambah {
  background-color: #28a745; /* Hijau */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.btn-hapus {
  background-color: #dc3545; /* Merah */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.btn-hapus-selesai {
  background-color: #ffc107; /* Kuning */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.btn-lihat-selesai {
  background-color: #17a2b8; /* Biru Muda */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.loading-animation {
  text-align: center;
  color: #007bff;
}
.welcome-notification {
  text-align: center;
  font-size: 20px;
  color: #000100; /* Hijau */
  margin-top: 20px;
}
footer {
  background-color: #343a40;
  color: #f8f9fa;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer p {
  margin: 0;
}
</style>
