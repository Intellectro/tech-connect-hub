const isPhoneViewHandler = ({commit}, data) => {
    return commit("isPhoneViewController", data);
}

const isThemeStatusHandler = ({commit}, data) => {
    return commit("isThemeStatusController", data);
}

export {isPhoneViewHandler, isThemeStatusHandler};