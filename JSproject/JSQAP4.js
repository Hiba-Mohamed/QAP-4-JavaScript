
const motelCustomer = {
    customerName: "John Smith",

    birthDate:{
        birthYear: 1997,
        birthMonth: 12,
        birthday: 8,
    },

    genderType: "Male",

    roomPreference: ["single room", "nice view", "double bed"],

    paymentMethod: "Credit Card",

    mailingAddress: {
        street: "10 lonely Drive",
        city: "st. John's",
        province: "NL",
        postalCode: "A1A1A1",
        country: "Canada",
    },

    phoneNumber: "709-111-1111",

    checkInDate: {
        checkInYear: 2024,
        checkInMonth: 1,
        checkInDay: 20,
        checkInTime: "13:00"
    },

    checkOutDate: {
        checkOutYear: 2024,
        checkOutMonth: 2,
        checkOutDay: 1,
        checkOutTime: "15:00"
    },

    getAge: function(){
        const today = new Date()
        const birthDate = new Date(motelCustomer.birthDate.birthYear, motelCustomer.birthDate.birthMonth - 1, motelCustomer.birthDate.birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        if (birthDate.birthMonth - 1 <  today.getMonth()){
            age -= 1
        }
        return age;
    },

    getDurationOfStay: function(){

    }

 
}