
<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="text-center">所有计划的总时长: {{ time }} 小时</h3>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {
        time() {
          return this.$store.state.totalTime
        }
      }
  }
</script>