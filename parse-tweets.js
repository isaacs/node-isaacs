const tweets = require('./tweet.js')
for (const {tweet} of tweets) {
  if (tweet.retweeted_status_id || tweet.full_text.match(/^RT @/) || tweet.in_reply_to_user_id)
    continue
  console.log(tweet.full_text
    .replace(/@[^ ]+ /, '')
    .replace(/\n/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  )
}
