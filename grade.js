var grade = function(grade){
    fill(255, 0, 0);
    if(grade >= 90) {
        text('A', 0, 10);
    }
    else if(grade >= 80) {
        text('B', 0, 10);   
    }
    else if(grade >= 70) {
        text('C', 0, 10);   
    }
    else {
        text('Resubmit your homework!', 0, 10);   
    }
};

var homeworkGrade = 70;
grade(homeworkGrade);
