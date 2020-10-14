const functions = require("firebase-functions");
const Twitter = require("twitter");

async function favTweets(client, key, num) {
  try {
    const tweets = await client.get("search/tweets", {
      q: key,
      lang: "ja",
      result_type: "recent",
      count: num,
    });
    const targets = tweets.statuses;

    for (let target of targets) {
      try {
        const result = await client.post("favorites/create", {
          id: target.id_str,
        });
        console.log(result);
      } catch (err) {}
    }
  } catch (err) {
    console.error(err);
  }
}

exports.favTweets = functions.pubsub
  .schedule("every 10 minutes")
  .onRun(async (context) => {
    const client = new Twitter({
      api_key: functions.config().twitter.api_key,
      api_secret: functions.config().twitter.api_secret,
      access_token_key: functions.config().twitter.access_token_key,
      access_token_secret: functions.config().twitter.access_token_secret,
    });
    favTweets(client, "#神戸プロアカ", 5);
    return null;
  });
