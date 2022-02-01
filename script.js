const input = $("#botao");
input.on('click', ()=>{
    apod();
});


function apod(){
    const data = $('#data').val();
    const titulo = $('#title');
    const img = $('#img');
    const video = $('#video');
    const copy = $('#copy');
    const cont = $('#conteudo');
    
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=qEUarBdDDAztcHdPDePgdLm6NZeIjVdutrrvJPfL&date=${data}`,
    success: function(recebido){

        img.attr("src", recebido.url);
        titulo.text(recebido.title);
        cont.text(recebido.explanation);
        copy.text(recebido.copy);

        if (recebido.media_type === 'image'){
            img.attr("src", recebido.url);
            img.css('display', 'block');
            video.css('display', 'none');
            cont.css("display", "block");
            copy.css("display", "block");
        }else{
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
