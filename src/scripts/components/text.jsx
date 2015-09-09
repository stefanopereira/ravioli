/* global module, require */
var React = require('react');

var GnocchiText = React.createClass({
  getDefaultProps: function(){
    return {
      placeholder: 'Type something'
    };
  },

  render: function(){
    return (
      <input
        className='gnocchi-text'
        type='text'
        value={this.props.value}
        placeholder={this.props.placeholder}
        onKeyPress={this.props.onKeyPress}
        onKeyDown={this.props.onKeyDown}
        onInput={this.props.onInput}
        onChange={this.props.onChange} />
    );
  }
});

module.exports = GnocchiText;
