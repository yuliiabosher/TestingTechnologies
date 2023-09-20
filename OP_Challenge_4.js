class User {
  constructor(numberOfArticles) {
    this._numberOfArticles = numberOfArticles;
  }
  get numberOfArticles() {
    return this._numberOfArticles;
  }

  set numberOfArticles(newNumberOfArticles) {
    this._numberOfArticles = newNumberOfArticles;
  }
  calcScores() {
    return this._numberOfArticles * 0;
  }
}
class Author extends User {
  calcScores() {
    return this._numberOfArticles * 10 + 20;
  }
}
class Editor extends User {
  calcScores() {
    return this._numberOfArticles * 6 + 15;
  }
}
const author = new Author(8);
console.log(author.calcScores());
const editor = new Editor(15);
console.log(editor.calcScores());
