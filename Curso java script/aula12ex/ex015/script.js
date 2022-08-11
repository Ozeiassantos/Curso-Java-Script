function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }

        } else if (fsex[1].checked) {
            gerero = 'mulher'

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultamulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
            
        }
        res.style.Align = 'center'
        res.innerHTML = `Detectamos <strong>${gerero}</strong> com ${idade} anos.`
        res.appendChild(img)
        
    }
    
}