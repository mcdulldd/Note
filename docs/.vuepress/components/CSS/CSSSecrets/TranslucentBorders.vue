<template>
  <main>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
  </main>
</template>

<script>
  export default {
    name: "TranslucentBorders"
  }
</script>

<style lang="stylus" scoped>
  main
    height: 110px
    padding: 50px
    background: #b4a078
    div 
      width: 75%
      padding: 12px
      margin: 20px auto
      background: white
      border: 15px solid hsla(0, 0%, 100%, .5)
      background-clip: padding-box
</style>
