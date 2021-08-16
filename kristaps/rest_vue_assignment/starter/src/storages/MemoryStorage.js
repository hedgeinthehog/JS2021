const DATA = require("../../data");

class MemoryStorage {
  // private variable holding data, indexed by id for faster lookup by id
  #data = {};

  constructor(modelName) {
    const initialData = DATA[modelName] || [];
    initialData.forEach((item) => {
      this.#data[item.id] = item;
    });
  }

  getAll() {
    // converts indexed object to array with collection items
    return Object.values(this.#data);
  }

  getById(id) {
    return this.#data[id];
  }

  create(data) {
    const id = Date.now();
    const storedData = Object.assign({}, data, { id });
    this.#data[id] = storedData;
    return storedData;
  }

  update(data) {
    const { id } = data;
    this.#data[id] = data;
    return data;
  }

  delete(id) {
    delete this.#data[id];
    return;
  }
}

module.exports = MemoryStorage;
