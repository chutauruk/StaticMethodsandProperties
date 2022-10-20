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
    vote(name1)
        console.log(name1, "will be voting for himself in this year's election.")
    
    reside(county)
        console.log(county, "belongs to Colorado.")

    drinks(legalAge)
        console.log(legalAge, "can drink with other adults.")
}

Person.vote('Nhan')
Person.reside('Will')
Person.drinks('Ying')

class Postal extends Person {
    constructor(lost, customer){
        this.lost = lost;
        this.customer = customer;
    }
    package(lost)
        console.log(lost, " did not deliver all your mail to your address.")
    
    interface(customer)
        console.log(customer, " placed a stamp on the customer's package.")
}

Postal.lost('Dulce')
Postal.interface('Vandana')

class Chef extends Person {
    constructor(shop, sharpen){
        this.shop = shop;
        this.sharpen = sharpen;
    }
    apron(shop)
        console.log(shop " bought a new apron at the store.")
    knives(sharpen)
        console.log(sharpen " made three knives sharper.")
}

Chef.shop('Jason')
Chef.interface('Jason')