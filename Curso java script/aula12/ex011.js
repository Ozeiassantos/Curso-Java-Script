var idade = 68

console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não votar')
    

} else if (idade < 18 || idade > 65) {
        console.log('Voto Opcional')

} else if (idade > 18 && idade < 60) {
    console.log('Voto Obrigatóriio')
}