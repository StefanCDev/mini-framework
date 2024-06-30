// mini-framework/src/index.js

// core/index.js
import DataBinding from './data_binding';
import Router from './routing';
import StateManagement from './state_management';
import Templating from './templating';

const dataBinding = new DataBinding();
const router = new Router();
const stateManagement = new StateManagement();
const templating = new Templating();



export { Element, DataBinding, Router, EventHandling, StateManagement };
