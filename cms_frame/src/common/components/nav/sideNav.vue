<template>
  <main id="side">
    <nav>
      <section class="parent-panel">
        <ul>
          <li class="active">
            <i class="el-icon-s-home"></i>
            首页
          </li>
          <li>
            <i class="el-icon-menu"></i>
            应用
          </li>
          <li>
            <i class="el-icon-user-solid"></i>
            用户
          </li>
          <li>
            <i class="el-icon-s-custom"></i>
            审批
          </li>
          <li>
            <i class="el-icon-s-help"></i>
            运营
          </li>
          <li>
            <i class="el-icon-s-operation"></i>
            界面
          </li>
          <li>
            <i class="el-icon-s-order"></i>
            内容
          </li>
          <li>
            <i class="el-icon-s-data"></i>
            统计
          </li>
          <li>
            <i class="el-icon-s-claim"></i>
            对账
          </li>
          <li>
            <i class="el-icon-s-tools"></i>
            设置
          </li>
          <li>
            <i class="el-icon-help"></i>
            成员
          </li>
        </ul>
      </section>
      <section class="child-panel">
        <ul>
          <li>系统首页</li>
          <li class="active">系统首页</li>
          <li>登录日志</li>
          <li>系统首页</li>
        </ul>
      </section>
    </nav>
  </main>
</template>

<script lang="ts">
import actions from '@/shared/action'
import { Component, Vue } from 'vue-property-decorator'
import { loadMicroApp } from 'qiankun'
import Api from '@/common/http/index'

@Component
export default class extends Vue {
  private appUrl = '//localhost:9002';
  private authorization = null;

  mounted (): void {
    actions.onGlobalStateChange((state, prevState) => {
      console.log('Before updated Authorization val: ', prevState.Authorization)
      console.log('Main-app get updated Authorization:', state.Authorization)
      this.authorization = state.Authorization
      if (!this.authorization) {
        const redirectUrl = window.location.pathname
        this.$router.push('/')
        alert('登录过期, 请重新登录, 一秒后重新跳转' + redirectUrl)
        setTimeout(() => {
          this.$router.push(`/${redirectUrl}`)
        }, 1000)
      }
    })
    this.testHttp()
  }

  testHttp (): void {
    Api.get('mohurd/apt').then((res) => {
      console.warn(res)
    })
  }

  updateState (): void {
    actions.setGlobalState({ Authorization: Math.random() })
  }

  private loadSubApp (): void {
    if (!this.appUrl) {
      alert('input should not be null')
    }
    loadMicroApp({
      name: 'app1',
      entry: this.appUrl,
      container: '#sub-1',
      props: { brand: 'qiankun' }
    })
  }
}
</script>

<style lang="scss" scoped>
main {
  nav {
    display: flex;
    .parent-panel,
    .child-panel {
      min-height: 95vh;
    }
    .parent-panel {
      min-width: 120px;
      background: #eef4fd;
      ul {
        li {
          font-size: 14px;
          color: #525f7b;
          height: 50px;
          line-height: 50px;
          &.active,
          &:hover {
            background: rgba(38, 179, 164, 0.33);
            color: #20be9c;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .child-panel {
      background: #fff;
      min-width: 200px;
      ul {
        li {
          height: 44px;
          line-height: 44px;
          font-size: 14px;
          text-align: left;
          padding-left: 15px;
          &::before {
            display: inline-block;
            height: 4px;
            width: 4px;
            border-radius: 2px;
            background: #525f7b;
            content: "";
            margin-right: 8px;
            vertical-align: middle;
          }
          &.active,
          &:hover {
            background: linear-gradient(
              270deg,
              rgba(66, 195, 167, 0) 0%,
              rgba(66, 195, 167, 0.3) 100%
            );
            border-right: 5px solid #20be9c;
            &::before {
              background: #20be9c;
            }
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
