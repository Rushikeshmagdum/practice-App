function test(){
    console.log("inside test function");
    setTimeout(function(){
        console.log("First Set Timeout");
    },3000);
    setTimeout(function(){
        console.log("Second Set Timeout");
    },3000);
    setTimeout(function(){
        console.log("Third Set Timeout");
    },3000);
}
    test();
    console.log("still First Printed");
    

