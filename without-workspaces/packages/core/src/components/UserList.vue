<script setup>
import { computed } from 'vue';

const users = computed(() => [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]);
</script>

<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{user.name}}
      </li>
    </ul>
</div>
</template>
