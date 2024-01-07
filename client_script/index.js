const fetch = require('node-fetch');

require('dotenv').config();

const SERVER_URL = process.env.SERVER_ONE_URL;

async function run() {
  try {
    for(let i = 0; i < 1000; i++) {
      const res = await fetch(`${SERVER_URL}/avg-grades`);
      const parsed = await res.json();

      console.log(`${i} - result ${JSON.stringify(parsed)}`);
    }
  } catch (err) {
    console.log('here-err', err);
  }
}

run();