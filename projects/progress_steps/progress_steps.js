var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var line4 = document.getElementById("line4");

var Limit1=line1.offsetWidth
var Limit2=line2.offsetWidth
var Limit3=line3.offsetWidth
var Limit4=line4.offsetWidth
var c=0;

bt2.addEventListener('click', function(){
            line1.style.widows=c+'px'
            line1.style.backgroundColor='rgb(57, 145, 227)'
            c+=5
    // for (let i = 0; i < Limit1; i++) {
    //     line1.style.width = i + 'px';
    //     line1.style.backgroundColor = 'rgb(57, 145, 227)';
    //   }
    
    //   for (let i = 0; i < Limit2; i++) {
    //     line2.style.width = i + 'px';
    //     line2.style.backgroundColor = 'rgb(57, 145, 227)';
    //   }
    
    //   for (let i = 0; i < Limit3; i++) {
    //     line3.style.width = i + 'px';
    //     line3.style.backgroundColor = 'rgb(57, 145, 227)';
    //   }
    
    //   for (let i = 0; i < Limit4; i++) {
    //     line4.style.width = i + 'px';
    //     line4.style.backgroundColor = 'rgb(57, 145, 227)';
    //   }
});