var type = 0


$(document).ready(function() {
    console.log('jquery is up');

    eventListeners();

    $("#calculate").on('click', function() {
        console.log( 'calculate button on' );

        var input = {};
        input.x = $('#valueX').val();
        input.y = $('#valueY').val();
        input.type = type;
        // input.type = operatorType();
        // input.add = $( '#add' ).val();
        // input.subtract = $( '#subtract' ).val();
        // input.multiply = $( '#multiply' ).val();
        // input.divide = $( '#divide' ).val();

        $.ajax({
            type: 'POST',
            url: '/calculator',
            data: input,
            success: function(response) {
                console.log('Detroit');
                appendDom(parseInt(response));
            }
        });
    });



}); //end doc ready

function eventListeners() {
    $('#add').on('click', function() {
        console.log('add is on');
        return ( type = 'add' );
    }); //end add

    $('#subtract').on('click', function() {
        console.log('subtract is on');
        return ( type = 'subtract' );
    }); //end subtract

    $('#multiply').on('click', function() {
        console.log('multiply is on');
        return ( type = 'multiply' );
    }); //end multiply

    $('#divide').on('click', function() {
        console.log('divide is on');
        return ( type = 'divide' );
    }); //end divide

    $('#clear').on('click', function() {
        console.log('clear is on');
        $('.enterValues').children().empty();
        // $('.enterValues').children().empty();
        // $( '#valueY' ).empty();
        $('.answers').empty();

    }); //end clear


} //end eventListeners

function appendDom(answer) {
    console.log('appendDom on');
    $('.answers').empty();
    //     for (var i = 0; i < answers.length; i++) {
    $('.answers').append('<div>' + answer + '</div>');
    // } //where is answers array?
    //must use parseInt befre printing to the DOM
} //end appendDom
