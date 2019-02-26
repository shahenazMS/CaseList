import React, {PropTypes} from 'react';
import ContentContainer from 'terra-content-container';
import Header from 'terra-clinical-header';
import {Link, IndexLink} from 'react-router';
import {AppContext} from './appContext';

class App extends React.Component {
  constructor(props) {
      super(props);

       this.state = {
        params:{
          name: 'test',
          case: '',
          pathologistId:0,
          residentId:0,
          prefixId: 0,
          prefixGrpId: 0,
          outsideCase:''
        }
      };
      this.onChange = this.onChange.bind(this);
  }

  onChange (event) {
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

  render(){
    return(
          <div className="container-fluid">
              <img src="images/logo.jpeg" />
              <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="about">About</Link></li>
              </ul>

              <AppContext.Provider
                value={{params:this.state.params,
                      onChange: this.onChange
                    }}>
                {this.props.children}
              </AppContext.Provider>
          </div>
  		);
  }
}

export default App;
