import { Dialog } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import {getData,postData,postDataAndImage,deleteDataAxios,ServerURL} from '../../FetchServices';
import Swal from 'sweetalert2'
/**
 * @author
 * @function CategoryDisplay
 **/

 export default function Displayall_consoletype() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [getAccessoriesId, setAccessoriesId]= useState("")
  const [getConsoletypeId, setConsoletypeId]= useState("")
  const [getModel, setModel] = useState("")
  const [getDescription, setDescription] = useState("")
  const [getPrice, setPrice] = useState("")
  const [getStock, setStock] = useState("")
  const [getRented, setRented] = useState("")
  const [getImage, setImage]=useState({icon:'', file:''})
  const [getMessage, setMessage] = useState("")
  const [getColumns, setColumns] = useState({
    columns:[  
    { title: "console Type Td", field: "accessoriesId"},
    { title: "console Type Td", field: "console_type_id" },
    { title: "Model Name", field: "model_name" },
    { title: "Description", field: "description" },
    { title: "Price", field: "price" },
    { title: "Rentable", field: "rentable" },
    { title: "Stock", field: "stock" },
    { title: "Non Rentable", field: "nonrentable" },
    // { title: "Rented", field: "rented" },
    { title: "Image", field: "image",
    render: (rowData) => (
        <div>
          <Avatar
            variant="rounded"
            src={`${ServerURL}/images/${rowData.image}`}
          />
        </div>
      ),
},
    ]
    });

  const fetchData = async () => {
    const result = await getData("accessories/displayForStock");
    console.log("data",result);
    result.status && setData(result.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    // fetchData()
  };

  /* handle in icon*/
  const handleImage = (event) => {
    setImage({
      icon: URL.createObjectURL(event.target.files[0]),
      file: event.target.files[0],
    });
  };

  const handleUpdate = (rowData) => {
        setAccessoriesId(rowData.accessoriesId);
        setConsoletypeId(rowData.console_type_id);
        setModel(rowData.model_name);
        setDescription(rowData.description);
        setPrice(rowData.price);
        setStock(rowData.stock);
        setRented(rowData.stock);
        setImage({ icon: `${ServerURL}/images/${rowData.image}`, file: "" });
        setOpen(true);
  };

  // const handleDelete = async (oldData) => {
  //   // let body = { getConsole_Id: oldData.console_type_id };
  //   await deleteDataAxios(`consoletype/delete/${oldData.getConsole_Id}`);
  // };
  const handleDelete = async (oldData) => {
    // console.log("oldDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",JSON.stringify(oldData))
      await deleteDataAxios(`accessories/accessoriesDelete/${oldData.accessoriesId}`);
  };


  const handleSubmit = async (e) => {
    
        var formData = new FormData()
            formData.append('accessoriesId',getAccessoriesId)
            formData.append('console_type_id',getConsoletypeId)
            formData.append('model_name',getModel),
            formData.append('description',getDescription),
            formData.append('price',getPrice),
            formData.append('stock',getStock),
            formData.append('rented',getRented),
            formData.append('image',getImage.file)
            var config={header:{'content-type':'multipart/form-data'}}
            // var result = await postDataAndImage(`consoletype/update/${console_type_id}`, config)
            // console.log('result',result);
            var result = await postDataAndImage(`accessories/update/${getAccessoriesId}`,formData,config);
    fetchData();
    handleClose();

    if(result)
    { //alert("Record Submitted")
    setMessage('Record Updated')
    }
    else{
// alert('Fail to Submit Record')
    setMessage('Fail to Update Record')
    }

  };

  const renderEditForm = (e) => {
    const style = {
      width: 600,
      padding: 16,
      borderRadius: 5,
      boxShadow: "0 0 10px -1px #ccc",
    };
    return (
        <div id="accessories_formdilogbox"> 
         <div id="consoltypeheading">Accessories Data</div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                <label for="validationServer01">Console Type Id</label>
                <input type="text" class="form-control" id="validationServer01" 
                value={getConsoletypeId} onChange={(event)=>setConsoletypeId(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>

                <div class="col-md-6 mb-3">
                <label for="validationServer01">Model Name</label>
                <input type="text" class="form-control" id="validationServer01" 
                value={getModel} onChange={(event)=>setModel(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>
                
                <div class="col-md-6 mb-3">
                <label for="validationServer02">Description</label>
                <input type="text" class="form-control" id="validationServer02" 
                value={getDescription} onChange={(event)=>setDescription(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>

                <div class="col-md-6 mb-3">
                <label for="validationServer02">Price</label>
                <input type="text" class="form-control" id="validationServer02" 
                value={getPrice} onChange={(event)=>setPrice(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>

                <div class="col-md-6 mb-3">
                <label for="validationServer02">Stock</label>
                <input type="text" class="form-control" id="validationServer02" 
                value={getStock} onChange={(event)=>setStock(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>
                
                <div class="col-md-6 mb-3">
                <label for="validationServer02">Rented</label>
                <input type="text" class="form-control" id="validationServer02" 
                value={getRented} onChange={(event)=>setRented(event.target.value)} required/>
                <div class="valid-feedback">
                    Looks good!
                </div>
                </div>
                
               </div>
               <div class="form-row">
                <div class="col-md-6 mb-3">
                {/* <label for="validationServer03">Upload Image</label>
                <input type="file" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required/> */}
                <input
                     accept="image/*"
                    //  className={classes.input}
                     id="contained-button-file"
                     multiple
                     type="file"
                    style={{display:'none'}}
                    onChange={(event)=>handleImage(event)}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload Image
                    </Button>
                </label>
                <Avatar id="Aveter" style={{width:60,height:60}} src={getImage.icon} />
                </div>
                </div>
               {/* <button class="btn btn-primary" ></button> */}
               <Button variant="contained" color="primary" disableElevation id="buttonSumit" onClick={()=>handleSubmit()}>
                    {/* <Button variant="contained" color="primary" onClick={()=>alert(getDescription)}> */}
                            Submit form
                </Button>
           
             <p><center>{getMessage}</center></p>                
           </div>
    );
  };

  return (
    <>
    <div id="DisplayAllconsolData">
      <MaterialTable
        title="Consol Type Data"
        columns={getColumns.columns}
        data={data}
        options={{
          headerStyle: {
            backgroundColor: "#003399",
            color: "#FFF",
          },
          actionsCellStyle: {
            padding: "0 20px",
          },
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit",
            onClick: (event, rowData) => {
              handleUpdate(rowData);
            },
          },
        ]}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                handleDelete(oldData);
                resolve();
              }, 1000);
            }),
        }}
      />
      <Dialog
        // fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {renderEditForm()}
      </Dialog>
      </div>
    </>
  );
}

const style = {
  maxWidth: "95%",
  margin: "20px auto",
  borderRadius: 5,
  boxShadow: "0 0 10px -1px #ccc",
};

// const CategoryDisplay = (props) => {
//   return <div style={style}>{Editable()}</div>;
// };


