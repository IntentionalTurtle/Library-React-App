import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import {DataGrid, GridColDef } from '@mui/x-data-grid'
import {useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', flex: 1},
    {field: 'author', headerName: 'Author', flex: 1},
    {field: 'pub_year', headerName: 'Publication Year', flex: 1},
    {field: 'ISBN', headerName: 'ISBN', flex: 1},
    {field: 'hard_paper', headerName: 'Hardback/Paperback', flex: 1},
    {field: 'in_inventory', headerName: 'In Inventory', flex: 1}
]

function LibDisplay() {
    let [ open, setOpen ] = useState(false);
    const { bookData, getData } = useGetData();
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
                    Add Book to Collection
                </button>
            </div> 
            <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update Book</button>
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete Book</button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}>
            <h2 className="p-3 bg-slate-300 my-2 rounded">Library Inventory</h2>
            <DataGrid 
            rows={bookData} 
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

export default LibDisplay