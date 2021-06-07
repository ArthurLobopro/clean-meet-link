document.addEventListener("DOMContentLoaded", ()=>{

    const att_storage_user = num => {
        localStorage.user = String(num)
        chrome.storage.sync.set({ user: String(num) })
    }
    const att_storage_clean = value => {
        localStorage.setItem('clean', value)
        chrome.storage.sync.set({ clean: value})
    }
    
    let user 
    let clean
    if(!localStorage.user){
        localStorage.user="0"
    }
    if(localStorage.clean === undefined){
        localStorage.clean = false
    }
    console.log(localStorage);
    user = localStorage.user
    clean = localStorage.clean == "true" ? true : false
    att_storage_user(user)

    const users = document.getElementsByName("user")
    console.log(users);
    users[Number(user)].checked = true

    const clean_btn = document.getElementById("clean")
    const setButtonsState = value => {
        for(let e of users){
            e.disabled= value
        }
    }
    
    if(clean === true){
        clean_btn.checked = true
        setButtonsState(true)
    }

    clean_btn.onclick = event => {
        clean = !clean
        att_storage_clean(clean)
        setButtonsState(event.target.checked)
    }

    for(let u of users){
        u.onclick = event => {
            user = event.target.value
            console.log(user)
            att_storage_user(user)
        }
    }
})