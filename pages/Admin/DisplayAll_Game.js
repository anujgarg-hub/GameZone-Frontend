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
  const [gameid, setgameid] = useState('');
  const [consoleTypeid, setconsoleTypeid] = useState('');
  const [productid, setproductid] = useState('');
  const [gameName, setgameName] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [stock, setstock] = useState('');
  const [rented, setrented] = useState('');
  const [poster, setposter] = useState({icon:'',fileIcon:''});
  const [offerprice, setofferprice] = useState('');
  const [offertype, setoffertype] = useState('');
  const [getMessage, setMessage] = useState("")
  const [getColumns, setColumns] = useState({
    columns:[  
      { title: "Console Type Td", field: "console_type_id"},
      { title: "Productid", field: "productid" },
      { title: "Name", field: "name" },
      { title: "Price", field: "price" },
      { title: "Description", field: "description" },
      // { title: "Stock", field: "stock" },
      // { title: "Rented", field: "rented" },
      { title: "Rentable", field: "rentable" },
      { title: "Stock", field: "stock" },
      { title: "Non Rentable", field: "nonrentable" },
      { title: "Offerprice", field: "offerprice" },
      { title: "Offertype", field: "offertype" },
      { title: "Poster", field: "poster",
      render: (rowData) => (
          <div>
            <Avatar
              variant="rounded"
              src={`${ServerURL}/images/${rowData.poster}`}
            />
          </div>
        ),
      },
    ]
    });

    const fetchData = async () => {
      const result = await getData("game/displayForStock");
      console.log("data",result.result);
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
    setposter({
      icon: URL.createObjectURL(event.target.files[0]),
      fileIcon: event.target.files[0],
    });
  };

  const handleUpdate = (rowData) => {
    setgameid(rowData.gameid);
    setconsoleTypeid(rowData.console_type_id)
    setproductid(rowData.productid);
    setgameName(rowData.name);
    setprice(rowData.price);
    setdescription(rowData.description);
    setstock(rowData.stock);
    setrented(rowData.rented);
    setofferprice(rowData.offerprice);
    setoffertype(rowData.offertype);
    setposter({ icon: `${ServerURL}/images/${rowData.poster}`, fileIcon: "" });
    setOpen(true);
  };

  // const handleDelete = async (oldData) => {
  //   // let body = { getConsole_Id: oldData.console_type_id };
  //   await deleteDataAxios(`consoletype/delete/${oldData.getConsole_Id}`);
  // };
  const handleDelete = async (oldData) => {
    // console.log("oldDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",JSON.stringify(oldData))
      let body = { gameid:oldData.gameid };
      await postData('game/delete',body);
  };


  const handleSubmit = async (e) => {
    
        var formData = new FormData()
        formData.append('gameid',gameid)
        formData.append('console_type_id',consoleTypeid)
        formData.append('productid',productid)
        formData.append('name',gameName)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('stock',stock)
        formData.append('rented',rented)
        formData.append('poster',poster.fileIcon)
        formData.append('offerprice',offerprice)
        formData.append('offertype',offertype)
        var config={header:{'content-type':'multipart/form-data'}}
            // var result = await postDataAndImage(`consoletype/update/${console_type_id}`, config)
            // console.log('result',result);
            var result = await postDataAndImage(`game/update/${gameid}`,formData,config);
            console.log('result',result);
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
      <div id="accessories_formdilogboxGameId"> 
      <div class="maincontainer" style={{margin:'5%'}}>
          <h1 className="text-center p-4"> Add Games</h1>
          {/* <form onSubmit={handleSubmit()}> */}
          <div class="form-row">
          <div class="col-md-6 mb-3">
              <label for="validationServer01">Console Type Id</label>
              <input type="text" class="form-control" id="validationServer01" required
              value={consoleTypeid} onChange={(event)=>setconsoleTypeid(event.target.value)}
              />
              <div class="valid-feedback">
              Looks good!
              </div>
          </div>
      <div class="col-md-6 mb-3">
      <label for="validationServer01">Product Id</label>
      <input type="text" class="form-control" id="validationServer01" required
     value={productid} onChange={(event)=>setproductid(event.target.value)}
      />
      <div class="valid-feedback">
          Looks good!
      </div>
      </div>
      <div class="col-md-12 mb-3">
      <label for="validationServer02">Game Name</label>
      <input type="text" class="form-control" id="validationServer02"  required
       value={gameName} onChange={(event)=>setgameName(event.target.value)}

      />
      <div class="valid-feedback">
          Looks good!
      </div>
      </div>
  </div>
  <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationServer03"> Price </label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
        value={price} onChange={(event)=>setprice(event.target.value)}

      />
      <div id="validationServer03Feedback" class="invalid-feedback">
          Please provide a valid city.
      </div>
      </div>
      <div class="col-md-6 mb-3">
      <label for="validationServer04">Description</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
      value={description} onChange={(event)=>setdescription(event.target.value)}
      />

      <div id="validationServer04Feedback" class="invalid-feedback">
          Please select a valid state.
      </div>
      </div>
      </div>
      <div class="form-row">
      <div class="col-md-6 mb-3">
      <label for="validationServer05">Stock</label>
      <input type="text" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
       value={stock} onChange={(event)=>setstock(event.target.value)}

      />
      <div id="validationServer05Feedback" class="invalid-feedback">
          Please provide a valid zip.
      </div>
      </div>
  
  {/* <div class="form-row"> */}
      <div class="col-md-6 mb-3">
      <label for="validationServer01">Rented</label>
      <input type="text" class="form-control " id="validationServer01" required
       value={rented} onChange={(event)=>setrented(event.target.value)}

      />
      <div class="valid-feedback">
          Looks good!
      </div>
      </div>
      
      <div class="col-md-6 mb-3">
      <label for="validationServer01">Offer Price</label>
      <input type="text" class="form-control " id="validationServer01" required
        value={offerprice} onChange={(event)=>setofferprice(event.target.value)}

      />
      <div class="valid-feedback">
          Looks good!
      </div>
      </div> 

      <div class="col-md-6 mb-3">
      <label for="validationServer01">Offer Type</label>
      <input type="text" class="form-control " id="validationServer01" required
       value={offertype} onChange={(event)=>setoffertype(event.target.value)}

      />
      <div class="valid-feedback">
          Looks good!
      </div>
      </div> 
      

      </div>
  <div>
      <div class="" style={{textAlign:'center',padding:'10px'}}>
      <center> <Avatar alt="ram" src={poster.icon}  style={{width:80,height:80}} /></center>

      <input
                  accept="image/*"
                  onChange={(event)=>handleImage(event)}
                          style={{display:'none'}}
                  //    className={classes.input}
                  id="contained-button-fileicon"
                  multiple
                  type="file"
                  />
                  <label htmlFor="contained-button-fileicon">
                      <Button variant="contained" color="primary" 
                      component="span"
                          // className={classes.button}
                          >
                              Upload Icon
                      </Button>
                  </label>

      </div>
  </div>
  <div class="form-group">
      <div class="form-check">
      <input class="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
          Agree to terms and conditions
      </label>
      <div  id="invalidCheck3Feedback" class="invalid-feedback">
          You must agree before submitting.
      </div>
      </div>
  </div>
  <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={()=>handleSubmit()} >Submit form</button>
  {/* </form> */}
  <center>{getMessage}</center>
          </div>                
     </div>
    );
  };

  return (
    <>
    <div id="DisplayAllconsolData">
      <MaterialTable
        title="All Games"
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
      </Dialog>Consol Type Data

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


