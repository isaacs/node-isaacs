const parse = require('csv-parse')
const parser = parse({
  columns: true,
})

parser.on('data', obj => {
  if (obj.retweeted_status_id || obj.text.match(/^RT @/) || obj.in_reply_to_user_id)
    return
  console.log(obj.text
    .replace(/@[^ ]+ /, '')
    .replace(/\n/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
  )
})

const { createReadStream } = require('fs')
createReadStream(__dirname + '/tweets.csv').pipe(parser)
