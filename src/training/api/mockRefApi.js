import delay from './delay';
const prefixes = [
  {value:1,text:" G"},
  {value:2,text:"JP"},
  {value:3,text:"SP"}];

const prefixGrps = [
  {value:11,text:"G"},
  {value:12,text:"S"},
  {value:13,text:"P"}];

const pathologists=[
  {value:21,text:"Kiran Vankadaru"},
  {value:22,text:"Raghvendra Mirajkar"},
  {value:23,text:"Archana Narasimha"}];

const residents=[
  {value:31,text:"Adarsh Varadaraju"},
  {value:32,text:"Martin Slimmer"},
  {value:33,text:"Paul Sommer"}];

class ReferenceApi{
  static getPrefixes(){
    return Object.assign([],prefixes);
  }

  static getPrefixGrps(){
    return Object.assign([],prefixGrps);
  }

  static getPathologists(){
    return Object.assign([],pathologists);
  }

  static getResidents(){
    return Object.assign([],residents);
  }
}


export default ReferenceApi;
