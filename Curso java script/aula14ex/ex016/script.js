function contar() {
    var inic = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            // contagem crecente
            for (let a = i; a <= f; a += p) {
                res.innerHTML += ` ${a}   \u{1F603}`
            }
           

        } else {
            // contagem decrecente
            for(let a = i; a >= f; a -= p) {
                res.innerHTML += ` ${a} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F929}`
        
    }
}