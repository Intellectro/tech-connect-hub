const isPhoneViewController = (state, data) => {
    return state.isPhoneView = data;
}

const isThemeStatusController = (state, data) => {
    return state.isThemeStatus = data;
}

export {isPhoneViewController, isThemeStatusController};