import React,{useState,useEffect} from 'react';
import {getData , postData,postDataAndImage} from '../../FetchServices';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function ConsoleProduct() {

    const [consoleTypeId, setconsoleTypeId] = useState('');
    const [productName, setproductName] = useState('');
    const [model, setmodel] = useState('');
    const [price, setprice] = useState('');
    const [offer, setoffer] = useState('');
    const [offerType, setofferType] = useState('');
    const [rented, setrented] = useState('');
    const [stock, setstock] = useState('');
    const [description, setdescription] = useState('');
    const [rent, setrent] = useState('');
    const [image, setimage] = useState({icon:'',fileIcon:''});
    const [Excel, setExcel] = useState('')
    const [msg, setmsg] = useState('')
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = useState('');
    const [serialNo, setSerialNo] = useState('');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // const handleInventorySubmit=async()=>{

    //     let body = {
    //       'status':status,
    //       'serial no.':serialNo
    //     }
    //     // console.log('bodyyy',bodyyy);
    //     var InventoryResult = await postData('inventory/addInventory',body)
    //  }

    const InventoryDialog=()=>{
      return (
        <div>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert dialog
          </Button> */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Add Inventory"}</DialogTitle>
            <DialogContent>
       
            <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Unit</label>
      <input type="text" class="form-control" id="validationServer01" required
      value="1"
      />
     
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Serial No.</label>
      <input type="text" class="form-control" id="validationServer02"  required
            onChange={(event)=>setSerialNo(event.target.value)}
      />      
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Status</label>
      <select class="form-control" onChange={(e)=>setStatus(e.target.value)}>
        <option value=""></option>
        <option value="Sellable">Sellable</option>
        <option value="Non-Sellable">Non-Sellable</option>
        <option value="Block">Block</option>
      </select>
        
    </div>
   
  </div>


            </DialogContent>
            <DialogActions>
             
              <Button onClick={handleClose} color="primary" autoFocus>
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }


    const handleIcon=(event)=>{
        setimage({icon:event.target.files[0],fileIcon:URL.createObjectURL(event.target.files[0])})
    }
    

    const handleExcelFile=(event)=>{
      setExcel(event.target.files[0])
    }


    const handleSubmit =async()=>{

        const formData = new FormData();
        formData.append('console_type_id',consoleTypeId)
        formData.append('productname',productName)
        formData.append('model',model)
        formData.append('price',price)
        formData.append('offer',offer)
        formData.append('offer_type',offerType)
        formData.append('rented',rented)
        formData.append('stock',stock)
        formData.append('description',description)
        formData.append('rent',rent)
        formData.append('image',image.icon)

        var  config = {headers:{'content-type':'multipart/form-data'}}
        var result = await postDataAndImage('consoleproduct/addproduct',formData,config)

        console.log('resulttttttttttttttttttttttttttttttttttttttt',result.insertId);

        if(result)
        {
          console.log('resulttttttttttttttttttttttttttttttttttttttt',result.result.insertId);
          
            setmsg('Record Submitted')
            // let body = {
            //         'unit':1,
            //         'productid':result.result.insertId
            //       }
            //       console.log('bodyyy',body);

            // var InventoryResult = await postData('inventory/addInventory',body) 
            // console.log('InventoryResult',InventoryResult);
            // console.log('insertId_FOR_InventoryResult',InventoryResult.insertId)

            // if(InventoryResult)
            // {
              const formData = new FormData()
                // formData.append('inventoryid',InventoryResult.insertId)
                formData.append('unit',1),
                formData.append('s_no',Excel)
                formData.append('productid',result.result.insertId)
                
                console.log('formdataaaaaaaa',formData);
                
              const config = {headers:{'content-type':'multipart/form-data'}}

              var uploadExcelFile = await postDataAndImage('excel/uploadfileProduct',formData,config)
              console.log('uploadExcelFile',uploadExcelFile);
              
              alert('Inventory added');
            // }
            // else
            // {
            //   alert('Inventory not added');
            // }
            
        }
        else
        {
            setmsg('Not Submitted.....')
            // alert('not submitted')
        }
        // alert('going..')
    }


    return (
        
        <div class="maincontainer" style={{padding:'8% 2% 10% 22%'}}>
        <h1 className="text-center p-4"> Console Product</h1>
           {/* <form onSubmit={handleSubmit()}> */}
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Console Type Id</label>
      <input type="text" class="form-control" id="validationServer01" required
      onChange={(event)=>setconsoleTypeId(event.target.value)}
      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Product Name</label>
      <input type="text" class="form-control" id="validationServer02"  required
            onChange={(event)=>setproductName(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">Model</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
            onChange={(event)=>setmodel(event.target.value)}

      />
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationServer04">Price</label>
      <input type="text" class="form-control" id="validationServer03" aria-describedby="validationServer03Feedback" required
      onChange={(event)=>setprice(event.target.value)}
      />

      <div id="validationServer04Feedback" class="invalid-feedback">
        Please select a valid state.
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer05">Offer Price</label>
      <input type="text" class="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
            onChange={(event)=>setoffer(event.target.value)}

      />
      <div id="validationServer05Feedback" class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  
  {/* <div class="form-row"> */}
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Offer Type</label>
      <input type="text" class="form-control " id="validationServer01" 
      
      required
            onChange={(event)=>setofferType(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Rented</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setrented(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
  {/* </div> */}
    <div class="col-md-6 mb-3">
      <label for="validationServer01">Stock</label>
      <input type="text" class="form-control " id="validationServer01"  required
            onChange={(event)=>setstock(event.target.value)}

      />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    </div>
    <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer02">Description</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setdescription(event.target.value)}

      />
     
    </div>

     <div class="col-md-6 mb-3" >
     <label for="validationServer02">Rent Price</label>
      <input type="text" class="form-control " id="validationServer02"  required
            onChange={(event)=>setrent(event.target.value)}

      />
   

     </div>
     <div class="col-md-6 mb-3" style={{textAlign:'center',padding:'10px'}}>
     <center> <Avatar alt="ram" src={image.fileIcon}  style={{width:80,height:80}} /></center>

     <input
                   accept="image/*"
                   onChange={(event)=>handleIcon(event)}
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
     <div  class="col-md-6 mb-3" style={{position:'relative',top:'90px',left:'60px'}}>
     <input type="file" id="xyz" 
    //  style={{display:'none'}}
    onChange={(event)=>handleExcelFile(event)}
      />
     <label htmlFor="xyz">
     <Button variant="contained" color="primary" 
                       component="span"
                      //  onClick={handleClickOpen}
                         style={{position:'relative',left:'-320px'}}
                        >
                            Add Inventory
                    </Button>
                    </label>
     </div>
     {/* {InventoryDialog()} */}
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
<center>{msg}</center>
        </div>
    )
}
