// $(document).ready(function () {
//     var modo = 0;
//     $("#noturnoON").click(function () {
//         if (modo == 0) {
//             $("body").css("background-color", "black");
//             // $(".listaMenu").css("background-color", "#c998cc");
//             // $(".listaMenu:hover").css("background-color", "#b7c9a9");
//             $("footer").css("background-color", "#c998cc");
//             // $("#noturnoON").text("OFF");
//             $("#noturnoON").html('<i class="fas fa-sun"></i>');
//             modo = 1;
//         } else {
//             $("body").css("background-color", "#2e292e");
//             // $(".listaMenu").css("background-color", "#674d69");
//             // $(".listaMenu:hover").css("background-color", "#b7c9a9");
//             $("footer").css("background-color", "#674d69");
//             // $("#noturnoON").text("ON");
//             $("#noturnoON").html('<i class="fas fa-moon"></i>');
//             modo=0;
//         }
//     });
// });

$(document).ready(function () {
    $("#noturnoON").click(function () {
        $("body").toggleClass("darkMode noDarkMode");
        // $("footer").toggleClass("darkModeFooter noDarkModeFooter");
        $("#noturnoON i").toggleClass("fa-sun fa-moon");
    });
});
