const form = document.querySelector("form");
let TabResultValue = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    for (let i = 1; i < 6; i++) {
        TabResultValue.push(document.querySelector(`input[name="q${1}"]:checked`).value)
        console.log(TabResultValue);
    }
})