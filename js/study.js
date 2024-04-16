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

function greet(){
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
}
