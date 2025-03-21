const routesDataHandler = (state) => {
    return state.routesData;
}

const handleCoreData = (state) => {
    return state.coreContents;
}

const currentViewStatus = (state) => {
    return state.isPhoneView;
}

const currentThemeStatus = (state) => {
    return state.isThemeStatus;
}

const featuresData = (state) => {
    return state.features;
} 

const faqContentsHandler = (state) => {
    return state.faqContents
}

export {routesDataHandler, handleCoreData, currentViewStatus, currentThemeStatus, featuresData, faqContentsHandler};