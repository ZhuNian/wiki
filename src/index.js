var cheerio = require('cheerio')
var request = require('request')

function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  // html = '<div>hello<span>world</span></div>'
  const $ = cheerio.load(html, { ignoreWhitespace: true });
  console.log($('span'));
  // console.log($(".s-ctner-contents").text())
}

var domain = 'https://www.baidu.com'
request(domain, gotHTML)