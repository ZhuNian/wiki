const cheerio = require('cheerio')
const request = require('request')
const LuckGuy = require('./luckyGuy.bs')

const userList = [
  '姜莱',
  '吴文苑',
  '王珂珂',
  '郑捷',
  '杨帆',
  '陈力',
  '程凯',
  '张逸潇',
  '施浩宏',
  '张俊辉',
  '周小平',
  '刘刚',
  '王丛伟',
  '祝念',
  '汪苏宁',
  '王洁琼',
  '周伦',
  '陈萍圆',
]


request('http://wiki.ybybzj.net/kb/wiki_contest', (err, resp, html) => {
  if (err) return console.error(err)
  const $ = cheerio.load(html, {
    ignoreWhitespace: true
  });
  const latestList = $('tr td:first-child', 'table').map(function () {
    return $(this).text()
  }).get();

  console.log(LuckGuy.luckyGuy(latestList, userList))
})

