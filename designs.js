// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(h,w) {
  for(let i = 0 ; i < h; ++i){
    $('#pixel_canvas').append("<tr> </tr>")
  }
  for(let j = 0 ; j < w ; ++j){
  $('tr').append("<td> </td>")
  }
}

// Your code goes here!
