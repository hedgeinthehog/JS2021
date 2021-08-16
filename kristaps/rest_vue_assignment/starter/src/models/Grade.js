// all business and app logic about model goes here
class Grade {
  #data;

  constructor(data) {
    this.#data = Object.assign({}, data);
  }

  // used for views or other application parts except storage
  getData() {
    return Object.assign({}, this.#data);
  }

  /**
   * @returns data what should be stored
   */
  getDataForStorage() {
    const dataCopy = Object.assign({}, this.#data);
    return dataCopy;
  }
}

module.exports = Grade;
