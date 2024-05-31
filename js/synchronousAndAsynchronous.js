const MAX_PRIME = 10 ** 6;

const random = (max) => Math.floor(Math.random() * max);

function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = random(MAX_PRIME);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

// ===================
function doStep1(init) {
    return init + 1;
}

function doStep2(init) {
    return init + 2;
}

function doStep3(init) {
    return init + 3;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

// =================== call backs
function doStep11(init, callback) {
    callback(init + 1);
}

function doStep12(init, callback) {
    callback(init + 2);
}

function doStep13(init, callback) {
    callback(init + 3);
}

function doOperation2() {
    let result = 0;
    doStep11(0, (result1) => {
        doStep12(result1, (result2) => {
            doStep13(result2, (result3) => {
                console.log(`result: ${result3}`);
            })
        })
    });
}
// ===================



const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

const generate = document.querySelector("#generate");
const reload = document.querySelector("#reload");

const log = document.querySelector(".event-log");
const xhr = document.querySelector("#xhr");
const reload2 = document.querySelector("#reload2");

generate.addEventListener("click", () => {
    const primes = generatePrimes(quota.value);
    output.textContent = `Finished generating ${quota.value} primes!`;
})

reload.addEventListener("click", () => {
    document.location.reload();
})

xhr.addEventListener("click", () => {
    log.textContent = "";
    const xml = new XMLHttpRequest();
    xml.addEventListener("loadend", () => {
        log.textContent = `${log.textContent} Finished with status: ${xml.status}`;
    })

    xml.open("GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");

    xml.send();
    log.textContent = `${log.textContent}Started XHR request\n`;
});

reload2.addEventListener("click", () => {
    log.textContent = "";
    document.location.reload();
})



