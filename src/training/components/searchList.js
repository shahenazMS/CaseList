
import React from 'react';
import Table from 'terra-table/lib/Table';
import PropTypes from 'prop-types';
import SearchListRow from './searchListRow';
import ActionHeader from 'terra-action-header';
import DialogModal from 'terra-dialog-modal';


class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      commentText:''
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal(event) {
     this.setState({
        isOpen: true,
        commentText:event.target.dataset.comment});
  }

  handleCloseModal() {
    this.setState({ isOpen: false, commentText:''});
  }
  render() {
    const Style = {
      marginTop: '3px', width:'100%'};
    return(

      <div>
        <DialogModal
          ariaLabel="Default Dialog Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          header={<label>Case Comment</label>}
          footer={<label />}
          width='320'
        >
          <p>{this.state.commentText}</p>
        </DialogModal>
        <Table className="table-style">
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
              <SearchListRow key={selCase.caseId} selCase={selCase} handleOpenModal={this.handleOpenModal}/>
            )}
        </Table.SingleSelectableRows>
      </Table>
    </div>
  	);
  }
}

SearchList.propTypes={
  cases: PropTypes.array.isRequired
};

export default SearchList;
