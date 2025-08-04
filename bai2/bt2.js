function greetingWithWeather(name, weather){

    if (weather.toLowerCase() == "sunny") {
        console.log(`Xin chao ${name}! Hom nay troi nang tuyet voi`);
        
    }else if(weather.toLowerCase() == "rainy") {
        console.log(`Xin chao ${name}! Hom nay troi mua hay mang theo o`);
    }else {
        console.log(`Xin chao ${name}! Hom nay thoi tiet khong xac dinh`);
    }
}

greetingWithWeather("Huy", "clound");