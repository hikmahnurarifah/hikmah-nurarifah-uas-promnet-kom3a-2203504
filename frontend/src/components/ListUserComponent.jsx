import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            showDeleteConfirmation: false,
            userIdToDelete: null,
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.confirmDeleteUser = this.confirmDeleteUser.bind(this);
        this.cancelDeleteUser = this.cancelDeleteUser.bind(this);
    }

    deleteUser(id) {
        this.setState({
          showDeleteConfirmation: true,
          userIdToDelete: id,
        });
      }
    
      confirmDeleteUser() {
        UserService.deleteUser(this.state.userIdToDelete).then((res) => {
          this.setState({
            users: this.state.users.filter((user) => user.id !== this.state.userIdToDelete),
            showDeleteConfirmation: false,
            userIdToDelete: null,
          });
        });
      }
    
      cancelDeleteUser() {
        this.setState({
          showDeleteConfirmation: false,
          userIdToDelete: null,
        });
      }
      
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }
    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-user/_add');
            }
            this.setState({ users: res.data});
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     List Pasien</h2>
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
                                    <th>Nama</th>
                                    <th>Usia</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Alamat</th>
                                    <th>Deskripsi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                            <td>
                                                {user.nama}
                                            </td>
                                            <td>
                                                {user.usia}
                                            </td>
                                            <td>
                                                {user.jenis_kelamin}
                                            </td>
                                            <td>
                                                {user.alamat}
                                            </td>
                                            <td>
                                                {user.deskripsi}
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

export default ListUserComponent
