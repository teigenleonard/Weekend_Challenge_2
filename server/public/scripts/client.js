$(document).ready( function(){
  console.log('jquery is up');

  eventListeners();
  appendDon();

});

function eventListeners(){
  $( "#calculate" ).on( 'click', function(){
    console.log('button on');

  })

function appendDom(){
  console.log('appendDom on');
  // $( 'answers' ).empty();
}

}
