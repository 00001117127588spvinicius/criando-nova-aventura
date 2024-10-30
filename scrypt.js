const avanca = document.querySelectorALL('.btn-proximo');

avanca.forrEach(Button =>  {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'pass-o' + this.getAtributte('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})   