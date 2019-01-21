const isSupportLocalStorage = () => {
    try {
        return 'localStorage' in window && window.localStorage !== null
    } catch (e) {
        return false
    }
}

export const setItemToStorage = (name: string, value: any) => {
    const data = JSON.stringify(value)

    if (isSupportLocalStorage()) localStorage.setItem(name, data)
    else document.cookie = `${name}=${data}`
}

export const getItemFromStorage = (name: string) => {
    let result = null

    if (isSupportLocalStorage() && localStorage.hasOwnProperty(name) && localStorage[name]) result = localStorage[name]
    else {
        const cookie = document.cookie.split(';')
        cookie.forEach(c => {
            const cookieParams = c.split('=')
            if (cookieParams[0] === name) result = cookieParams[1]
        })
    }

    return JSON.parse(result)
}
