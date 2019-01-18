import React from 'react';
import Button from 'terra-button';
import Radio from 'terra-form-radio/lib/Radio';
import Input from 'terra-form-input';
import PropTypes from 'prop-types';

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  name: '',
                    case: '',
                    nameDisable:false,
                    caseDisable:true,
                    message: ''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCaseChange = this.handleCaseChange.bind(this);
    this.handleOpNameChange = this.handleOpNameChange.bind(this);
    this.handleOpCaseChange = this.handleOpCaseChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleCaseChange(event) {
    this.setState({ case: event.target.value });
  }
  handleOpNameChange(event) {
    this.setState({ name: '', case: '' , caseDisable: true, nameDisable: false });
  }
  handleOpCaseChange(event) {
    this.setState({ name: '', case: '' , nameDisable: true, caseDisable: false});
  }
  handleSearchClick(event){
    if(!this.state.nameDisable && this.state.name.length==0)
    {
      this.setState({message :'Enter patient name to search'});
      return;
    }
    else if(!this.state.caseDisable && this.state.case.length==0)
    {
      this.setState({message :'Enter case to search'});
      return;
    }
    else
    {
      this.setState({message :''});
    }
    this.props.handleClick();
  }
  render() {
    const divRelStyle = {position:'relative', width:'90%', marginLeft:'20px'};
    const buttonStyle = { width: '30%', marginLeft: '500px'};
    const textStyle = {marginLeft: '20px', width: '300px'};
    const divStyle = {margin: '5px', display:'flex', flexDirection:'row'};
    const messageStyle = {color: 'red',paddingLeft:'10px'};
    return(
  		<div>
        <div style={divStyle}>
          <Radio id="opname" labelText="Name :" name="multiple-group"
               defaultChecked
               onChange={this.handleOpNameChange} />
          <Input name="txtname"
               value={this.state.name}
               disabled={this.state.nameDisable}
               style={textStyle}
               onChange={this.handleNameChange} />
        </div>
        <div style={divStyle}>
          <Radio id="opcase" labelText="Case  :" name="multiple-group"
               onChange={this.handleOpCaseChange} />
          <Input name="txtname"
               value={this.state.case}
               style={textStyle}
               disabled={this.state.caseDisable}
               onChange={this.handleCaseChange} />
        </div>
        <div style={divRelStyle}>
          <Button id="cmdSearch" text="Search" variant="emphasis"
                 onClick = {this.handleSearchClick}
                 style={{position:'absolute', right:'0'}} />
          <label style={messageStyle}>
                   {this.state.message}
                 </label>
        </div>

      </div>
  		);
  }
}


export default SearchPanel;
