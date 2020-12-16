// Section 1: UC8
let addressBookContactJSONObject = {};

window.addEventListener('DOMContentLoaded', (event) => {
    const fullName = document.querySelector("#full-name");
    fullName.addEventListener('input', function () {
        if (fullName.value.length == 0) {
            setTextContent(".full-name-error", "");
            setTextContent(".valid-full-name", "");
        } else {
            try {
                (new Contact()).fullName = fullName.value;
                setTextContent(".full-name-error", "");
                setTextContent(".valid-full-name", '✓');
            } catch (error) {
                setTextContent(".full-name-error", error);
                setTextContent(".valid-full-name", "");
            }
        }
    });
    const address = document.querySelector('#address');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            setTextContent(".address-error", "");
            setTextContent(".valid-address", "");
        } else {
            try {
                (new Contact()).address = address.value;
                setTextContent(".address-error", "");
                setTextContent(".valid-address", '✓');
            } catch (error) {
                setTextContent(".address-error", error);
                setTextContent(".valid-address", "");
            }
        }
    });
    const phoneNumber = document.querySelector('#tel');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            setTextContent(".tel-error", "");
            setTextContent(".valid-tel", "");
        } else {
            try {
                (new Contact()).phoneNumber = phoneNumber.value;
                setTextContent(".tel-error", "");
                setTextContent(".valid-tel", '✓');
            } catch (error) {
                setTextContent(".tel-error", error);
                setTextContent(".valid-tel", "");
            }
        }
    });

});

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setAddressBookContactJSONObject();
        UpdateLocalStorage();
        window.location.replace(site_properties.home_page);
    } catch (submitError) {
        alert(submitError);
        return;
    }
};

const setAddressBookContactJSONObject = () => {
    addressBookContactJSONObject._fullName = getValue('#full-name');
    addressBookContactJSONObject._address = getValue('#address');
    addressBookContactJSONObject._phoneNumber = getValue('#tel');
    addressBookContactJSONObject._city = getValue('#city');
    addressBookContactJSONObject._state = getValue('#state');
    addressBookContactJSONObject._zip = getValue('#zip');
};

const UpdateLocalStorage = () => {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList) {
        addressBookList.push(createAddressBookContactData());
    } else {
        addressBookList = [createAddressBookContactData()];
    }
    alert("Local Storage Updated Successfully!\nTotal Contacts : " + addressBookList.length);
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
}

const createAddressBookContactData = (id) => {
    let contactData = new Contact();
    if (!id) contactData.id = createNewContactId();
    else contactData.id = id;
    setAddressBookContactClassObject(contactData);
    return contactData;
}

const setAddressBookContactClassObject = (contactData) => {
    try {
        contactData.fullName = addressBookContactJSONObject._fullName;
    } catch (error) {
        setTextContent(".full-name-error", error);
        setTextContent(".valid-full-name", "");
        throw error;
    }
    try {
        contactData.address = addressBookContactJSONObject._address;
    } catch (error) {
        setTextContent(".address-error", error);
        setTextContent(".valid-address", "");
        throw error;
    }
    try {
        contactData.phoneNumber = addressBookContactJSONObject._phoneNumber;
    } catch (error) {
        setTextContent(".tel-error", error);
        setTextContent(".valid-tel", "");
        throw error;
    }
    contactData.city = addressBookContactJSONObject._city;
    contactData.state = addressBookContactJSONObject._state;
    contactData.zip = addressBookContactJSONObject._zip;
    alert("ADDED CONTACT CLASS Object :\n" + contactData.toString());
};

const createNewContactId = () => {
    let contactId = localStorage.getItem("ContactID");
    contactId = !contactId ? 1 : (parseInt(contactId) + 1).toString();
    localStorage.setItem("ContactID", contactId);
    return contactId;
}

const getValue = (propertyId) => {
    let value = document.querySelector(propertyId).value;
    return value;
};

const setTextContent = (propertyId, value) => {
    const contentElement = document.querySelector(propertyId);
    contentElement.textContent = value;
};