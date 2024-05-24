$(document).ready(function() {
    const inputCheck = $('#modo-notrno');
    const elemento = $('body');

    inputCheck.on('click', function() {
        const modo = $(this).is(':checked') ? 'dark' : 'light';
        elemento.attr('data-bs-theme', modo);
    });
});