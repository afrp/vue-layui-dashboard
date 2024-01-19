<template>    
  <lay-config-provider locale="en_US">
    <Layout>
      <!-- <lay-layout class="example">
        <lay-header>
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </lay-header> -->
          <!-- <lay-body> -->
            <router-view/>
          <!-- </lay-body> -->
        <!-- <lay-footer>footer</lay-footer>
      </lay-layout>     -->
    </Layout>
  </lay-config-provider>
</template>
<script>
// @ is an alias to /src
import Layout from './components/Layout.vue'

export default {  
  components: {
    Layout
  }
}
</script>
<style lang="scss">
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #101828;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.example .layui-footer,
.example .layui-header {
  line-height: 60px;
  text-align: center;
  background: #87ca9a;
  color: white;
}
.example .layui-body {
  display: flex;
  background: #ffffff;
  align-items: center;
  justify-content: center;
  color: #000000;
  overflow-x: hidden ;
}
.example .layui-col.layui-col-space10 > *{
  padding: 0 !important;
}
</style>
