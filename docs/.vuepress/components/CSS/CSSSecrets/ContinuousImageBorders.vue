<template>
  <main>
    <div>图片边框</div>
  </main>
</template>

<script>
  export default {
    name: "ContinuousImageBorders"
  }
</script>

<style lang="stylus" scoped>
  main
    padding: 80px
    background: #b4a078
    div
      padding: 100px
      overflow: hidden
      resize: both
      font: 100%/1.6 Baskerville, Palatino, serif
      border: 1em solid transparent
      background: linear-gradient(white, white) padding-box, url(http://csssecrets.io/images/stone-art.jpg) border-box 0 / cover
</style>
