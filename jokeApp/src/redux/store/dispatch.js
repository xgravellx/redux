import store from "./index.js";

const dispatch = (action) => {
    return store.dispatch(action);
};

export default dispatch;
