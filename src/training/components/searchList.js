
import React from 'react';
import Table from 'terra-table/lib/Table';
import PropTypes from 'prop-types';
import SearchListRow from './searchListRow';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSearchClick = th                      is.handleSearchClick.bind(this);
  }

  render() {
    const Style = {marginLeft: '20px', marginRight: '50px'};
    return(
        <Table isPadded={false} style={Style}>
          <Table.Header>
            <Table.HeaderCell content="Case" key="CASE" minWidth="medium" />
            <Table.HeaderCell content="Comment" key="COMMENT" minWidth="small" />
            <Table.HeaderCell content="Name" key="NAME" minWidth="medium" />
            <Table.HeaderCell content="Specimen" key="SPECIMEN" minWidth="medium" />
            <Table.HeaderCell content="Collected" key="COLLECTED" minWidth="small" />
            <Table.HeaderCell content="Received" key="RECEIVED" minWidth="medium" />
            <Table.HeaderCell content="Physician" key="PHYSICIAN" minWidth="medium" />
            <Table.HeaderCell content="Responsible Pathologist" key="RESPATH" minWidth="large" />
            <Table.HeaderCell content="Responsible Resident" key="RESRES" minWidth="large" />
            <Table.HeaderCell content="Gender" key="GENDER" minWidth="small" />
            <Table.HeaderCell content="Age" key="Age" minWidth="small" />
            <Table.HeaderCell content="DOB" key="DOB" minWidth="small" />
            <Table.HeaderCell content="Id" key="ID" minWidth="small" />

        </Table.Header>
          <Table.SingleSelectableRows>
            {this.props.cases.map((selCase) =>
              <SearchListRow key={selCase.caseId} selCase={selCase}/>
            )}
          </Table.SingleSelectableRows>
      </Table>
  	);
  }
}

SearchList.propTypes={
  cases: PropTypes.array.isRequired
};

export default SearchList;
