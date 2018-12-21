import React from 'react';
import Header from 'terra-clinical-header';
import ContentContainer from 'terra-content-container';
import SearchPanel from './searchPanel';
import SearchList from './searchList';
import CaseApi from '../api/mockCaseApi';

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {cases:[]};
      //this.handleSearchClick = th                      is.handleSearchClick.bind(this);
    }
    componentDidMount() {
      this.setState({cases: CaseApi.getAllCases()});
    }
    render() {
    	return(
    		<div>
          <SearchPanel />
          <br/>
          <SearchList cases={this.state.cases}/>
    		</div>
    		);
    }
  }


export default HomePage;
