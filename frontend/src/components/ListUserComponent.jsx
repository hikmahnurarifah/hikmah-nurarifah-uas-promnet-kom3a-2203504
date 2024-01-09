import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: 
                this.state.users.
                filter(user => user.id !== id)});
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

    handleSearch = (searchTerm) => {
        // Lakukan pencarian di sini
        // Misalnya, menggunakan filter untuk menyaring data berdasarkan pencarian
        const filteredUsers = this.state.users.filter(
          (user) =>
            user.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.nim.includes(searchTerm) ||
            user.alamat.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.kelas.toLowerCase().includes(searchTerm.toLowerCase())
          // Tambahkan bidang lain yang ingin Anda sertakan dalam pencarian
        );
      
        this.setState({ filteredUsers });
      };
      

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     Daftar Pasien</h2>
                 <div className = "row">
                    <button className="btn btn-primary"
                     onClick={this.addUser}> Tambahkan Data</button>
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
