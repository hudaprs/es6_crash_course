let array = [
  1,
  2,
  3,
  4
];

let set = new Set(array);

// Add different type data
set.add('100');

// Add object
set.add({
  name: 'Huda Prasetyo'
});

// Delete prop
set.delete('100');

// Clear object
set.clear();

// Size
//set.size

console.log(set);