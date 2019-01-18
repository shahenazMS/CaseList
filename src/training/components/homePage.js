import React from 'react';
import PropTypes from 'prop-types';
import Header from 'terra-clinical-header';
import ContentContainer from 'terra-content-container';
import SearchPanel from './searchPanel';
import SearchList from './searchList';
import { connect } from 'react-redux';
import * as CaseAction from '../actions';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
    /*  this.state = {cases:[]};*/
      this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {

    }
    handleSearch(event) {
      this.props.loadCases();
    }
    render() {
      return(
    		<div>
          <SearchPanel handleClick={this.handleSearch}/>
          <br/>
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
      loadCases: ()=> dispatch(CaseAction.loadCases())
      //loadCases: bindActionCreators(CaseAction.loadCases(),dispatch)
      //import bindActionCreators from 'redux'
  });

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
