export const UrlCoreCommandHelper = {
    client: {
        updateClient: 'Client/UpdateClient'
    },
    district: {
        createDistrict: 'District/CreateDistrict',
        updateDistrict: 'District/UpdateDistrict',
        deleteDistrict: 'District/DeleteDistrict',
    }
}

export const UrlCoreQueryHelper = {
    main: {
        get: 'Main'
    },
    city: {
        getCityByIdOrName: 'City/GetCityByIdOrName',
        getListOfCities: 'City/GetListOfCities',
        getFullListOfCities: 'City/GetFullListOfCities'
    }
}

export const UrlUserCommandHelper = {
    user:{
        createUser: 'User/CreateUser'
    }
}

export const UrlUserQueryHelper = {
    userSession: {
        authenticateUserAccess: 'UserAccess/AuthenticateUserAccess',
        logoutUserAccess: 'UserAccess/LogoutUserAccess',
        get: 'UserAccess'
    }
}
