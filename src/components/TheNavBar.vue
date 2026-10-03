<script setup lang="ts">
import { RouterLink} from 'vue-router'
</script>

<template>
  <nav class="text-blue-900 p-2">
        <RouterLink to="/" class="p-4 hover:bg-sand active:bg-amber-50 active:text-blue-500 rounded-lg">Page d'accueil</RouterLink>
        <RouterLink to="/skills" class="p-4 hover:bg-sand active:bg-amber-50 active:text-blue-500 rounded-lg">Compétences</RouterLink>
        <RouterLink to="/it-projects" class="p-4 hover:bg-sand active:bg-amber-50 active:text-blue-500 rounded-lg">Projets</RouterLink>
        <RouterLink to="/interests" class="p-4 hover:bg-sand active:bg-amber-50 active:text-blue-500 rounded-lg">Centres d'intérêt</RouterLink>    
      </nav>
</template>