<script setup lang="ts">
import { computed } from 'vue';

const res = await useFetch('https://jsonplaceholder.typicode.com/users');

const users = computed(() => res.data.value);
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
