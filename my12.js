function play_se(){
    var 建築猛者が倒せない = new Audio('建築猛者が倒せない.mp3');
    建築猛者が倒せない.play();
}


$(function(){
    $('#12曲目').click(play_se);
});