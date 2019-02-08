import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from './selectInput';

class AdvSearchPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
  		<div>
        <fieldset>
          <legend>More Filter Options</legend>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="prefix">Prefix</label></td>
              <td><SelectInput
                  name="prefix"
                  defaultValue="None"
                  onChange={this.props.handleFilterChange}
                  options={this.props.prefixes}
                  value={this.props.params.prefixId}/>
              </td>
              <td><label htmlFor="pathologist">Pathologist</label></td>
              <td><SelectInput
                  name="pathologist"
                  defaultValue="None"
                  onChange={this.props.handleFilterChange}
                  options={this.props.pathologist}
                  size="1"
                  value={this.props.params.pathologistId}/>
              </td>
              <td>
                <label htmlFor="ousidecase">Outside Case Number</label>
                <input
                  name="txtoutsidecase"
                  onChange={this.props.handleFilterChange}
                  className="txtStyle"
                  value={this.props.params.outsideCase}/>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="prefixgrp">Prefix Group</label></td>
              <td><SelectInput
                  name="prefixgroup"
                  defaultValue="None"
                  onChange={this.props.handleFilterChange}
                  options={this.props.prefixGrps}
                  value={this.props.params.prefixGrpId}/>
              </td>
              <td><label htmlFor="resident">Resident</label></td>
              <td><SelectInput
                  name="resident"
                  defaultValue="None"
                  onChange={this.props.handleFilterChange}
                  options={this.props.resident}
                  size="1"
                  value={this.props.params.residentId}/>
              </td>
            </tr>
          </tbody>
        </table>
        </fieldset>
      </div>
  		);
  }
}
AdvSearchPanel.propTypes = {
  handleFilterChange:PropTypes.func.isRequired
};

export default AdvSearchPanel;
