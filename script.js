const student = {
  name: "John"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

