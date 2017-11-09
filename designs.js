// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
makeGrid(10,10);

function makeGrid(h,w) {
  $('#pixel_canvas').empty();
  for(let i = 0 ; i < h; ++i){
    $('#pixel_canvas').append("<tr> </tr>")
  }
  for(let j = 0 ; j < w ; ++j){
  $('tr').append("<td> </td>")
  }

  $('td').click(function(){
    const color = $('#colorPicker').val();
    $(this).css("background-color", color);
  });
}

$('#sizePicker').submit(function(e){
  e.preventDefault();
  const h = $('#input_height').val();
  const w = $('#input_width').val();
  makeGrid(h,w);
});
