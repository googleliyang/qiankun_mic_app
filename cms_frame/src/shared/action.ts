// micro-app-main/src/shared/actions.ts
import { initGlobalState, MicroAppStateActions } from 'qiankun'

const initialState = {
  Authorization: ''
}
const actions: MicroAppStateActions = initGlobalState(initialState)

export default actions
