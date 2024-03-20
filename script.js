const form = document.querySelector("form");
let TabResultValue = [];
const reponses = ["b", "a", "c", "b", "c"]; // Les réponses attendues pour chaque question (en ordre)
let  finaleResult =[];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i = 1; i < 6; i++) {
        TabResultValue.push(document.querySelector(`input[name="q${i}"]:checked`).value)
        verifTab(TabResultValue)
        TabResultValue = [];

    }
    // La fonction qui verifie si les reponses choisi par le user correspond au vrai reponses

    function verifTab(TabResulat) {
        for (let i = 0; i < 5; i++) {
            if (TabResulat[i] === reponses[i]) {
                finaleResult.push(true)
            }else {
                finaleResult.push(false)
            }
          //  finaleResult = [];
            console.log(finaleResult)
        }
    }
    function filterFunc(finaleResult) {
            const nbFalseResponse = finaleResult.filter(el => el == false).lenght
            // console.log(nbFalseResponse)
    }
})