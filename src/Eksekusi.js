import React from 'react'
import {Container, Table} from 'react-bootstrap'

const Eksekusi = ({datas,handleHapus,isValid}) => {
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
                                <button className="btn btn-danger" onClick={()=> handleHapus(data.id)}>Hapus</button>
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

export default Eksekusi