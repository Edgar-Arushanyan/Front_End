const phoneBook = {
    contactList: [], //массив контактов каждый контакт обьект
    addContact(contact) { // метод который принимает контакт
        if (contact.userName) { // если именя не пестая строка то добавь список
            this.contactList.push(contact);
            alert('Contact added');          
        }
        this.updateContactList();

    },
    changeContact(updatedContact) {
        const selectedContactName = document.getElementById('changeContactName').value;
       
        const index = this.contactList.findIndex(contact => contact.userName === selectedContactName);
        this.contactList[index] = updatedContact; //
        this.updateContactList();// обновляем
    },
    updateContactList() {
        const contactList = document.getElementById('contactList');
        contactList.innerHTML = '';

        this.contactList.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>Name: </strong> ${contact.userName}
                <strong>Email: </strong> ${contact.email}
                <strong>Phone Number: </strong> ${contact.phoneNumber}
                <strong>Company: </strong> ${contact.company}
                <strong>Address: </strong> ${contact.address}
            `; 
            contactList.append(li);          
        });
    }
}
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactPhone = document.getElementById('contactPhone');
const contactCompany = document.getElementById('contactCompany');
const contactAddress = document.getElementById('contactAddress');

const addContactForm = document.getElementById('addContactForm');
addContactForm.addEventListener('submit', addContactHandler);

function addContactHandler(event) {
    event.preventDefault(); // Метод отменяет дефолтное поведение тэга

    const contactNameValue = contactName.value.trim();
    const contactEmailValue = contactEmail.value.trim();
    const contactPhoneValue = contactPhone.value.trim();
    const contactCompanyValue = contactCompany.value.trim();
    const contactAddressValue = contactAddress.value.trim();

    const newContact = {
        userName: contactNameValue,
        email: contactEmailValue,
        phoneNumber: contactPhoneValue,
        company: contactCompanyValue,
        address: contactAddressValue
    }

    phoneBook.addContact(newContact);
    addContactForm.reset();
    populateChangeContactForm();
    
}

const changeContactName = document.getElementById('changeContactName');
const changeContactEmail = document.getElementById('changeContactEmail');
const changeContactPhone = document.getElementById('changeContactPhone');
const changeContactCompany = document.getElementById('changeContactCompany');
const changeContactAddress = document.getElementById('changeContactAddress');


const changeContactForm = document.getElementById('changeContactForm');
changeContactForm.addEventListener("submit", changeContactHandler);



function changeContactHandler(event) {
    event.preventDefault();

    const changeContactNameValue = changeContactName.value.trim();
    const changeContactEmailValue = changeContactEmail.value.trim();
    const changeContactPhoneValue = changeContactPhone.value.trim();
    const changeContactCompanyValue = changeContactCompany.value.trim();
    const changeContactAddressValue = changeContactAddress.value.trim();

    const newContact = {
        userName: changeContactNameValue,
        email: changeContactEmailValue,
        phoneNumber: changeContactPhoneValue,
        company: changeContactCompanyValue,
        address: changeContactAddressValue
    }

    phoneBook.changeContact(newContact);
    changeContactForm.reset();
}

function populateChangeContactForm() {
    changeContactName.innerHTML = '';
    

    phoneBook.contactList.forEach(contact => {
        const option = document.createElement('option');
        option.value = contact.contact.userName;
        option.textContent = contact.userName;
        changeContactName.append(option);
    })
    
}



    
