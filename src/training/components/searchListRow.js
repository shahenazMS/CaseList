import React from 'react';
import Table from 'terra-table/lib/Table';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Button from 'terra-button';

const CustomCell = props => (
<div>
  {props.specimens.map((specimen,index) =>
    <div>
      <label key={index}>{specimen}</label>
      <br/>
    </div>
  )}</div>
);

CustomCell.propTypes = {
  specimens: PropTypes.array
};

const CommentCell = props => (
<div>
  {props.commentId>0?
    (<Button text='..' data-comment={props.comment} onClick={props.handleOpenModal}/>)
    :null}
</div>
);

CommentCell.propTypes = {
  commentId: PropTypes.number
};

const SearchListRow = ({selCase,handleOpenModal}) => {

  return(
    <Table.Row key={selCase.caseId} style={{textDecorationLine: selCase.cancelCd>0? 'line-through':'none'}}>
      <Table.Cell content={selCase.accessionNbr} key="CASE" />
      <Table.Cell content={<CommentCell
          commentId={selCase.caseCommentId}
          comment={selCase.caseComment}
          handleOpenModal={handleOpenModal}/>
          }   key="COMMENT" style={{textAlign:'center'}} />
      <Table.Cell content={selCase.persnName} key="NAME"/>
      <Table.Cell content={<CustomCell specimens={selCase.specimens}/>} key="SPECIMEN" />
      <Table.Cell content={selCase.caseCollected} key="COLLECTED" />
      <Table.Cell content={selCase.caseReceived} key="RECEIVED" />
      <Table.Cell content={selCase.physician} key="PHYSICIAN" />
      <Table.Cell content={selCase.resPathologist} key="RESPATH"/>
      <Table.Cell content={selCase.resResident} key="RESRES" />
      <Table.Cell content={selCase.gender} key="GENDER" />
      <Table.Cell content={selCase.age} key="Age" />
      <Table.Cell content={selCase.birthDate} key="DOB"/>
      <Table.Cell content={selCase.id} key="ID" />
  </Table.Row>
  );
};
  SearchListRow.propTypes = {
    selCase: PropTypes.object.isRequired
  };

export default SearchListRow;
