var drawSquare = function() {
    rect(0, 0, 50, 50);
};

var drawCircle = function() {
    ellipse(100, 100, 50, 50);
};

var drawShape = function(shape) {
    if(shape === 'square') {
        drawSquare();
    }
    if(shape === 'circle') {
        drawCircle();   
    }
};

//drawSquare();
//drawCircle();
//drawShape('square');
//drawShape('circle');
