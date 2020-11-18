$(document).ready(function(){
    console.log('Lets get ready to party with JQuery')
})

$('article img').addClass('image-center')

$('p').last().remove()

$('#title').css('font-size', function(){
    let ranPix = Math.floor(Math.random() * 100)
    return `${ranPix}px`
})

$('ol').append('<li>NEW</li>')

$('ol').text('')

$('ol').append('<p>Sorry for the list</p>')



$('div input').on('change', function(){
    let arr = $('div input').map(function(){
        return $(this).val()
    }).get()
    $('body').css('background-color', `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`)
})


$('img').on('click', function(){
    $(this).remove()
})




