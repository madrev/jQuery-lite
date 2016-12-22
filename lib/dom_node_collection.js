class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(val) {
    if(val) this.elements.forEach(el => {el.innerHTML = val;});
    else return this.elements[0].innerHTML;
  }

  empty(){
    this.html(" ");
  }

  append(arg){
    let elements = [];
    if(arg instanceof DOMNodeCollection) elements = arg.elements;
    else elements = [arg];
    elements.forEach( inputEl => {
      this.elements.forEach (collectionEl => {
        if(typeof inputEl === 'string') collectionEl.innerHTML += inputEl;
        else collectionEl.innerHTML += inputEl.outerHTML;
      });
    });
  }
}

module.exports = DOMNodeCollection;
