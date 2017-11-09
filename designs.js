

makeGrid(10,10);

// This function appends a table to the pixel_canvas element.
// The number of the created rows equals the gridHeight argument.
// The number of the created columns equals the gridWidth argument.
function makeGrid(gridHeight,gridWidth) {
  $('#pixel_canvas').empty();
  for(let i = 0 ; i < gridHeight; ++i){
    $('#pixel_canvas').append("<tr> </tr>")
  }
  for(let j = 0 ; j < gridWidth ; ++j){
    $('tr').append("<td> </td>")
  }

  $('td').click(function(){
    const color = $('#colorPicker').val();
    $(this).css("background-color", color);
  });
}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
  e.preventDefault();
  const gridHeight = $('#input_height').val();
  const gridWidth = $('#input_width').val();
  makeGrid(gridHeight,gridWidth);
});
