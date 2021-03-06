import React from 'react';
import classnames from 'classnames';
import RavioliIcon from './icon';
import RavioliCounter from './counter';
import propsfilter from '../helpers/propsfilter';


export default class RavioliText extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: props.value };
  }

  handleChange(event){
    let newValue = event.target.value;
    this.setState({ value: newValue });
    if(this.props.onChange) this.props.onChange.call(null, newValue);
  }

  componentWillReceiveProps(props){
    this.setState({ value: props.value });
  }

  empty(value){
    return value === null || value === undefined || value === '';
  }

  render(){
    const otherAttrs = propsfilter(this.props, RavioliText.propTypes);
    let className = classnames('ravioli-text-wrapper', {
      'ravioli--is-required': this.props.required,
      'ravioli--has-counter': this.props.counter
    });

    return (
      <div {...otherAttrs} className={className}>
        <input
          className='ravioli-text'
          type='text'
          value={this.props.value}
          onChange={this.handleChange.bind(this)}/>
        {this.renderRequiredIcon()}
        {this.renderPlaceholder()}
        {this.renderCounter()}
      </div>
    );
  }

  renderRequiredIcon(){
    if(this.props.required && this.empty(this.state.value))
      return <RavioliIcon type='warn' className='ravioli-text-required-icon'/>;
  }

  renderPlaceholder(){
    if(this.props.placeholder && this.empty(this.state.value))
      return <span className='ravioli-placeholder'>{this.props.placeholder}</span>;
  }

  renderCounter(){
    if(this.props.counter)
      return (
        <RavioliCounter
          value={this.state.value}
          max={this.props.counterMax}
          subtract={this.props.counter === 'subtract'}/>
      );
  }
}

RavioliText.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  placeholder: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  onChange: React.PropTypes.func
};

RavioliText.defaultProps = {
  placeholder: 'Type something'
};
