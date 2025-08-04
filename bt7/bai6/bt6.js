function checkEndString(longString, shortString) {
    if(longString.endsWith(shortString)){
        console.log("True");
    }else{
        console.log("False");    
    } 
}

checkEndString("Hello, World", "Hello");
checkEndString("Hi there", "there");