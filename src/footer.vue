<template>
  <footer>
    <h1>{{title}} {{copyright}}</h1>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: '2017',
      title: 'VueJS'
    }
  },
  // created () {
  //   bus.$on('titleChange', (data) => {
  //     this.title = data
  //   })
  // }
}
</script>

<style>
footer{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
