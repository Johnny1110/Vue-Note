import * as types from './mutation-types'

// Mutation 裡面的方法必須是同步的
const mutations = {
    [types.CHANGE_MSG] (state, newMsg) {
        state.msg = newMsg
    },
};

export default mutations