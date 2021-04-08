<template>
<main>
     <section class="container">
         <header-nav>  </header-nav>
         <section class="center">
             <div class="nav-content"> <side-nav /> </div>
             <div class="main-content">
                 <!-- mount sub application dom -->
                 <router-view></router-view>
             </div>
         </section>
     </section>

</main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import sideNav from '@/common/components/nav/sideNav.vue'
import headerNav from '@/common/components/nav/header.vue'
@Component({
  components: {
    sideNav,
    headerNav
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>

main {

    .center {
        display: flex;
        background: lightblue;
        .main-content {
            padding: 11px 31px 0;
            flex: 1;
        }
    }

}

</style>
