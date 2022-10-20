class Governor {
    constructor(name, money, law, age){
        this.name = name;
        this.money = money;
        this.law = law;
        this.age = age;
    }
    static takeTax(personName){
        console.log(this.name + " will take tax from " + personName);
       }
}
Governor.takeTax('Will');

class Person {
    constructor (party, legalAge, county){
        this.party = party;
        this.legalAge = legalAge;
        this.county = county;
    }
    vote(name1){
        console.log(name1, "will be voting for himself in this year's election.")
    }
    reside(county){
        console.log(county, "lives in " + this.county + " county.")
    }
    drinks(legalAge){
        console.log(legalAge, "can drink with other adults since they are over " + this.legalAge + ".")
    }
}
let myPerson = new Person('Unaffiliated', 21, 'Arapahoe');
console.log(myPerson);
myPerson.vote('Nhan');
myPerson.reside('Nhan');
myPerson.drinks('Nhan');

class Postal extends Person {
    constructor(party, legalAge, county, lost, customer){
        super(party, legalAge, county);
        this.lost = lost;
        this.customer = customer;
    }
    package(lost){
        console.log(lost, "did not deliver all expected mail to my address.")
    }
    interface(customer){
        console.log(customer, "placed a stamp on the customer's package.")
    }
}
let myPostal1 = new Postal('Conservative', 22, 'Broomfield');
console.log(myPostal1);
myPostal1.package('Will');
myPostal1.interface('Will');

const myPostal2 = new Postal('Progressive', 31, 'Broomfield');
console.log(myPostal2);
myPostal2.package('Ying');
myPostal2.interface('Ying');

class Chef extends Person {
    constructor(party, legalAge, county, shop, sharpen){
        super(party, legalAge, county);
        this.shop = shop;
        this.sharpen = sharpen;
    }
    apron(shop){
        console.log(shop, "bought a new apron at the store.")
    }
    knives(sharpen){
        console.log(sharpen, "made three knives sharper.")
    }
}
let myChef1 = new Chef('Republican', 35, 'Denver');
console.log(myChef1);
myChef1.apron('Jason');
myChef1.knives('Jason');

let myChef2 = new Chef('Libertarian', 26, 'Douglas');
console.log(myChef2);
myChef2.apron('Dulce');
myChef2.knives('Dulce');