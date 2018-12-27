<template>
    <div>
      <FootGuide></FootGuide>
      <router-view></router-view>
    </div>
</template>
<script>
  import FootGuide from "./components/FootGuide"
    export default {
        name: "",
        components:{
          FootGuide
        }
    }
</script>

<style lang="stylus" ref="stylesheet/stylus">

</style>
