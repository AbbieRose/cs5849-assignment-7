downX = 0
downY = 0

$("#gestureArea").mouseup(function(event) {
    var upX = event.pageX
    var upY = event.pageY
    if (upX < downX) {
        $("#gestureResult").text("swipe left");
    } else if (upX > downX) {
        $("#gestureResult").text("swipe right");
    } else  {
        $("#gestureResult").text("mouse up");
    }
});

$("#gestureArea").mousedown(function(event) {
    $("#gestureResult").text("mouse down");
    downX = event.pageX
    downY = event.pageY
});

