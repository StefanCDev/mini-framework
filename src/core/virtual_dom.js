// mini-framework/src/core/virtual_dom.js

class Element {
    constructor(tag, attrs, children) {
      this.tag = tag;
      this.attrs = attrs;
      this.children = children;
    }
  
    render() {
      console.log("Rendering... ");
      const element = document.createElement(this.tag);
  
      for (const [attr, value] of Object.entries(this.attrs)) {
        element.setAttribute(attr, value);
      }
  
      if (this.children) {
        for (const child of this.children) {
          if (typeof child === Element) {
            return child.render();

          } else if (typeof child === 'string') {
            return document.createTextNode(child);
          }
        }
      }
    }
  }
  
  export default Element;
  