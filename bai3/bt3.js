function typeConsole(type = "log") {
    if (type == "log") {
        console.log(`Day la type: ${type}`);
        
    }else if(type == "warn") {
        console.log(`Day la type ${type}`);
        
    }else if(type == "error") {
        console.log(`Day la type ${type}`);
        
    }
}

typeConsole();