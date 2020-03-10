<template>
  <main>
    <div class='something-meaningful'>
      <div>两个div元素</div>
    </div>
    <div class='inner-rounding'>一个div元素</div>
  </main>
</template>

<script>
  export default {
    name: "InnerRounding"
  }
</script>

<style lang="stylus" scoped>
  main
    display: flex
    padding: 60px
    background: #b4a078
    flex-wrap: wrap
    justify-content: space-around
    .something-meaningful
      width: 180px 
      height: 140px
      background: #655
      padding: 10px
      div
        height: 120px
        padding: 10px
        background: #b4a078
        border-radius: 8px
    .inner-rounding
      width: 160px
      height: 120px
      margin-top: 10px
      background: #b4a078
      border-radius: 8px
      padding: 10px
      box-shadow: 0 0 0 6px #655
      outline: 10px solid #655
</style>

