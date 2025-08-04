const user = {
        name: "John",
        age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam"
    },
    contact: {
        email: "john@example.com",
        phone: "0123456789"
    },
    job: {
        title: "Developer",
        company: "Tech Corp"
    }
}

function displayUserInfo(name = "unknow", age = "unknow", city = "unknow",country = "unknow", email = "unknow",phone = "unknow", title = "unknow", company = "unknow") {
    console.log(`${name} is ${age} years old, lives in ${city}, ${country}, works as ${email} at ${phone}, and can be contacted via ${title} or ${company}.`);
}
function extractData(user){
    const {name, age, location, contact, job} = user;
    const {city, country} = location;
    const {email, phone} = contact;
    const {title, company} = job;
    displayUserInfo(name, age, city, country, email, phone, title, company);
}
extractData(user);