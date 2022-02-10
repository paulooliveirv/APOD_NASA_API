/*function formataData(){
    let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0'),
    mes = (data.getMonth()+1).toString().padStart(2, '0'),
    ano = data.getFullYear();
return `${dia}/${mes}/${ano}`;
}*/

const input = $("#botao");
input.on('click', ()=>{
    apod();
});


function apod(){
    const data = $('#data').val();
    const titulo = $('#title');
    const img = $('#img');
    const video = $('#video');
    let copy = $("#copy");
    const cont = $('#conteudo');
    const exibirConteudo = document.getElementById('conteudo_principal');
    const mostraBotoes = document.getElementById('procurar')
    
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=qEUarBdDDAztcHdPDePgdLm6NZeIjVdutrrvJPfL&date=${data}`,
    success: function(recebido){

        img.attr("src", recebido.url);
        titulo.text(recebido.title);
        cont.text(recebido.explanation);
        copy.text(recebido.copyright);

        if (recebido.media_type === 'image'){
            mostraBotoes.style.display = 'none';
            exibirConteudo.style.display = 'block';
            img.attr("src", recebido.url);
            img.css('display', 'block');
            video.css('display', 'none');
            cont.css("display", "block");
            copy.css("display", "block");
        }else{
            mostraBotoes.style.display = 'none';
            exibirConteudo.style.display = 'block';
            video.attr("src", recebido.url);
            video.css('display', 'block');
            img.css('display', 'none');
            cont.css("display", "block");
            copy.css("display", "block");
        }
    },
    error: ()=>{
        console.log('deu ruim');
    }
})
}
