const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log("Show-off your brand new outfit!");
    },
  };
  return outfit;
};

// console.log(createOutfit());

const tuesday = createOutfit("purple", "yellow");
console.log(tuesday);

const wednesday = createOutfit("white", "blue");
console.log(wednesday);

for (let key in tuesday) {
  console.log(key);
}

for (let key in tuesday) {
  console.log(tuesday[key]);
}

for (let key in tuesday) {
  console.log(key, tuesday[key]);
}

const outfitArray = [tuesday, wednesday];
for (let outfit of outfitArray) {
  console.log(outfit);
}

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
