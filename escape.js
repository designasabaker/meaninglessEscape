const targetTrigger = document.getElementById('targetTrigger');

$(document).mousemove( e => {
    if(CheckIn(targetTrigger)){
        // $('#targetTrigger').css('top',$('#targetTrigger').position().top +60);
        $('#targetTrigger').css('top', RandomPos().top);
        $('#targetTrigger').css('left', RandomPos().left);
    }
});

function CheckIn(obj){
    const x = Number(window.event.clientX);
    const y = Number(window.event.clientY);

    const div_x = Number(obj.getBoundingClientRect().left);
    const div_x_width = Number(div_x + obj.clientWidth);

    const div_y = Number(obj.getBoundingClientRect().top);
    const div_y_height = Number(div_y + obj.clientHeight);

    return (x > div_x && x < div_x_width && y > div_y && y < div_y_height);
}

function RandomPos(){
    x_max = $('body').width() * 0.8;
    y_max = $('body').height() * 0.8;
    x_ran = Math.random();
    y_ran = Math.random();
    return {
        left: x_max * x_ran,
        top: y_max * y_ran,
    }
}