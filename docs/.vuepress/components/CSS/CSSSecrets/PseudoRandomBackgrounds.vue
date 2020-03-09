<template>
  <main>
    <div></div>
  </main>
</template>



<script>
export default {
  name:"PseudoRandomBackgrounds"
}
</script>

<style lang="stylus" scoped>
  main
    padding: 80px
    background: #b4a078
    div
      width: 100%
      height: 200px
      background: hsl(20, 40%, 90%)
      background-image: 
            linear-gradient(90deg, #fb3 11px, transparent 0),
            linear-gradient(90deg, #ab4 23px, transparent 0),
            linear-gradient(90deg, #655 23px, transparent 0)
      background-size: 83px 100%, 61px 100%, 41px 100%
</style>
