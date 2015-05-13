var assData;

var showData = function(){
    $.get('/assignments', function(data){
        assData = data;
        for (var i = 0; i < assData.length; i++) {
            $('#assDisplay').append('<div class="displayRow">' +
            '<div class="name displayCell">' + assData[i].name + '</div>' +
            '<div class="score displayCell">' + assData[i].score + '</div>' +
            '<div class="date displayCell">' + assData[i].date_completed + '</div>' +
            '<button class="delete" value="' + assData[i]._id + '">Delete</button>' +
            '</div>');
        }
        console.log(data);
    });
};

$(document).ready(function(){
    showData();

    $('#assDisplay').on('click', '.delete', function(){
        $.ajax({
            type: 'DELETE',
            url: '/assignments/' + $(this).attr('value'),
            complete: function(){
                $('#assDisplay').empty();
                showData();
            }

        });
    });
});