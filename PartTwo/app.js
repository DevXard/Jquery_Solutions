$('form').on('click', 'button', function(e){
    e.preventDefault();
    let arr = $('form input').map(function(){
        return $(this).val()
    }).get()
    console.log(arr)

    let newEl = 
    `<div class='movie'>
        <p>Title is:${arr[0]}</p>
        
        <p>Rating is: ${arr[1]}</p>
        <button id="remove">Remove</button>
    </div>`

    if(arr[0].length > 1){
        $('body').append(newEl)
    }
    
})

$('body').on('click', '#remove', function(){
    $('#remove').parent().remove()
})

$('#sort-ab').on('click', function(){
    console.log($('.movie'))
})