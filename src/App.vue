<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-3">
        <div class="brand-logo">CIS</div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background: #E3f2fD;
  margin: 0;
}
</style>
