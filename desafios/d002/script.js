function verificarIdade() {
    const idade = document.querySelector("#idade").value
    const img = document.querySelector("#imgPlace");

    const idadeNum = Number(idade) // agora garantimos que é tipo número

    if (idadeNum <= 5) {
        img.src = "baby.jpg"
        img.alt = "Uma foto de um bebê"
    } else if(idadeNum > 5 && idadeNum < 13) {
        img.src = "crianca.jpg"
        img.alt = "Uma foto de uma criança"
    }
}