import React, { Component } from 'react'
import Formulir from './Formulir'
import {Header} from './Header'
import Tabel from './Tabel'
import {Alert} from 'react-bootstrap'


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      datas:[],
      nama:'',
      harga:'',
      stok:'',
      id:'',
      isValid:'',
      setShow:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.id === ""){
      if(!this.state.nama || !this.state.harga || !this.state.stok) {
        this.setState({isValid: <Alert variant="danger">Harap semua data di isi :(</Alert> })
      }else{
        this.setState({
          isValid: <Alert variant="success">Berhasil :)</Alert>,
          datas:[
            ...this.state.datas,
            {
              id: this.state.datas.length+1,
              nama: this.state.nama,
              harga: this.state.harga,
              stok: this.state.stok
            }
          ]
        })

        this.setState({
          nama:'',
          harga:'',
          stok:'',
          id:''
        })

      }
    }else{
      const dataSelainDipilih = this.state.datas
      .filter((data)=> data.id !== this.state.id)
      .map((filterData)=>{
        return filterData;
      });

      this.setState({
        isValid: <Alert variant="success">Berhasil di edit :)</Alert>,
        datas:[
          ...dataSelainDipilih,
          {
            id: this.state.datas.length+1,
            nama: this.state.nama,
            harga: this.state.harga,
            stok: this.state.stok
          }
        ]
      })

      this.setState({
        nama:'',
        harga:'',
        stok:'',
        id:''
      })

    }
  }

  handleEdit=(id)=>{
    console.log("ID : " + id)
    const dataDipilih = this.state.datas
    .filter((data)=> data.id === id)
    .map((filterData)=>{
      return filterData
    })
    this.setState({
      isValid:"",
      id:dataDipilih[0].id,
      nama:dataDipilih[0].nama,
      harga:dataDipilih[0].harga,
      stok:dataDipilih[0].stok
    })
  }

  handleHapus=(id)=>{
    const dataBaru = this.state.datas
      .filter((data)=> data.id !== id)
      .map((filterData)=>{
        return filterData;
      });

      this.setState({
        isValid: <Alert variant="success">Berhasil di hapus :)</Alert>,
        datas: dataBaru
      })
  }
  
  render(){
        return (
        <div>
            <Header/>
            <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <Tabel datas={this.state.datas} handleEdit={this.handleEdit} handleHapus={this.handleHapus}/>
        </div>
        )
    }
  }