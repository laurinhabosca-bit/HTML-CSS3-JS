function verificarIdade() {
    const idade = document.querySelector("#idade").value
    const img = document.querySelector("#imgPlace");

    const idadeNum = Number(idade) // agora garantimos que é tipo número
    
    if (idadeNum < 0) {
        alert("Erro. Tente outra idade.")

    }else if (idadeNum <= 5) {
        img.src = "bebe.jpg"
        img.alt = "Uma foto de um bebê"
    } else if(idadeNum > 5 && idadeNum < 7) {
        img.src = "crianca.jpg"
        img.alt = "Uma foto de uma criança"
    } else if(idadeNum > 8 && idadeNum < 13) {
        img.src = "pré-adolescente.jpg"
        img.alt = "Uma foto de um pré-adolescente"
    } else if(idadeNum > 14 && idadeNum < 17) {
        img.src = "adolescente.jpg"
        img.alt = "Uma foto de um adolescente"
    } else if(idadeNum > 18 && idadeNum < 22) {
        img.src = "jovem.jpg"
        img.alt = "Uma foto de um jovem"
    } else if(idadeNum > 23 && idadeNum < 27) {
        img.src = "jovem-adulto.jpg"
        img.alt = "Uma foto de um jovem-adulto"
    } else if(idadeNum > 28 && idadeNum < 40) {
        img.src = "adulto.jpg"
        img.alt = "Uma foto de um adulto"
    } else if(idadeNum > 41 && idadeNum < 60) {
        img.src = "meia-idade.jpg"
        img.alt = "Uma foto de uma pessoa de meia-idade"
    } else if(idadeNum > 61 && idadeNum < 100) {
        img.src = "idoso.jpg"
        img.alt = "Uma foto de um idoso"
    } else if(idadeNum > 100) {
        img.src = "morto.jpg"
        img.alt = "Uma foto de uma pessoa que virou camiseta de saudade"
    }
    
}