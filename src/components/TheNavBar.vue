<script setup lang="ts">
import { RouterLink} from 'vue-router'
</script>

<template>
  <nav class="bg-blue-500">
        <RouterLink to="/" class="text-red-500">Page d'accueil</RouterLink>
        <RouterLink to="/skills">Compétences</RouterLink>
        <RouterLink to="/ITprojects">Projets</RouterLink>
        <RouterLink to="/interests">Centres d'intérêt</RouterLink>    
      </nav>
</template>