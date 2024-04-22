<template>
  <div id="app">
    <h1>Manajemen Kegiatan</h1>

    <!-- Form untuk menambahkan kegiatan baru -->
    <input type="text" v-model="newActivity" placeholder="Tambahkan kegiatan baru" />
    <button @click="addActivity">Tambah</button>

    <!-- Daftar kegiatan -->
    <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index">
        <span :class="{ completed: activity.completed }" @click="toggleCompletion(index)">{{
          activity.name
        }}</span>
        <button @click="toggleCompletion(index)">
          {{ activity.completed ? 'Batal Checklist' : 'Checklist' }}
        </button>
        <button @click="cancelActivity(index)">Batalkan</button>
      </li>
    </ul>

    <!-- Checkbox untuk memfilter kegiatan yang belum selesai -->
    <input type="checkbox" v-model="showIncomplete" /> Tampilkan Kegiatan Belum Selesai
  </div>
</template>

<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [],
      showIncomplete: false
    }
  },
  computed: {
    filteredActivities() {
      if (this.showIncomplete) {
        return this.activities.filter((activity) => !activity.completed)
      } else {
        return this.activities
      }
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ name: this.newActivity, completed: false })
        this.newActivity = ''
      }
    },
    toggleCompletion(index) {
      this.activities[index].completed = !this.activities[index].completed
    },
    cancelActivity(index) {
      this.activities.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
