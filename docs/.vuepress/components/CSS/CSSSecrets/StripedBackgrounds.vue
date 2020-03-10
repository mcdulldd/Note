<template>
  <main>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </main>
</template>
<script>
  export default {
    name: "StripedBackgrounds"
  }
</script>

<style lang="stylus" scoped>
  main
    display: flex
    padding: 80px
    background: #b4a078
    flex-wrap: wrap
    justify-content: space-around
    div
      width: 180px
      height: 140px
      margin: 20px
      color: white
      /* 水平条纹 */
      &:nth-of-type(1)
        background: linear-gradient(#58a 50%, #fb3 50%)
        background-size: 100% 30px
      /* 垂直条纹 */
      &:nth-of-type(2)
        background: linear-gradient(to right, #58a 50%, #fb3 50%)
        background-size: 30px 100%
      /* 斜条纹 */
      &:nth-of-type(3)
        background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0)
        background-size: 42.4px 42.4px
      /* 重复渐变线性图案 */
      &:nth-of-type(4)
        background: repeating-linear-gradient(45deg, #fb3, #58a 30px)
        background-size: 42.4px 42.4px
      /* 60°斜条纹 */
      &:nth-of-type(5)
        background:repeating-linear-gradient(60deg, #fb3, #fb3 15px, #58a 0, #58a 30px)
      /* 同色系条纹 */
      &:nth-of-type(6)
        background: #58a
        background-image: repeating-linear-gradient(30deg, hsla(0,0%,100%,.1),hsla(0,0%,100%,.1) 15px,transparent 0 ,transparent 30px)
</style>
