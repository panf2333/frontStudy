function t1() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  console.log(fetchPromise);

  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });

  console.log("Started request…");
}

function t2() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });
}

function t3() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });
}

function t4() {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    });
}

function t5() {
  const fetchPromise = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
}

function testPromiseAll() {
  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
}

function testPromiseAllReject() {
  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "bad://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });
}

function testPromiseAny() {
  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

}

function testPromiseAnyReject() {
  const fetchPromise1 = fetch(
    "bad://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "bad://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "bad://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  // promiseStudy.js:169 Failed to fetch: AggregateError: All promises were rejected

  // const fetchPromise1 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  // );
  // const fetchPromise2 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  // );
  // const fetchPromise3 = fetch(
  //   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  // );

  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

}

async function testAsyncAndAwait() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      // "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      "bad://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

function testAsyncAndAwaitReturn() {
  const promise = fetchProducts();
  promise
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });
}

async function fetchProducts() {
  const response = await fetch(
    // "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    "bad://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// implement a promise based api
const alarmName = document.querySelector("#alarmName");
const alarmDelay = document.querySelector("#alarmDelay");
const outputAlarm = document.querySelector("#outputAlarm");
const setAlarmButton = document.querySelector("#set-alarm");
const setAlarm2Button = document.querySelector("#set-alarm2");
const setAlarm3Button = document.querySelector("#set-alarm3");

function setAlarm() {
  setTimeout(() => {
    outputAlarm.textContent = "Wake up!";
  }, 1000);
}

function setAlarm2(person, delay) {
  return new Promise((resolve, reject) => {
    console.log(delay);
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }

    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  })
}

setAlarmButton.addEventListener("click", setAlarm);
setAlarm2Button.addEventListener("click", () => {
  setAlarm2(alarmName.value, alarmDelay.value)
    .then((message) => { outputAlarm.textContent = message })
    .catch((error) => { outputAlarm.textContent = `Couldn't set alarm: ${error}` });
});

setAlarm3Button.addEventListener("click", async () => {
  try {
    const message = await setAlarm2(alarmName.value, alarmDelay.value);
    outputAlarm.textContent = message;
  } catch (error) {
    outputAlarm.textContent = `Couldn't set alarm: ${error}`;
  }
});


