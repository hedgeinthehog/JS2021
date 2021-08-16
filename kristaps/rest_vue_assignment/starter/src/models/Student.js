// all business and app logic about model goes here
class Student {
  #data;

  constructor(data) {
    this.#data = Object.assign({}, data, {
      username: this._getUsername(data),
    });
  }

  // business logic example
  _getUsername({ first_name, last_name }) {
    return `${first_name}_${last_name}`;
  }

  // used for views or other application parts except storage
  getData() {
    return Object.assign({}, this.#data);
  }

  setId(id) {
    this.#data.id = id;
  }

  /**
   * @returns data what should be stored
   */
  getDataForStorage() {
    const dataCopy = Object.assign({}, this.#data);
    delete dataCopy.username;
    return dataCopy;
  }
}

module.exports = Student;
