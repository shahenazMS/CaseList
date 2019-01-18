import delay from './delay';

const cases = [
  {
    caseId: '1', caseCommentId:0, accessionNbr: 'BS-18-000127',
    persnName: 'AP,Diagcode', specimens:['Abortion Ind'],
    cancelCd:0, caseCollected:'',caseReceived:'', physician:'',
    resPathologist:'Shivanna, Asharani',resResident:'',
    gender:'Male', age:32, birthDate:'07/17/1986',id:'3303909'
  },
  {
    caseId: '2', caseCommentId:1, accessionNbr: 'BS-18-000128',
    persnName: 'AP,Diagcode', specimens:['Abscess'],
    cancelCd:0, caseCollected:'',caseReceived:'', physician:'',
    resPathologist:'Shivanna, Asharani',resResident:'',
    gender:'Male', age:32, birthDate:'07/17/1986',id:'3303910'
  },
  {
    caseId: '3', caseCommentId:0, accessionNbr: 'BS-18-000127',
    persnName: 'AP,Diagcode', specimens:['Abortion Ind','Abscess'],
    cancelCd:1, caseCollected:'',caseReceived:'', physician:'',
    resPathologist:'Patho AP',resResident:'',
    gender:'Male', age:32, birthDate:'07/17/1986',id:'3303911'
  }
];

class CaseApi{
  static getAllCases(){
    return Object.assign([],cases);
  /*  return JSON.parse(JSON.stringify(cases));*/
   /*return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(Object.assign([],cases));
      }, delay);
    });*/
  }
}


export default CaseApi;
