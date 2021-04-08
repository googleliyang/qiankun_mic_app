<template>
  <div class="home">
      Login page
      <input type="text" placeholder="请输入用户名">
      <input type="text" placeholder="请输入密码">
      <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  },
  methods: {
    login () {
      console.log('I will login')
      this.$router.push('/')
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
input {
    margin-right: 10px;
}
</style>
