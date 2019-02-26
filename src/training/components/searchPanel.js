import React from 'react';
import Button from 'terra-button';
import Radio from 'terra-form-radio/lib/Radio';
import Input from 'terra-form-input';
import PropTypes from 'prop-types';
import AdvSearchPanel from './advSearchPanel'

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  nameDisable:false,
                    message: '',
                    isOpen: false,
                    display:'Show More'};

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  /*  this.toggleShowHide = this.toggleShowHide.bind(this);*/
  }
  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      display:prevState.isOpen?'Show More':'Hide'
    }));
  }

  handleOptionChange(event) {
    this.setState(prevState => ({
      nameDisable: !prevState.nameDisable,
      message:''
    }));
    this.props.handleChange(event);

  }
  handleSearchClick(event){
    if(!this.state.nameDisable && this.props.params.name.length==0)
    {
      this.setState({message :'Enter patient name to search'});
      return;
    }
    else if(this.state.nameDisable && this.props.params.case.length==0)
    {
      this.setState({message :'Enter case to search'});
      return;
    }
    else
    {
      this.setState({message :''});
    }
  //  this.props.handleClick();
  this.props.loadCases(this.props.params);
  }
  render() {
    return(
  		<div>
        <div className="div-main">
          <div className="div-row">
            <Radio id="opname" labelText="Name :" name="multiple-group"
                 defaultChecked
                 onChange={this.handleOptionChange} />
            <Input name="txtname"
                 value={this.props.params.name}
                 disabled={this.state.nameDisable}
                 className="txtStyle"
                 onChange={this.props.handleChange} />
               {this.state.message && !this.state.nameDisable && <label className="error">
                  {this.state.message}
                        </label>}
          </div>
          <div className="div-row">
            <Radio id="opcase" labelText="Case:" name="multiple-group"
                 onChange={this.handleOptionChange} />
               <Input name="txtcase"
                 value={this.props.params.case}
                 className="txtStyle"
                 disabled={!this.state.nameDisable}
                 onChange={this.props.handleChange} />
             {this.state.message && this.state.nameDisable && <label className="error">
                {this.state.message}
                      </label>}
          </div>
        </div>

        <div className="div-center">
          <Button className="but-center"
            id="cmdSearch" text="Search"
                  variant="emphasis"
                 onClick = {this.handleSearchClick}/>
        </div>
        <div className="div-center">
          <label className="linkLabel"
            onClick={this.props.toggleShowHide}>{this.props.display}</label>
        </div>
      </div>
  		);
  }
}


export default SearchPanel;
