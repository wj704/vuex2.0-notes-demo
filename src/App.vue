<!-- // src/App.vue -->

<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          备忘录
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">

      <div class="col-sm-9">
        <router-view></router-view>
      </div>
       <div class="col-sm-3">
         <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
  }
</script>
<style>
.router-link-active {
  color: red;
}
body {
  margin: 0px;
}
.navbar {
  height: 60px;
  line-height: 60px;
  background: #333;

}
.navbar a {
  text-decoration: none;
}
.navbar-brand {
  display: inline-block;
  margin-right: 20px;
  width: 100px;
  text-align: center;
  font-size: 28px;
  text-shadow: 0px 0px 0px #000;
  color: #fff;
  padding-left: 30px;
}
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    /* margin-bottom: 10px; */
  }

  .text-center {
    margin-top: 0px;
    /* margin-bottom: 25px; */
  }

  .time-block {
    /* padding: 10px; */
    margin-top: 25px;
  }
  .comment-section {
    /* padding: 20px; */
    /* padding-bottom: 15px; */
  }

  .col-sm-9 {
    float: right;
    /* margin-right: 60px; */
    width: 700px;
    min-height: 200px;
    background: #ffcccc;
    padding: 60px;
  }
  .create-plan {
    font-size: 26px;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    width: 100px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background: #99cc99;
  }
  .col-sm-6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .col-sm-12 {
    margin-bottom: 10px;
  }
  .btn-primary {
    width: 80px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #99cc99;
    border-radius: 4px;
    border: none;
    color: #fff;
    float: left;
    margin-right: 10px;
    font-size: 14px;
  }
  .btn-danger {
    display: inline-block;
    font-size: 14px;
    width: 80px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: red;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    margin-bottom: 6px;
  }
  .row {
    padding-bottom: 20px;
    border-bottom: 1px solid #333;
    position: relative;
    background: #f5f5f5;
    padding: 10px;
    /* padding-bottom: 0px; */
  }
  .delete-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .panel-default {
    position: absolute;
    top: 140px;
    right: 60px;
  }
</style>