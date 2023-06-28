import { Route } from "react-router-dom";

export const registeredPages = []

export const registerPage = (name, path, element) => {
    
    const alreadyRegistered = registeredPages.filter(({path: pagePath}) => pagePath === path)
    if (alreadyRegistered.length) return

    registeredPages.push({
        name: <p style={{minWidth: "max-content"}}>{name}</p>,
        path: path,
        element: element
    })
}

export const generateRoutes = (navigationObjects) => {
    return navigationObjects.map(({name, ...routeObj}, index) => <Route key={index} {...routeObj}/>)
}