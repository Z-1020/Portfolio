<script setup lang="ts">
import { RouterView} from 'vue-router'
import TheNavBar from './components/TheNavBar.vue';

</script>

<template>
  <header>
    <div>
    <TheNavBar/>
    </div>
  </header>
  <main>

  </main>
  <footer>

  </footer>

  <RouterView />
</template>


