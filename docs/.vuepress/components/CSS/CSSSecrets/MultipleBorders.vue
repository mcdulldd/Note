<template>
  <main>
    <p>box-shadow方案</p>
    <div class="boxshadow"></div>
    <p>outline方案</p>
    <div class="outline"></div>
  </main>
</template>

<script>  
  export default {
    name:"MultipleBorders"
  }
</script>

<style lang="stylus" scoped>
  main
    padding: 60px
    background: #b4a078
    p
      text-align: center
      font-size: 20px
      font-weight: bold
      color: #333
    .boxshadow
      width: 70%
      height: 60px
      margin: 0 auto
      margin-bottom: 50px
      background: yellowgreen
      box-shadow: 0 0 0 10px #655,0 0 0 15px deeppink,0 2px 5px 15px rgba(0,0,0,.6)
    .outline
      width: 75%
      height: 100px
      margin: 0 auto
      background: yellowgreen
      border: 10px solid #655
      outline: 2px dashed deeppink
      outline-offset: -20px
</style>
