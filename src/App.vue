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
      <div v-if="todoListVisible" id="todoList" class="todo-container">
        <input
          type="text"
          v-model="newTodo"
          placeholder="Tambahkan To Do baru"
          class="input-todo"
        />
        <button @click="addTodo" class="btn-tambah">Tambah</button>
        <ul id="todoItems">
          <li v-for="item in todos" :key="item.id" class="todo-item">
            {{ item.text }}
            <button @click="removeTodo(item.id)" class="btn-hapus">
              Hapus
            </button>
            <input
              type="checkbox"
              @change="toggleTodo(item.id)"
              class="checkbox-todo"
            />
          </li>
        </ul>
        <button
          @click="toggleCompletedTodosVisibility"
          class="btn-lihat-selesai"
        >
          {{
            completedTodosVisible
              ? "Sembunyikan Tugas Selesai"
              : "Lihat Tugas Selesai"
          }}
        </button>
        <div v-if="completedTodosVisible">
          <h3>Tugas Selesai:</h3>
          <ul id="completedTasks">
            <li
              v-for="item in completedTodos"
              :key="item.id"
              class="completed-item"
            >
              {{ item.text }}
              <button
                @click="removeCompletedTodo(item.id)"
                class="btn-hapus-selesai"
              >
                Hapus
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="postListVisible" id="postList" class="post-container">
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
    </main>
    <div v-if="welcomeVisible" class="welcome-notification">
      Selamat datang di web Todo dan Post!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      completedTodos: [],
      newTodo: "",
      posts: [],
      users: [],
      selectedUser: null,
      searchUser: "",
      todoListVisible: false,
      postListVisible: false,
      completedTodosVisible: false,
      loading: false,
      welcomeVisible: true,
    };
  },
  methods: {
    showTodos() {
      this.todoListVisible = true;
      this.postListVisible = false;
      this.completedTodosVisible = false;
      this.welcomeVisible = false;
    },
    showPosts() {
      this.fetchUsers();
      this.postListVisible = true;
      this.todoListVisible = false;
      this.completedTodosVisible = false;
      this.welcomeVisible = false;
    },
    toggleCompletedTodosVisibility() {
      this.completedTodosVisible = !this.completedTodosVisible;
    },
    fetchUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        });
    },
    fetchPosts() {
      if (this.searchUser) {
        const filteredUsers = this.users.filter((user) =>
          user.name.toLowerCase().includes(this.searchUser.toLowerCase())
        );
        if (filteredUsers.length > 0) {
          this.selectedUser = filteredUsers[0].id;
        }
      }
      if (this.selectedUser) {
        this.loading = true;
        fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`
        )
          .then((response) => response.json())
          .then((data) => {
            this.posts = data;
            this.loading = false;
          });
      }
    },
    addTodo() {
      if (this.newTodo) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          completed: false,
        });
        this.newTodo = "";
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    removeCompletedTodo(id) {
      this.completedTodos = this.completedTodos.filter(
        (todo) => todo.id !== id
      );
    },
    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
      if (todo.completed) {
        this.completedTodos.push(todo);
        this.removeTodo(id);
      } else {
        this.todos.push(todo);
        this.completedTodos = this.completedTodos.filter(
          (todo) => todo.id !== id
        );
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
