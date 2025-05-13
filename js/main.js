/* Seleciona os elementos com a classe "duvida" */

document.addEventListener('DOMContentLoaded', function() {
    
    const duvidas = document.querySelectorAll('.duvida');
    
    duvidas.forEach(duvida => {
        const seta = duvida.querySelector('img');
        const resposta = duvida.querySelector('p');
        
        resposta.style.display = 'none';
        
        seta.addEventListener('click', function() {
            
            duvidas.forEach(otherDuvida => {
                if (otherDuvida !== duvida) {
                    otherDuvida.querySelector('p').style.display = 'none';
                    otherDuvida.querySelector('img').src = '/img/arrow-down.svg'; 
                }
            });
            
            if (resposta.style.display === 'none') {
                resposta.style.display = 'block';
                seta.src = '/img/arrow-down.svg'; 
            } else {
                resposta.style.display = 'none';
                seta.src = '/img/arrow-down.svg'; 
            }
        });
    });
});