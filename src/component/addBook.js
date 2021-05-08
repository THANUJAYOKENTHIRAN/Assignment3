import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import './css/addBook.css';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Indoor from './indoor.js';

class AddBook extends Component {
  render(){
    return(
      <Indoor page='addBook'/>
    );
  }
}
export default AddBook;
