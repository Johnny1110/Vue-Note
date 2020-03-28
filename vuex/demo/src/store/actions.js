import * as types from './mutation-types'


const changeMsg = (context, newMsg) => {
    console.log(newMsg);
    context.commit(types.CHANGE_MSG, newMsg)
};

const actions = {
    changeMsg,
};

export default actions