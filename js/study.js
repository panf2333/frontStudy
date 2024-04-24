function stringTest() {
    const single = '单引号';
    const double = "双引号";
    const backtick = `反引号`;

    console.log(single);
    console.log(double);
    console.log(backtick);

    console.log(single + "," + double);
    console.log(`${single}, ${double}`)

    const goodQuotes1 = 'She said "I think so!"';
    const goodQuotes2 = `She said "I'm not going in there!"`;
    const bigmouth = 'I\'ve got no right to take my place…';
    console.log(bigmouth);

    const name = "Front";
    const number = 123;
    console.log(name + number);
    console.log(typeof (name + number));
}

function numericAndStringConvert() {
    const myString = "123";
    console.log(Number(myString));
    console.log(typeof Number(myString));

    const myNumber = 123;
    const convertNumericToString = String(myNumber);
    console.log(`${typeof convertNumericToString}: ${convertNumericToString}`);

}

function backtickTest() {
    const name = "Chris";
    const greeting = `Hello ${name}`;
    console.log(greeting);

    const age = 18;
    const introduce = `Hi, my name is ${name}, and I am ${age} years old`;
    console.log(introduce);

    const song = "Fight the Youth";
    const score = 9;
    const hightestScore = 10;
    const output = `I like the song ${song}. I gave it a score of ${score / hightestScore * 100}%.`;
    console.log(output);

    const newLine = `One day you finally knew
    what you had to do,\n and began,`;
    console.log(newLine);
}

stringInScriptButton = document.querySelector("#stringInScriptButton");
stringInScriptButton.addEventListener("click", greet);

function greet() {
    greeting = document.querySelector("#greeting");
    const name = prompt("What's your name");
    greeting.textContent = `Hello ${name}, nice to meet you`;
}


function stringMethodTest() {
    const browserType = "Edge dge";
    console.log(browserType.length);
    console.log(browserType[0]);
    console.log(browserType[browserType.length - 1]);

    let message = browserType.includes("dge") ? "include dge" : "not include dge";
    console.log(message);

    if (browserType.startsWith("Ed")) console.log("start Ed");
    if (browserType.endsWith("ge")) console.log("end ge");

    let first = browserType.indexOf("dge");
    console.log(first);
    console.log(browserType.indexOf("dge", first + 1));

    console.log(browserType.slice(1, 4));
    console.log(browserType.slice(1));

    console.log(browserType.toLocaleLowerCase());
    console.log(browserType.toUpperCase());

    console.log(browserType.replace("dge", "xxx"));
    console.log(browserType.replaceAll("dge", "xxx"));

    const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
    let list = [];
    for (let city of cities) {
        // write your code just below here
        city = city.toLowerCase();
        city = city[0].toUpperCase() + city.slice(1);
        list.push(city);
    }
    console.log(list);

    list = [];
    const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
        'GNF576746573fhdg4737dh4;Greenfield',
        'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
        'SYB4f65hf75f736463;Stalybridge',
        'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

    for (let station of stations) {
        // write your code just below here

        let code = station.slice(0, 3);
        let humanReadable = station.slice(station.indexOf(';') + 1);
        list.push(`${code}: ${humanReadable}`);
    }
    console.log(list);
}


function testArray() {
    const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
    console.log(shopping.length);
    console.log(shopping[0]);
    console.log(shopping);
    shopping[0] = "testChange";
    console.log("======after change:" + shopping);

    const random = ["tree", 795, [0, 1, 2]];
    console.log(random[2][2]);

    const birds = ["Parrot", "Falcon", "Owl"]
    console.log(birds.indexOf("Falcon"))
    console.log(birds.indexOf("aaa"))

    const cities = ["Manchester", "Liverpool"];
    cities.push("Cardiff");
    console.log(cities);
    console.log(cities.push("Bradford", "Brighton"));
    console.log(cities);

    cities.unshift("Edinburgh");
    console.log("unshift: " + cities);

    let removeItem = cities.pop();
    console.log("pop: " + removeItem);
    console.log("after pop: " + cities);

    removeItem = cities.shift();
    console.log("shift: " + removeItem);
    console.log("after shift: " + cities);

    let index = cities.indexOf("Liverpool");
    if (index != -1) {
        console.log(cities.splice(index, 1, "test"));
        console.log(cities);
    }

    for (const bird of birds) {
        console.log(bird)
    }

    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.map(double);
    console.log(numbers.map(double));

    console.log(numbers.filter(num => num > 4));

    const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
    const newarray = data.split(",");
    console.log(newarray);
    console.log(newarray.join(":"));
}

function double(number) {
    return number * 2;
}


arrayPrintProductsButton = document.querySelector("#arrayPrintProductsButton");
arrayPrintProductsButton.addEventListener("click", arrayPrintProducts);

function arrayPrintProducts() {
    const list = document.querySelector('.output ul');
    const totalBox = document.querySelector('.output p');
    list.innerHTML = '';
    totalBox.textContent = '';
    // number 1
    const products = ['Underpants:6.99',
        'Socks:5.99',
        'T-shirt:14.99',
        'Trousers:31.99',
        'Shoes:23.99'];


    let totalPrice = 0;
    for (let product of products) {
        let item = product.split(":");
        let productName = item[0];
        let price = Number(item[1]);
        totalPrice += price;

        // number 5
        let itemText = `${productName} — $${price}`;
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    }

    // number 6

    totalBox.textContent = 'Total: $' + totalPrice.toFixed(2);
}


const list = document.querySelector('.top5Search ul');
const searchInput = document.querySelector('.top5Search input');
const searchBtn = document.querySelector('.top5Search button');

list.innerHTML = '';

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
    // we will only allow a term to be entered if the search input isn't empty
    let nowVal = searchInput.value;
    console.log(nowVal)
    if (searchInput.value !== '') {
        // number 1
        myHistory.unshift(nowVal)
        console.log(myHistory)
        // empty the list so that we don't display duplicate entries
        // the display is regenerated every time a search term is entered.
        list.innerHTML = '';

        // loop through the array, and display all the search terms in the list
        for (const itemText of myHistory) {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= MAX_HISTORY) {
            // number 2
            myHistory.pop();
        }

        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = '';
        searchInput.focus();
    }
}

