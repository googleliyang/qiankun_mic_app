<template>
  <main>
      <nav class="header">
          <div class="logo"></div>
          <div class="title">
             管理后台
          </div>
      </nav>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>

main {
    min-height: 5vh;
    background: linear-gradient(270deg, #42C3A7 0%, #25B2A3 100%);
    color: #fff;
    nav {
        display: flex;
        height: 5vh;
        line-height: 5vh;
        padding-left: 30px;
        .title {
            flex: 1;
            font-weight: 500;
            font-size: 24px;
            text-align: left;
        }
    }
}

</style>
