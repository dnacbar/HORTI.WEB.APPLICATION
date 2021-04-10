export const UrlCoreCommand = {
    client: {
        updateClient: 'Client/UpdateClient'
    },
    district: {
        createDistrict: 'District/CreateDistrict',
        updateDistrict: 'District/UpdateDistrict',
        deleteDistrict: 'District/DeleteDistrict',
    }
}

export const UrlCoreQuery = {
    main: {
        get: 'Main'
    },
    city: {
        getCityByIdOrName: 'City/GetCityByIdOrName',
        getListOfCities: 'City/GetListOfCities',
        getFullListOfCities: 'City/GetFullListOfCities'
    }
}

export const UrlUserCommand = {
}

export const UrlUserQuery = {
    userSession: {
        authenticateUserAccess: 'UserAccess/AuthenticateUserAccess',
        logoutUserAccess: 'UserAccess/LogoutUserAccess',
    }
}
