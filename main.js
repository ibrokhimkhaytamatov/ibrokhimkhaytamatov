
let newUsers = []

let paganetion = {
    page:1,
    per_page:3
}

function addNewItem() {
    let titleInput = document.querySelector("#titleInput").value
    let statusInput = document.querySelector("#selectStatus").value
    let dateInput = document.querySelector("#dateInput").value

    let newItemObj = {
        title: titleInput,
        time: dateInput,
        status: statusInput
    }

    newUsers.push(newItemObj)

    counterAllBtn(newUsers)
    forPaganetion(newUsers,paganetion)
    
    render(newUsers)

    document.querySelector("#titleInput").value = ""
    document.querySelector("#selectStatus").value = ""
    document.querySelector("#dateInput").value = ""

}




function render(data) {
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    let counter = 1
    data.map((user) => {
        let tr = document.createElement("tr")

        let tdId = document.createElement("td")
        tdId.innerText = counter
        counter++

        let tdTitle = document.createElement("td")
        tdTitle.innerText = user.title

        let tdStatus = document.createElement("td")
        tdStatus.innerText = user.time

        let tdDate = document.createElement("td")
        tdDate.innerText = user.status


        tr.append(tdId, tdTitle, tdStatus, tdDate)

        tbody.append(tr)

    })
}


function allStatus() {
render(newUsers)
}

function counterAllBtn(arr) {
    let allCounter = document.querySelector("#allCounter")
    
    allCounter.innerHTML = arr.length

    let allDraft = document.querySelector("#allDraft")
    let newDraft = arr.filter((item) => {
        return item.status.includes("Draft")
    })
    allDraft.innerHTML = newDraft.length

    let publishedBtn = document.querySelector("#publishedBtn")
    let newPublished = arr.filter((item)=>{
        return item.status.includes("Published")
    })
    publishedBtn.innerHTML = newPublished.length
}




function chooseDraftItem() {
    let draftBtn = document.querySelector("#draftBtn")
    draftBtn.style.backgroundColor = "#0d6efd"
    draftBtn.style.color = "white"
    let newDraft = []
    newUsers.map(users => {
        if (users.status == "Draft") {
            newDraft.push(users)
        }
    })
render(newDraft)
    
}



function choosePublished() {
    let newPublished = []
    newUsers.map(users => {
        if (users.status == "Published") {
            newPublished.push(users)
        }
    })
    render(newPublished)
}



function searchNewTitle() {
    let newSearchItem = []
    newUsers.map((user) => {
        let search = document.querySelector("#search").value
        if (user.title.toLowerCase().includes(search.toLowerCase())) {
            newSearchItem.push(user)
        }
    })
    render(newSearchItem)
}





// block btn


function addNewPost() {
    let creat_new_post = document.querySelector(".creat_new_post").style.display = "block";

}

// none btn

function closeBtn() {
    let creat_new_post = document.querySelector(".creat_new_post").style.display = "none"

}





// paganetion



function forPaganetion(arr,count) {
    let ul = document.querySelector(".pagination")
    ul.innerHTML = ""
    for (let i = 1; i <= newUsers.length/paganetion.per_page; i++) {

        let li = document.createElement("li")
        li.classList.add("page-item")
        if (i == paganetion.page) {
            li.classList.add("active")
        }
        li.setAttribute("aria-current","page")

        let span = document.createElement("span")
        span.classList.add("page-link")
        span.innerText = i

        li.append(span)

        ul.append(li)
    }

}


