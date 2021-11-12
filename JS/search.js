$(document).ready(function(){
    $("#search").keyup(function(){
        var tukhoa = $(this).val().toLowerCase();
        $(".content div").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
        })
    })
})

