function checkElement(arr, number) {
    if (isNaN(number)) {
        console.log("Khong phai so");
    }else {
        for (let element of arr) {
            if (element == number) {
                console.log("True");
                return;
                
            }
        }    
        console.log("False");
    }
}

checkElement([1, 2, 3, 4, 5], 6);