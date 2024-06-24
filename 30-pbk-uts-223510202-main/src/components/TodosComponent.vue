<template>
  <div id="todoList" class="todo-container">
    <input type="text" v-model="newTodo" placeholder="Tambahkan To Do baru" class="input-todo" />
    <button @click="addTodo" class="btn-tambah">Tambah</button>
    <ul id="todoItems">
      <li v-for="item in todos" :key="item.id" class="todo-item">
        {{ item.text }}
        <button @click="removeTodo(item.id)" class="btn-hapus">Hapus</button>
        <input type="checkbox" @change="toggleTodo(item.id)" class="checkbox-todo" />
      </li>
    </ul>
    <button @click="toggleCompletedTodosVisibility" class="btn-lihat-selesai">
      {{ completedTodosVisible ? 'Sembunyikan Tugas Selesai' : 'Lihat Tugas Selesai' }}
    </button>
    <div v-if="completedTodosVisible">
      <h3>Tugas Selesai:</h3>
      <ul id="completedTasks">
        <li v-for="item in completedTodos" :key="item.id" class="completed-item">
          {{ item.text }}
          <button @click="removeCompletedTodo(item.id)" class="btn-hapus-selesai">Hapus</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      completedTodos: [],
      newTodo: '',
      completedTodosVisible: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo,
          completed: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    removeCompletedTodo(id) {
      this.completedTodos = this.completedTodos.filter((todo) => todo.id !== id)
    },
    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.completed = !todo.completed
      if (todo.completed) {
        this.completedTodos.push(todo)
        this.removeTodo(id)
      } else {
        this.todos.push(todo)
        this.completedTodos = this.completedTodos.filter((todo) => todo.id !== id)
      }
    },
    toggleCompletedTodosVisibility() {
      this.completedTodosVisible = !this.completedTodosVisible
    }
  }
}
</script>

<style scoped>
.input-todo {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.todo-container {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.todo-item,
.completed-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-tambah,
.btn-hapus,
.btn-hapus-selesai,
.btn-lihat-selesai {
  cursor: pointer;
}
</style>
