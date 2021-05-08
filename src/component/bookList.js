import React, {Component} from 'react';
import { Typography, Card, CardContent, Paper, Grid } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ReorderOutlinedIcon from '@material-ui/icons/ReorderOutlined';
import './css/bookList.css';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditeBook from './editeBook';




class BookList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          allow:'',
           search:'',
      }
  }



  handleSearchChange=(e)=>{
    this.setState({
        search: e.target.value,
    })
  }

  cut =() =>{
    this.setState({
      search:'',
    })
  }


  editeBook = () => {
    window.location.href='./editeBook';
  }

  deleteBook = () => {
    window.location.href='./delete';

  }











  render(){
    const book = [{
      
          id:0,
          author: 'suresnar',
          title:'Language ',
          price: 260,
          ISBNNumber:9877766,
          language:'English',
          genre:'Life Story',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
          
        },{
          id:1,
          author: 'kaneshan',
          title:'Sankarapuranam',
          price: 550,
          ISBNNumber:356536,
          language:'Tamil',
          genre:'Novel',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],

        },{
          id:2,
          author: 'Peter',
          title:'Cloud computing',
          price: 400,
          ISBNNumber:6854296,
          language:'English',
          genre:'Technology',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:3,
          author: 'RabardKiyashahi ',
          title:'panakkara thanthai',
          price: 300,
          ISBNNumber:5458825,
          language:'Tamil',
          genre:'Crime',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:4,
          author: 'Rohit',
          title:'Thadayam thedu',
          price: 320,
          ISBNNumber:25878875569,
          language:'Tamil',
          genre:'Crime',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:5,
          author: 'Dhoni',
          title:'X-Man',
          price: 370,
          ISBNNumber:25856652,
          language:'English',
          genre:'Comic',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:6,
          author: 'Naveen',
          title:'X-Man',
          price: 370,
          ISBNNumber:48965258,
          language:'Tamil',
          genre:'Comic',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        }]
const columns = [{
    Header: 'Title',
    accessor: 'title'
  },{
    Header: 'Author',
    accessor: 'author'
  },{
    Header: 'ISBN Number',
    accessor: 'ISBNNumber'
  },{
    Header: 'Price',
    accessor: 'price'
  },{
    Header: 'Language',
    accessor: 'language'
  },{
    Header: 'Genre',
    accessor: 'genre'
  },{
    Header: 'Action',
    accessor: 'action'
  }]
    return(
      <div className='bookList_mainDiv' >
        <br/>
        <div className='bookListWarraper'>
            <br/>
            <Grid container spacing={1} >
                <Grid item xs={6}><label style={{fontSize:'20px', marginLeft:'20px',}}><ListAltIcon style={{fontSize:'23px', marginBottom:'-4px'}} /> Book List</label></Grid>
                <Grid item xs={6}  >

                    <div style={{height:'34px',fontSize:'18px', width:'370px', marginLeft:'20px', border:'1px solid black',float:'right',marginRight:'10px', boxShadow:'1px 1px 1px 1px'}}>

                      <form onSubmit={this.submit}>
                        <CloseOutlinedIcon style={{fontSize:'30px', cursor:'pointer', float:'right'}} onClick={this.cut} />
                        <button type='submit' style={{float:'right', border:'none',backgroundColor:'white',height:'33px'}}><SearchOutlinedIcon style={{marginBottom:'-2px',fontSize:'30px'}}  /></button>
                        <input type='text' placeholder='Search Text' value={this.state.search} onChange={this.handleSearchChange} style={{float:'right',marginRight:'1px',height:'30px',fontSize:'18px', marginLeft:'20px',border:'none'}} />
                        <ReorderOutlinedIcon style={{fontSize:'33px', marginBottom:'-4px', float:'right'}} />
                      </form>

                    </div>
                </Grid>
                <Grid item xs={12}>

                      <ReactTable data={book} columns={columns} defaultPageSize = {4} pageSizeOptions = {[2,4, 6]} style={{color:'black', textAlign:'center'}}/>
                </Grid>
            </Grid>
            <br/>

        </div>
        <br/>
      </div>
    );
  }
}
export default BookList;
