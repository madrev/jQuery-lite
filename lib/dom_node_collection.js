class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(val) {
    if(val) this.elements.forEach(el => {el.innerHTML = val;});
    else return this.elements[0].innerHTML;
  }

  empty(){
    this.elements.forEach( el => {el.innerHTML = "";});
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

  attr(attrName, value) {
    if(value){
      this.elements.forEach(el => el.setAttribute(attrName, value));
    } else {
      return this.elements[0].getAttribute(attrName);
    }
  }

  addClass(newClass) {
    this.elements.forEach( el => el.classList.add(newClass) );
  }

  removeClass(className) {
    this.elements.forEach( el => el.classList.remove(className) );
  }

  children() {
    let result = [];
    this.elements.forEach ( el => {
      Array.from(el.children).forEach( child => {
        if(!result.includes(child)) result.push(child);
      });
    });
    return new DOMNodeCollection(result);
  }

  parent() {
    let result = [];
    this.elements.forEach (el => {
      let parent = el.parentNode;
      if(!result.includes(parent)) result.push(parent);
    });
    return new DOMNodeCollection(result);
  }

  find(selector) {
    let result = [];
    this.elements.forEach ( el => {
      Array.from(el.querySelectorAll(selector)).forEach( selected => {
        if(!result.includes(selected)) result.push(selected);
      });
    });
    return new DOMNodeCollection(result);
  }

  remove() {
    this.elements.forEach( el => {el.outerHTML = "";});
    this.elements = [];
  }
}

module.exports = DOMNodeCollection;
