import { DataGrid } from '@mui/x-data-grid';

const Table = ({ rows, columns, rowsPerPageOptions }) => {
    return (
        <div className="h-full w-full flex flex-col">
            <DataGrid
                rows={ rows }
                columns={ columns }
                pageSize={ rowsPerPageOptions ? rowsPerPageOptions : 100 }
                rowsPerPageOptions={ [rowsPerPageOptions ? rowsPerPageOptions : 100] }
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )   
}

export default Table