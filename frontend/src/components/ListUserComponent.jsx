import React, { Component, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    // Initialize navigate function from props
    this.navigate = props.navigate;
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    });
  }

  viewUser(id) {
    this.navigate(`/view-user/${id}`);
  }

  editUser(id) {
    this.navigate(`/add-user/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data == null) {
        this.navigate('/add-user/_add');
      }
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.navigate('/add-user/_add');
  }

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary"
                     onClick={this.addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className 
                        = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>NIM</th>
                                    <th>Nama</th>
                                    <th>Tanggal Lahir</th>
                                    <th>Alamat</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Kelas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>
                                                {user.nim}
                                            </td>
                                            <td>
                                                {user.nama}
                                            </td>
                                            <td>
                                                {user.tgl_lahir}
                                            </td>
                                            <td>
                                                {user.alamat}
                                            </td>
                                            <td>
                                                {user.jenis_kelamin}
                                            </td>
                                            <td>
                                                {user.kelas}
                                            </td>
                                             <td>
                      <button onClick={ () => 
                          this.editUser(user.id)} 
                               className="btn btn-info">Update 
                                 </button>
                       <button style={{marginLeft: "10px"}}
                          onClick={ () => this.deleteUser(user.id)} 
                             className="btn btn-danger">Delete 
                                 </button>
                       <button style={{marginLeft: "10px"}} 
                           onClick={ () => this.viewUser(user.id)}
                              className="btn btn-info">View 
                                  </button>
                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}


const ListUserWithNavigate = (props) => {
    const navigate = useNavigate();
  
    // Wrap the class component with a functional component to pass navigate as a prop
    return <ListUserComponent {...props} navigate={navigate} />;
  };
  
  export default ListUserWithNavigate;
