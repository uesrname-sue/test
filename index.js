function fn(a) {
    console.log(b);   //unde
    console.log(a);   //function  () {}

    var a = 123;

    console.log(a);  //123

   function a () {}

    console.log(a); //123

    var b = function () {};

    console.log(b);  //function () {};

}

//
fn(1);