<template>
  <main>
    <div class='auto-ellipse'></div>
    <div class='half-ellipse'></div>
    <div class='quarter-ellipse'></div>
  </main>
</template>  
  
<script>
  export default {
    name: "FlexibleEllipses"
  }
</script>

<style lang="stylus" scoped>
  main
    display: flex
    padding: 80px
    flex-wrap: wrap
    background: #b4a078
    justify-content: space-around
    div 
      width: 150px
      height: 100px
      background: #655
      .auto-ellipse 
        border-radius: 50%
      .half-ellipse 
        border-radius: 100% 0 0 100% / 50%
      .quarter-ellipse 
        border-radius: 100% 0 0 0
</style>
