<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div>

      <nav>
        <RouterLink to="/">Page d'accueil</RouterLink>
        <RouterLink to="/skills">Compétences</RouterLink>
        <RouterLink to="/ITprojects">Projets</RouterLink>
        <RouterLink to="/interests">Centres d'intérêt</RouterLink>
        
      </nav>
    </div>
  </header>
  <main>

  </main>
  <footer>

  </footer>

  <RouterView />
</template>


