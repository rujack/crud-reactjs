import React from 'react'
import {Container, Table} from 'react-bootstrap'

const Tabel = ({datas, handleEdit}) => {
    return (
        <Container>
        <div>
            <Table striped bordered hover variant="dark" className="mt-5">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Aksi</th>
                    </tr>
                </thead>
                {datas.map((data,index)=>{
                    return(
                        <tbody key={index}>
                            <tr>
                            <td>{index + 1}</td>
                            <td>{data.nama}</td>
                            <td>{"Rp. " + data.harga + "-;"}</td>
                            <td>{data.stok + " Unit"}</td>
                            <td>
                                <button className="btn btn-warning mr-2" onClick={()=> handleEdit(data.id)}>Edit</button>
                            </td>
                            </tr>
                        </tbody>
                    );
                    })}
            </Table>
        </div>
        </Container>
    )
}

export default Tabel
