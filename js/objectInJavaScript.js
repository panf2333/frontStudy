function testObject() {
    // console.log(person.age);
    // console.log(person.bio);
    // person.bio();
    // console.log(person2.name.first)
    // console.log(person2["name"]["first"])
    // console.log(person["name"][1])
    // person2.logProperty("name");


    // person.age = 10;
    // console.log(person);
    // person["eye"] = "hazel";
    // person.farewell = function() {
    //     console.log("Bye everyone");
    // }
    // console.log(person);
    // person.farewell();

    // person2["name"]["first"] = person2["name"]["first"] + "1";
    // const myDataName = "height";
    // const myDataValue = "1.75m";
    // person2[myDataName] = myDataValue;
    // console.log(person2);

    let person = new Person("myName");
    person.introduceSelf();
    console.log(person);

    const myNotification = new Notification("Hello!");
}

function testPrototype() {
    myObject.greet();
    let type = myObject;
    while (type) {
        type = Object.getPrototypeOf(type);
        console.log(typeof type, type);
    }

    const date = new Date();
    let object = date;
    do {
        object = Object.getPrototypeOf(object);
        console.log(typeof object, object);
    } while (object)

}

function testShadowintProperty() {
    const myDate = new Date(1995, 11, 17);
    console.log(myDate.getFullYear());

    myDate.getFullYear = function () {
        console.log("something else");
    }

    myDate.getFullYear();
}

function testSetPrototype() {
    const personPrototype = {
        greet() {
            console.log("greet");
        }
    };

    const carl = Object.create(personPrototype);
    carl.greet();
}

function testSetPrototypeByConstructor() {
    const personPrototype = {
        greet() {
            console.log(`Hello, my name is ${this.name}!`);
        },
    };

    function Person(name) {
        this.name = name;
    }

    Object.assign(Person.prototype, personPrototype);
    // or Person.prototype.greet = person.greet;

    const reuben = new Person("Reuben");
    reuben.greet();

    console.log(Object.hasOwn(reuben, "name"));
    console.log(Object.hasOwn(reuben, "greet"));
}

const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

// const person = {};
const person = {
    name: ["Bob", "Alice"],
    age: 12,

    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
    },

    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}`);
    }
};

// definition: funcation()  === definition()
const person1 = {
    name: ["Bob", "Alice"],
    age: 12,

    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
    },

    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}`);
    },
};

const person2 = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    age: 12,

    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old`);
    },

    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}`);
    },

    logProperty(propertyName) {
        console.log(this[propertyName]);
    }
};

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    }
}

