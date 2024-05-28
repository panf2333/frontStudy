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

function testClass() {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }

        introduceSelf() {
            console.log(`Hi! I'm ${this.name}`);
        }
    }

    const giles = new Person("Giles");
    giles.introduceSelf();

    class Animal {
        sleep() {
            console.log("sleep!");
        }
    }

    const cat = new Animal();
    cat.sleep();

    class Professor extends Person {
        teaches;

        constructor(name, teaches) {
            // If we need initialize something in the subclass we have to call the super() to initialize the parent class first.
            super(name);
            this.teaches = teaches;
        }

        introduceSelf() {
            console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
        }

        grade() {
            const grade = Math.floor(Math.random() * 4 + 1);
            console.log(grade);
        }
    }

    const walsh = new Professor("Walsh", "Math");
    walsh.introduceSelf();
    walsh.grade();

}

function testEncapsulation() {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }

        introduceSelf() {
            console.log(`Hi! I'm ${this.name}`);
        }
    }
    class Student extends Person {
        // private property only can be visit in this class
        #year;
        constructor(name, year) {
            super(name)
            this.#year = year;
        }

        introduceSelf() {
            console.log(`Hi, I'm ${this.name}, and I'm in year ${this.#year}`);
        }

        canStudyArchery() {
            return this.#year > 1;
        }
        // private method
        #hello() {
            console.log("hello!");
        }

        testPrivateMethod() {
            this.#hello();
        }
    }

    const summers = new Student("Summers", 2);
    summers.introduceSelf();
    console.log(summers.canStudyArchery());
    summers.testPrivateMethod();
    // summers.#year;
    // summers.#hello();

}

async function testJson() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    // const superheroes = await response.json();
    let superheroes = await response.text();
    superheroes = JSON.parse(superheroes);
    populateHeader(superheroes);
    populateHeroes(superheroes);

    let myObj = { name: "Chris", age: 38 };
    console.log(myObj);
    console.log(JSON.stringify(myObj));
}

function populateHeader(obj) {
    const header = document.querySelector("header");
    const myh1 = document.createElement("h1");

    myh1.textContent = obj.squadName;
    header.appendChild(myh1);

    const mypara = document.createElement("p");
    mypara.textContent = `Hometown ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(mypara);
}

function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heros = obj.members;

    for (const hero of heros) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers:";

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);

    }
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

