//Section 2 : UC3
window.addEventListener("DOMContentLoaded", () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
        "<th>FullName</th>" +
        "<th>Address</th>" +
        "<th>City</th>" +
        "<th>State</th>" +
        "<th>Zip Code</th>" +
        "<th>Phone Number</th>";
    let addressBookContactLocalList = createAddressBookJSON();
    let innerHtml = `${headerHtml}`;
    for (let contactData of addressBookContactLocalList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contactData._fullName}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zip}</td>
            <td>${contactData._phoneNumber}</td>
            <td>
                <img name="${contactData._id}" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
                <img name="${contactData._id}" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookContactLocalList = [{
        _id: "1",
        _fullName: "Sippora Toppo",
        _address: "Abc, JB Road, Dorando, Ranchi, Jhk",
        _city: "Ranchi",
        _state: "Jharkhand",
        _zip: "190891",
        _phoneNumber: "7009008089",
    },
    {
        _id: "2",
        _fullName: "Asher Toppo",
        _address: "402A, LR Road, XYZ, Dumka, Jhk",
        _city: "Dumka",
        _state: "Jharkhand",
        _zip: "190101",
        _phoneNumber: "9129008009",
    }
    ];
    return addressBookContactLocalList;
}