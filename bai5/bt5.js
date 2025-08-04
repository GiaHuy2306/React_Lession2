let phoneBooks = [];

function addContact() {
    let name = prompt("Nhap ten lien he: ");
    let phone = prompt("Nhap so dien thoai: ");
    let email = prompt("Nhap email lien he: ");

    let contact = {
        name,
        phone,
        email,
    };

    phoneBooks.push(contact);
}

function display(contact) {
    contact.forEach(element => {
        console.log(`
        Ten: ${element.name} 
        So dien thoai: ${element.phone}
        Email: ${element.email}`);
    });
}
addContact();
addContact();
display(phoneBooks);