class Contact {
    //getter and setter method
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(fullName) {
        const FULL_NAME_REGEX = RegExp("^[A-Z]{1}[a-zA-Z]{2,}[ ][A-Z]{1}[a-zA-Z]{2,}$");
        if (FULL_NAME_REGEX.test(fullName)) {
            this._fullName = fullName;
        } else
            throw "Invalid FullName!";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let words = address.split(" ");
        const ADDRESS_REGEX = RegExp("^([A-Za-z0-9/,-]{3,}[ ]?)+$");
        for (const word of words) {
            if (!ADDRESS_REGEX.test(word))
                throw "Invalid Address!";
        }
        this._address = address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        const PHONE_REGEX = RegExp("((^\\+?)(([0-9]{2,3})(\\s))?)[1-9]{1}[0-9]{9}$");
        if (PHONE_REGEX.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else
            throw "Invalid Phone Number!";
    }
    //method
    toString() {
        return "id: " + this.id + " fullname: " + this.fullName + ", phoneNumber: " + this.phoneNumber + ", address: " + this.address +
            ", city: " + this.city + ", state: " + this.state + ", zip: " + this.zip;
    }
}