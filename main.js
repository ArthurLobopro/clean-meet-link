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

let clean
chrome.storage.sync.get("clean", data => {
    console.log(data);
    clean = data.clean === "true" ? true : false
})
clean = clean === undefined ? false : clean
console.log(clean)

setTimeout(() => {
    if(clean){
        clear_link()
    }else{
        auth(user)
    }
}, 500)