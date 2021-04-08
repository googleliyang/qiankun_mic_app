import { ActionType } from '@/types/qiankun'

function emptyAction () {
  console.warn('Current execute action is empty!')
  return false
}

class Actions {
    actions:ActionType = {
      onGlobalStateChange: emptyAction,
      setGlobalState: emptyAction
    };

    setActions (actions:ActionType) {
      this.actions = actions
    }

    onGlobalStateChange (...args) {
      return this.actions.onGlobalStateChange(...args)
    }

    setGlobalState (...args) {
      return this.actions.setGlobalState(...args)
    }
}

const actions = new Actions()
export default actions
