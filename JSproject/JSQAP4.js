
const motelCustomer = {
    customerName: "John Smith",

    birthDate:{
        birthYear: 1997,
        birthMonth: 12,
        birthday: 8,
    },

    genderType: "male",

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
  <center>
  <h2>Motel Customer</h2>
  <p>Hello, my name is ${motelCustomer.customerName}! A ${motelCustomer.genderType} who was born in ${motelCustomer.birthDate.birthYear +"/"+ motelCustomer.birthDate.birthMonth +"/"+ motelCustomer.birthDate.birthday}, which makes me ${customerAge} years old</p>
  <p>I would like to request a booking in the motel from ${motelCustomer.checkInDate.checkInYear +"/"+ motelCustomer.checkInDate.checkInMonth +"/"+  motelCustomer.checkInDate.checkInDay} to ${motelCustomer.checkOutDate.checkOutYear +"/"+ motelCustomer.checkOutDate.checkOutMonth +"/"+  motelCustomer.checkOutDate.checkOutDay}</p>
  <p>My room preferences are: ${motelCustomer.roomPreference[0]+", "+ motelCustomer.roomPreference[1]+", "+ motelCustomer.roomPreference[2]}</p>
  <p>I will be paying with ${motelCustomer.paymentMethod}</p>
  <p>My contact information below:</p>
  <ul>
  <li>Phone number: ${motelCustomer.phoneNumber}</li>
  <li>Mailing address: ${motelCustomer.mailingAddress.street +", "+ motelCustomer.mailingAddress.city +", "+ motelCustomer.mailingAddress.province +", "+ motelCustomer.mailingAddress.country +", "+ motelCustomer.mailingAddress.postalCode}</li>
  </ul>
</center>
`;

console.log(html);
document.body.innerHTML = html;
