$(document).ready( function(){
  console.log('jquery is up');

  eventListeners();
  appendDom();

});//end doc ready

function eventListeners(){
  $( "#calculate" ).on( 'click', function(){
    console.log('button on');

  });//end eventListeners

function appendDom(answers){
  console.log('appendDom on');
  // $( 'answers' ).empty();
  for (var i = 0; i < answers.length; i++) {
    $( '#answers' ).append( answers[i] );
  }//where is answers array?

}//end appendDom
