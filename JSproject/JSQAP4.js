
const motelCustomer = {
    customerName: "John Smith",

    birthDate:{
        birthYear: 1997,
        birthMonth: 2,
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
        checkOutMonth: 6,
        checkOutDay: 1,
        checkOutTime: "15:00"
    },

    getAge: function() {
        const today = new Date();
        const birthDate = new Date(
            this.birthDate.birthYear,
            this.birthDate.birthMonth - 1,
            this.birthDate.birthday
        );
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        // check if the birth month or day had passed on not
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },

    getDurationOfStay: function(){
        const formattedCheckIn = new Date (motelCustomer.checkInDate.checkInYear, motelCustomer.checkInDate.checkInMonth - 1, motelCustomer.checkInDate.checkInDay);        
        const formattedCheckOut = new Date (motelCustomer.checkOutDate.checkOutYear, motelCustomer.checkOutDate.checkOutMonth - 1, motelCustomer.checkOutDate.checkOutDay);        
        if (formattedCheckIn > formattedCheckOut)
            {
                console.log("Ckeckin date is later than the check out date")
            }
        return formattedCheckOut - formattedCheckIn
    }
}

const customerAge = motelCustomer.getAge();

html = `
  <ul>
  <center>
  <h2>Motel Customer</h2>
    <li>Name: ${motelCustomer.customerName} </li>
    <li>Birthdate: ${motelCustomer.birthDate.birthYear +"/"+ motelCustomer.birthDate.birthMonth +"/"+ motelCustomer.birthDate.birthday} </li>
    <li>Age: ${customerAge} </li>
    </center>
  </ul>
`;

console.log(html);
document.body.innerHTML = html;
