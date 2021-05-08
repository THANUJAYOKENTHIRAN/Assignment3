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
import EditUser from './editUser';




class UserList extends Component {
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
    window.location.href='./editUser';
  }

  deleteBook = () => {
    window.location.href='./userDelete';

  }











  render(){
    const user = [{
          id:0,
          userName: 'meera',
          roles:'ROLE_USER',
          email: 'meera@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:1,
          userName: 'Rowlik',
          roles:'ROLE_USER',
          email: 'rowlik@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],

        },{
          id:2,
          userName: 'Sinthu',
          roles:'ROLE_USER',
          email: 'Sinthu@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:3,
          userName: 'Athira',
          roles:'ROLE_USER',
          email: 'Athira@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:4,
          userName: 'kasan',
          roles:'ROLE_ADMIN',
          email: 'kasan@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:5,
          userName: 'Tharsi',
          roles:'ROLE_USER',
          email: 'Tharsi.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:6,
          userName: 'Gayu',
          roles:'ROLE_USER',
          email: 'Gayu@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:7,
          userName: 'Sopa',
          roles:'ROLE_ADMIN',
          email: 'sopa@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        },{
          id:8,
          userName: 'Danu',
          roles:'ROLE_USER',
          email: 'Danu@gmail.com',
          action:[<EditIcon style={{cursor:'pointer'}} onClick={this.editeBook} />,' | ',<DeleteIcon onClick={this.deleteBook} style={{cursor:'pointer'}} />],
        }]
const columns = [{
    Header: 'Id',
    accessor: 'id'
  },{
    Header: 'Username',
    accessor: 'userName'
  },{
    Header: 'Email',
    accessor: 'email'
  },{
    Header: 'Roles',
    accessor: 'roles'
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
                <Grid item xs={6}><label style={{fontSize:'20px', marginLeft:'20px',}}><ListAltIcon style={{fontSize:'23px', marginBottom:'-4px'}} /> User List</label></Grid>
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

                      <ReactTable data={user} columns={columns} defaultPageSize = {4} pageSizeOptions = {[2,4, 6]} style={{color:'black', textAlign:'center'}}/>
                </Grid>
            </Grid>
            <br/>

        </div>
        <br/>
      </div>
    );
  }
}
export default UserList;
