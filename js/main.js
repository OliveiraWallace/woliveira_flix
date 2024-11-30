$(document).ready(function () {
    // Para cada carrossel na página
    $(".carousel").each(function () { 
        const $carouselContainer =  $(this).find(".carousel-container");
        const $prevButton = $(this).find(".carousel-btn.prev");
        const $nextButton = $(this).find(".carousel-btn.next");

        // Lógica para botão "Anterior"
        $prevButton.on("click", function () { 
            $carouselContainer.animate(
                {scrollLeft: "-=300"},
                300 //Tempo de animação em milissagundos
            );
         });

        //  Lógica para o botão "Próximo"
        $nextButton.on("click", function () { 
            $carouselContainer.animate(
                {scrollLeft: "+=300"},
                300 // Tempo de animação em milissegundos
            );
         });
     });
});