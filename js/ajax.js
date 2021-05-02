var univInfo = ''
$.ajax({
    type : 'GET',
    url : './data/data1.json',
    timeOut : 3000,
    beforeSend : function(xhr){
        if (xhr.overrideMimeType) {
            xhr.overrideMimeType('application/json')
        }
    },
    dataType : 'json',
    success : function(data){
        univInfo = data
    },
    error : function(xhr){
        alert(xhr.status + '/' + xhr.errorText)
    }
})

$('.viewInfo').on('click', function(e){
    e.preventDefault()
    var span1 = ""
    for (var i in univInfo) {
        var name = univInfo[i].UnivName
        var cont = univInfo[i].Count
        span1 += `<span>${name} : ${cont}</span>`
    }
    var make = $('#section #article1 .left .depth2')
    make.append(`<div class="depth3">${span1}</div>`)
    var on = $('#section #article1 .left .depth2 .depth3')
    if (!on.hasClass('on')){
        on.addClass('on')
    }
})