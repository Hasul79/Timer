
let timer, hrs, min, sec, t;
class Time {
constructor(hrs, min, sec) {
this.hrs = hrs;
this.min = min;
this.sec = sec;
}
get checkNull() {
if (this.hrs + this.min + this.sec == 0)
return true;
return false;
}
get print() {
return this.hrs + ":" + this.min + ":" + this.sec;
}
dec() {
if (this.sec != 0)
this.sec--;
else if (this.min != 0) {
this.sec = 59;
this.min--;
} else {
this.sec = 59;
this.min = 59;
this.hrs--;
}   
}
}
function decSecond() {
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let outp = document.getElementById("outp");
outp.innerHTML = t.print;
if (t.checkNull == false) {
t.dec();
} else {
clearInterval(timer);
}
}
function submit() {
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
if (+hrs.value < 0 || +min.value < 0 || +sec.value < 0) {
alert("Negative values aren't allowed!");
} else {
t = new Time(+hrs.value, +min.value, +sec.value);
clearInterval(timer);
timer = setInterval(decSecond, 1000);
}
}
