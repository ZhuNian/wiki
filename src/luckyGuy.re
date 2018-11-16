open Js.Array;

type t = string;

let arrayAt = (list: array(t), idx: int) =>
  if (idx < Js.Array.length(list)) {
    list[idx];
  } else {
    "";
  };
let filterList = (originList: array(t), toBeFilteredList: array(t)) =>
  toBeFilteredList
  |> reduce(
       (res, item) => {
         if (!includes(item, originList)) {
           let _ = push(item, res);
           ();
         };
         res;
       },
       [||],
     );

let findLastDuplicateItem = (originList: array(t), toBeIncluded: array(t)) =>
  originList
  |> reverseInPlace
  |> find(item => indexOf(item, toBeIncluded) != (-1));

let rec luckyGuy = (~latestList: array(t), ~userList: array(t)) => {
  let userlistLength = length(userList);

  switch (userlistLength) {
  | len when len <= 1 => arrayAt(userList, 0)
  | _ =>
    let lastedList__ = slice(~start=0, ~end_=userlistLength, latestList);
    let lastedListLength = length(lastedList__);
    let usersNotIncluded = filterList(lastedList__, userList);

    switch (length(usersNotIncluded)) {
    | 0 =>
      switch (findLastDuplicateItem(lastedList__, userList)) {
      | Some(item) => item
      | None => Js.Exn.raiseError("findLastDuplicateItem error")
      }
    | 1 => arrayAt(usersNotIncluded, 0)
    | _ =>
      if (lastedListLength < userlistLength) {
        arrayAt(usersNotIncluded, 0);
      } else {
        luckyGuy(
          ~latestList=
            slice(
              ~start=userlistLength,
              ~end_=length(latestList),
              latestList,
            ),
          ~userList=usersNotIncluded,
        );
      }
    };
  };
};
