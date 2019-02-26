import React from 'react';
import PropTypes from 'prop-types';
import Header from 'terra-clinical-header';
import ContentContainer from 'terra-content-container';
import SearchPanel from './searchPanel';
import SearchList from './searchList';
import { connect } from 'react-redux';
import * as CaseAction from '../actions';
import AdvSearchPanel from './advSearchPanel'
import {AppContext} from './appContext';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          display:'Show More'
      };
      this.toggleShowHide = this.toggleShowHide.bind(this);
    }
    toggleShowHide() {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
        display:prevState.isOpen?'Show More':'Hide'
      }));
    }

  componentDidMount() {
    if(this.props.prefixes=='undefined' || this.props.prefixes.length==0)
    {
      this.props.loadPrefixes();
    }
    if(this.props.prefixGrps=='undefined' || this.props.prefixGrps.length==0)
    {
      this.props.loadPrefixGrps();
    }
    if(this.props.pathologists=='undefined' || this.props.pathologists.length==0)
    {
      this.props.loadPathologists();
    }
    if(this.props.residents=='undefined' || this.props.residents.length==0)
    {
      this.props.loadResidents();
    }
  }

  render() {
    return(
     <AppContext.Consumer>
       {({params,onChange})=>(
  		<div>
        <SearchPanel
          loadCases={this.props.loadCases}
          handleChange={onChange}
          toggleShowHide={this.toggleShowHide}
          params={params}
          display={this.state.display}
        />
        {this.state.isOpen?
          (<AdvSearchPanel
            handleFilterChange={onChange}
            prefixes={this.props.prefixes}
            prefixGrps={this.props.prefixGrps}
            pathologist={this.props.pathologists}
            resident={this.props.residents}
            params={params}/>)
              :null}
        <label>{params.name}</label>
        <label>{params.case}</label>
        <label>{params.prefixId}</label>
        <label>{params.prefixGrpId}</label>
        <label>{params.pathologistId}</label>
        <label>{params.residentId}</label>
        <label>{params.outsideCase}</label>
        <SearchList cases={this.props.cases} />
  		</div>)}
    </AppContext.Consumer>
	 );
  }
}

  HomePage.propTypes = {
    cases: PropTypes.array.isRequired,
    prefixes:PropTypes.array.isRequired,
    prefixGrps:PropTypes.array.isRequired,
    pathologists:PropTypes.array.isRequired,
    residents:PropTypes.array.isRequired,
    loadCases: PropTypes.func.isRequired,
    loadPrefixes: PropTypes.func.isRequired,
    loadPrefixGrps: PropTypes.func.isRequired,
    loadPathologists: PropTypes.func.isRequired,
    loadResidents: PropTypes.func.isRequired
  };

  function mapStateToProps (state,ownProps){
    return {
      cases:state.cases,
      prefixes:state.prefixReducer,
      prefixGrps:state.groupReducer,
      pathologists:state.pathReducer,
      residents:state.resiReducer
    };
  }
  const mapDispatchToProps = (dispatch) => ({
      loadCases: (params)=> dispatch(CaseAction.loadCases(params)),
      loadPrefixes: ()=> dispatch(CaseAction.loadPrefixes()),
      loadPrefixGrps: ()=> dispatch(CaseAction.loadPrefixGrps()),
      loadPathologists: ()=> dispatch(CaseAction.loadPathologists()),
      loadResidents: ()=> dispatch(CaseAction.loadResidents())
      //loadCases: bindActionCreators(CaseAction.loadCases(),dispatch)
      //import bindActionCreators from 'redux'
  });

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
