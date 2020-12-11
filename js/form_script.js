window.addEventListener('DOMContentLoaded', (event) => {
    const fullName = document.querySelector("#full-name");
    fullName.addEventListener('input', function () {
        if (fullName.value.length == 0) {
            setTextContent(".full-name-error", "");
            setTextContent(".valid-full-name", "");
        }
        try {
            (new Contact()).fullName = fullName.value;
            setTextContent(".full-name-error", "");
            setTextContent(".valid-full-name", '✓');
        } catch (error) {
            setTextContent(".full-name-error", error);
            setTextContent(".valid-full-name", "");
        }
    });

    const address = document.querySelector('#address');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            setTextContent(".address-error", "");
            setTextContent(".valid-address", "");
        }
        try {
            (new Contact()).address = address.value;
            setTextContent(".address-error", "");
            setTextContent(".valid-address", '✓');
        } catch (error) {
            setTextContent(".address-error", error);
            setTextContent(".valid-address", "");
        }
    });

    const phoneNumber = document.querySelector('#tel');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            setTextContent(".tel-error", "");
            setTextContent(".valid-tel", "");
        }
        try {
            (new Contact()).phoneNumber = phoneNumber.value;
            setTextContent(".tel-error", "");
            setTextContent(".valid-tel", '✓');
        } catch (error) {
            setTextContent(".tel-error", error);
            setTextContent(".valid-tel", "");
        }
    });
});

const setTextContent = (propertyId, value) => {
    const contentElement = document.querySelector(propertyId);
    contentElement.textContent = value;
};