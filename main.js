const clear_link = () => {
    if(window.location.search !== ""){
        window.location.search = ""
    }
}
const auth = num => {
    if(window.location.search !== `?authuser=${num}`){
        window.location.search = `?authuser=${num}`
    }
}

let user 
chrome.storage.sync.get("user", data => {
    user = data.user
})
user = user === undefined ? "0" : user

setTimeout(() => {
    auth(user)
}, 500)