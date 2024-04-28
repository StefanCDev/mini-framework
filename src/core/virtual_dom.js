// mini-framework/src/core/virtual_dom.js

class Element {
    constructor(tag, attrs, children) {
      this.tag = tag;
      this.attrs = attrs;
      this.children = children;
    }
  
    render() {
      const element = document.createElement(this.tag);
  
      for (const [attr, value] of Object.entries(this.attrs)) {
        element.setAttribute(attr, value);
      }
  
      for (const child of this.children) {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child.render());
        }
      }
  
      return element;
    }
  }
  
  export default Element;
  