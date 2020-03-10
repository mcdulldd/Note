<template>
  <main>
    <div>原图</div>
    <div>background-position</div>
    <div>background-origin</div>
    <div>calc()</div>
  </main>
</template>

<script>
  export default {
    name: "FlexibleBackgroundPosition"
  }
</script>

<style lang="stylus" scoped>
  main
    display: flex
    padding: 50px
    background: #b4a078
    flex-wrap: wrap
    justify-content: space-around
    div 
      width: 180px
      height: 140px
      margin: auto
      color: white
      padding: 10px
      font-size: 1.2em
      background: url(http://csssecrets.io/images/code-pirate.svg) no-repeat bottom right #58a
      &:nth-of-type(2)
        background-position: right 20px bottom 10px
      &:nth-of-type(3) 
        background-origin: content-box
      &:nth-of-type(4) 
        background-position: calc(100% - 20px) calc(100% - 10px)   
</style>
