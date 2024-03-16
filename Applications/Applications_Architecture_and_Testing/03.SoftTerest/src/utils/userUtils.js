
function getUser(){
    return JSON.parse(sessionStorage.getItem("userData"))
}

function hasUser(){
    return !!getUser()
}

function setUser(data) {
    sessionStorage.setItem('userData',JSON.stringify(data))
}

function removeUser(){
    sessionStorage.removeItem('userData')
}

function hasOwner(id){
    return getUser()._id === id
}

export{
    getUser,
    hasUser,
    removeUser,
    setUser,
    hasOwner,
}