import React from 'react';
import PropTypes from 'prop-types';
import Header from 'terra-clinical-header';
import ContentContainer from 'terra-content-container';
import SearchPanel from './searchPanel';
import SearchList from './searchList';
import { connect } from 'react-redux';
import * as CaseAction from '../actions';
import AdvSearchPanel from './advSearchPanel'

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        params:{
          name: '',
          case: '',
          pathologistId:0,
          residentId:0,
          prefixId: 0,
          prefixGrpId: 0,
          outsideCase:''},
          isOpen: false,
          display:'Show More'
      };
      this.handleSearch = this.handleSearch.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.toggleShowHide = this.toggleShowHide.bind(this);
    }
    toggleShowHide() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        display:prevState.isOpen?'Show More':'Hide'
      }));
    }
  handleFilterChange(event){
    var field;
    switch(event.target.name){
      case 'txtname':
        field='name';
        break;
      case 'txtcase':
        field='case';
        break;
      case 'txtoutsidecase':
        field='outsideCase';
        break;
      case 'prefix':
        field='prefixId';
        break;
      case 'prefixgroup':
        field='prefixGrpId';
        break;
      case 'pathologist':
        field='pathologistId';
        break;
      case 'resident':
        field='residentId';
        break;
      case 'multiple-group':
        if(event.target.id=='opname')
          field='case';
        else
          field='name';
        break;
      default:
        field='';
    }
    if (field.length>0){
      let newParam = Object.assign({},this.state.params);
      newParam[field] = event.target.value;
      this.setState({params:newParam});
    }
  }

  componentDidMount() {

  }
  handleSearch(event) {
    this.props.loadCases(this.state.params);
  }
  render() {
    const prefixes = [
      {value:1,text:" G"},
      {value:2,text:"JP"},
      {value:3,text:"SP"}];
    const prefixGrps = [
      {value:11,text:"G"},
      {value:12,text:"S"},
      {value:13,text:"P"}];
    const pathologist=[
      {value:21,text:"Kiran Vankadaru"},
      {value:22,text:"Raghvendra Mirajkar"},
      {value:23,text:"Archana Narasimha"}]
    const resident=[
      {value:31,text:"Adarsh Varadaraju"},
      {value:32,text:"Martin Slimmer"},
      {value:33,text:"Paul Sommer"}]

    return(
  		<div>
        <SearchPanel
          handleClick={this.handleSearch}
          handleChange={this.handleFilterChange}
          toggleShowHide={this.toggleShowHide}
          name={this.state.params.name}
          case={this.state.params.case}
          display={this.state.display}
        />
        {this.state.isOpen?
          (<AdvSearchPanel
            handleFilterChange={this.handleFilterChange}
            prefixes={prefixes}
            prefixGrps={prefixGrps}
            pathologist={pathologist}
            resident={resident}
            params={this.state.params}/>)
              :null}
      <SearchList cases={this.props.cases} />
  		</div>
  		);
  }
}

  HomePage.propTypes = {
    cases: PropTypes.array.isRequired,
    loadCases: PropTypes.func.isRequired
  };

  function mapStateToProps (state,ownProps){
    return {
      cases:state.cases
    };
  }
  const mapDispatchToProps = (dispatch) => ({
      loadCases: (params)=> dispatch(CaseAction.loadCases(params))
      //loadCases: bindActionCreators(CaseAction.loadCases(),dispatch)
      //import bindActionCreators from 'redux'
  });

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
