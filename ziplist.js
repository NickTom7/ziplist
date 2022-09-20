const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(first, second) {
  const list = [];
  for (let i = 0; i < first.length; i++) {
    list.push(first[i]);
    list.push(second[i]);
  }
  return list;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second) {
  const list = _.flatten(_.zip(first, second));
  return list;
}

console.log(zipListTheSimpleWay(list1, list2));
