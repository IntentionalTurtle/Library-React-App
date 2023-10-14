import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import {DataGrid, GridColDef } from '@mui/x-data-grid'
import {useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: 'year', headerName: 'Year', flex: 1},
    {field: 'make', headerName: 'Make', flex: 1},
    {field: 'model', headerName: 'Model', flex: 1},
    {field: 'color', headerName: 'Color', flex: 1}
]

function CarDisplay() {
    let [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
    }


  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Car
                </button>
            </div> 
            <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-300 my-2 rounded">My Inventory</h2>
            <DataGrid 
            rows={carData} 
            columns={columns} 
            initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
                columns: {
                    columnVisibilityModel: {
                      id: false
                    },
                  },
            }}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            pageSizeOptions={[5, 10, 25]}
            />
        </div>
    </>
  )
}

export default CarDisplay