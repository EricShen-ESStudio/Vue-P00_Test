<template>
  <div id="firstcomponent">
    <h3>I am a title.</h3>
    <span style="color: darkorange;font-weight: bold;"> written by {{ author }} </span>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      author: "EricShen @ 2017年4月11日16:54:43"
    }
  }
}
</script>

<style>
</style>