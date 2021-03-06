/* global require, module, global, document */
var jsdom = require('jsdom');

var mockDOM = () => {
  if(!global.document){
    global.document = jsdom.jsdom();
    global.window = document.defaultView;
    global.navigator = { userAgent: 'node.js' };
  }
};

mockDOM();


var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');


module.exports = {
  mockDOM: mockDOM,
  getDOMNode: ReactDOM.findDOMNode,
  findByClass: ReactTestUtils.findRenderedDOMComponentWithClass,
  findAllByClass: ReactTestUtils.scryRenderedDOMComponentsWithClass,
  findByTag: ReactTestUtils.findRenderedDOMComponentWithTag,
  findAllByTag: ReactTestUtils.scryRenderedDOMComponentsWithTag,
  findByType: ReactTestUtils.findRenderedComponentWithType,
  findAllByType: ReactTestUtils.scryRenderedComponentsWithType,
  filterAll: ReactTestUtils.findAllInRenderedTree,
  click: ReactTestUtils.Simulate.click,
  change: ReactTestUtils.Simulate.change,
  focus: ReactTestUtils.Simulate.focus,
  keyDown: ReactTestUtils.Simulate.keyDown,

  keydown: function(element, code){
    return ReactTestUtils.Simulate.keyDown(element, {which: code});
  },

  input: function(element, value){
    return ReactTestUtils.Simulate.input(element, {
      target: {value: value}
    });
  },

  render: function(element, props, child){
    return ReactTestUtils.renderIntoDocument(
      React.createElement(element, props, child)
    );
  }
};
