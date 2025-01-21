const input = document.getElementById("input")
const button = document.querySelector("#button")


button.addEventListener("click", ()=>{
    let value = input.value;
    const img = document.getElementById("img");

    const link = /^(https?:\/\/)?([a-z0-9]+[.])+(com|org|net|edu|gov|in|io|[a-z]{2,})(\/[^\s]*)?$/i;

    if(link.test(value)){
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
    }else{
        
        const msg = value;
        localStorage.setItem('message', msg)
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=google.in`

    }
    
})