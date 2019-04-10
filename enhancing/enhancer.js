module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return {
    ...item,
    enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
  };
}

function fail(item) {
  let itemCopy = { ...item };
  if (item.enhancement < 15) {
    itemCopy.durability -= 5;
  }
  if (item.enhancement > 15) {
    itemCopy.durability -= 10;
  }
  if (item.enhancement > 16) {
    itemCopy.enhancement -= 1;
  }
  return itemCopy;
}

function repair(item) {
  return { ...item, durability: item.durability < 100 ? 100 : 100 };
}

function get(item) {
  return { ...item };
}
