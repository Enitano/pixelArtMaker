$(document).ready(function(){
 $("#sizePicker").submit(function makeGrid(grid){

  var row = $("#inputHeight").val();

  var column = $("#inputWeight").val();

   for (var i = 1; i <= row; i++){


    $("table").append("<tr></tr>");

    for (var e = 1; e <= column; e++){


     //append colum to last row

     $("tr:last").append("<td class='cells'></td>");
 
    }

   }

   grid.preventDefault();


   $("#pixelCanvas").click(function(event){
    var cellColor = $("#colorPicker").val();
    $(event.target).css("background-color", cellColor);
   });
 });

});