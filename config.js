document.addEventListener("DOMContentLoaded", ()=>{

    const att_storage = num => {
        localStorage.user = String(num)
        chrome.storage.sync.set({ user: String(num) })
    }

    let user 
    if(!localStorage.user){
        localStorage.user="0"
    }
    user = localStorage.user
    console.log(user)
    att_storage(user)

    const users = document.getElementsByName("user")
    console.log(users);
    users[Number(user)].checked = true

    for(let u of users){
        u.onclick = event => {
            user = event.target.value
            console.log(user)
            att_storage(user)
        }
    }
})