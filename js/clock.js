const clock = document.querySelector("#clock");

function timeRefresh () {
    const date = new Date
    const hour = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    
    clock.innerText = `${hour}:${minutes}:${seconds}`
}

timeRefresh()
setInterval(timeRefresh, 1000);