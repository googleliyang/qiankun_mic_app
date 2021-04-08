<template>
<main>
    <div id="sub-1"></div>
</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import sideNav from '@/common/components/nav/sideNav.vue'
@Component({
  components: {
    sideNav
  }
})
export default class extends Vue {
  created ():void {
    console.log('render sub app wrap layout #sub-1')
  }
}
</script>
