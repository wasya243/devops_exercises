const fetch = require('node-fetch');

const SERVER_URL = 'http://3.250.44.184:3000';

async function run() {
  try {
    for(let i = 0; i < 1000; i++) {
      const res = await fetch(SERVER_URL);
      const parsed = await res.text();

      console.log(`${i} - text ${parsed}`);
    }
  } catch (err) {
    console.log('here-err', err);
  }
}

run();