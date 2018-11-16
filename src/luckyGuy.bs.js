// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function arrayAt(list, idx) {
  if (idx < list.length) {
    return Caml_array.caml_array_get(list, idx);
  } else {
    return "";
  }
}

function filterList(originList, toBeFilteredList) {
  return toBeFilteredList.reduce((function (res, item) {
                if (!originList.includes(item)) {
                  res.push(item);
                }
                return res;
              }), /* array */[]);
}

function findLastDuplicateItem(originList, toBeIncluded) {
  return Js_primitive.undefined_to_opt(originList.reverse().find((function (item) {
                    return toBeIncluded.indexOf(item) !== -1;
                  })));
}

function luckyGuy(_latestList, _userList) {
  while(true) {
    var userList = _userList;
    var latestList = _latestList;
    var userlistLength = userList.length;
    if (userlistLength <= 1) {
      return arrayAt(userList, 0);
    } else {
      var lastedList__ = latestList.slice(0, userlistLength);
      var lastedListLength = lastedList__.length;
      var unUsedUser = filterList(lastedList__, userList);
      var match = unUsedUser.length;
      if (match !== 0) {
        if (match !== 1 && lastedListLength >= userlistLength) {
          _userList = unUsedUser;
          _latestList = latestList.slice(userlistLength, latestList.length);
          continue ;
        } else {
          return arrayAt(unUsedUser, 0);
        }
      } else {
        var match$1 = findLastDuplicateItem(lastedList__, userList);
        if (match$1 !== undefined) {
          return match$1;
        } else {
          return Js_exn.raiseError("findLastDuplicateItem error");
        }
      }
    }
  };
}

exports.arrayAt = arrayAt;
exports.filterList = filterList;
exports.findLastDuplicateItem = findLastDuplicateItem;
exports.luckyGuy = luckyGuy;
/* No side effect */