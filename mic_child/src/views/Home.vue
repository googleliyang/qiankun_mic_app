<template>
  <div class="home">
    <HelloWorld msg="This is a dev-serve sub-app"/>
     <button @click="notifyParent">Notify parent </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import action from '@/shared/action'

@Component({
  components: {
    HelloWorld
  },
  data () {
    return {

    }
  },
  methods: {
    notifyParent () {
      action.setGlobalState({
        Authorization: undefined
      })
    }
  }
})
export default class Home extends Vue {}
</script>
