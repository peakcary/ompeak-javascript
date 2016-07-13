function f1() {
  var a = 1;
  return f2();
}

function f2() {
  var b = 2;
  // alert(2);
  return a;
}


alert(f1());

var a = 55;

alert(f1());
