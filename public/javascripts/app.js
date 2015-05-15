var assData;
var displayData = function(data){
    assData = data;
    console.log(assData);
    for (var i = 0; i < assData.length; i++) {
        console.log(assData[i]);
        $('#assDisplay').append('<div class="displayRow">' +
        '<div class="name displayCell">' + assData[i].name + '</div>' +
        '<div class="score displayCell">' + assData[i].score + '</div>' +
        '<div class="date displayCell">' + assData[i].date_completed + '</div>' +
        '<button class="delete" value="' + assData[i]._id + '">Delete</button>' +
        '</div>');
    }
};
var showData = function(){

    $.get('/assignments', function(data){
        displayData(data);
        console.log(data);
    });
};

$(document).ready(function(){
    showData();

    $('#assDisplay').on('click', '.delete', function(){
        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            url: '/assignments/' + $(this).attr('value'),
            complete: function(){
                $('#assDisplay').empty();
                showData();
            }

        });
    });

    $('.js-sort').click(function(){
        var sort = $(this).val();
        var name = $('.searchBox').val();
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/assignments/?sort=' + sort + '&name=' + name,
            complete: function(data){
                console.log('this fired', data);
                $('#assDisplay').empty();
                displayData(data.responseJSON);
            }
        })
    });

    $('.searchBtn').click(function(){
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: '/assignments/?name=' + $('.searchBox').val(),
            complete: function(data){
                console.log("search fired");
                $('#assDisplay').empty();
                displayData(data.responseJSON);
            }
        });

    });
});