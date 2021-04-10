import React,{useState} from 'react'
import {postData,getData,postDataAndImage} from '../../FetchServices';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
export default function ConsoleType() {
    
    const [getConsoletypeId, setConsoletypeId]= useState("")
    const [getModel, setModel] = useState("")
    const [getDescription, setDescription] = useState("")
    const [getPrice, setPrice] = useState("")
    const [getStock, setStock] = useState("")
    const [getRented, setRented] = useState("")
    const [getImage, setImage]=useState({icon:'', file:''})
    const [rentPrice, setRentPrice] = useState('')
    const [offer, setOffer] = useState('');
    const [offerType, setOfferType] = useState('')
    const [Excel, setExcel] = useState('')
    const [getmsg, setmsg] = useState("")

      /* handle in image*/
   const handleImage=(event)=>{
    setImage({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
 }

 const handleExcelFile=(event)=>{
    setExcel(event.target.files[0])
 }
    
    const handlesubmit=async()=>{
        
        var formData = new FormData()
            formData.append('console_type_id',getConsoletypeId),
            formData.append('model_name',getModel),
            formData.append('description',getDescription),
            formData.append('price',getDescription),
            formData.append('stock',getStock),
            formData.append('rented',getRented),
            formData.append('image',getImage.file),
            formData.append('rent',rentPrice),
            formData.append('offer',offer),
            formData.append('offertype',offerType)
            

            var config={header:{'content-type':'multipart/form-data'}}
            var result = await postDataAndImage('accessories/accessoriesData',formData,config)
                console.log('result',result);
        if(result)
            { 
                console.log('Accessories insert id',result.result.insertId);
           
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
                    formData.append('accessoriesid',result.result.insertId)
                    
                    console.log('formdataaaaaaaa',formData);
                    
                  const config = {headers:{'content-type':'multipart/form-data'}}
    
                  var uploadExcelFile = await postDataAndImage('excel/uploadfileaccessoriesid',formData,config)
                  console.log('uploadExcelFile',uploadExcelFile);
                  
               
                    alert('inventory added')
                }

            
            else{
        // alert('Fail to Submit Record')
            setMsg('Fail to Submit Record')
            }

    }
    return (
        <>
        <div id="consoletype_form"> 
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
                    <label for="validationServer02">Rent Price</label>
                    <input type="text" class="form-control" id="validationServer02" 
                     onChange={(event)=>setRentPrice(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Offer Price</label>
                    <input type="text" class="form-control" id="validationServer02" 
                     onChange={(event)=>setOffer(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>

                    </div>
                    <div class="form-row">
                    <div class="col-md-6 mb-3">
                    <label for="validationServer02">Offer Type</label>
                    <input type="text" class="form-control" id="validationServer02" 
                     onChange={(event)=>setOfferType(event.target.value)} required/>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    </div>
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
                        <Button variant="contained" color="primary" component="span" style={{position:'relative',top:'30px'}}>
                        Upload Image
                        </Button>
                    </label>
                    <Avatar id="Aveter" style={{width:60,height:60,position:'relative',top:'-30px'}} src={getImage.icon} />
                    </div>
                    </div>
                    <div  class="col-md-6 mb-3" style={{position:'relative',top:'0px',left:'525px'}}>
                        <input type="file" id="xyz" 
                            onChange={(event)=>handleExcelFile(event)}
                         />
                     <label htmlFor="xyz">
                        <Button variant="contained" color="primary" 
                       component="span"
                      //  onClick={handleClickOpen}
                         style={{position:'relative',left:'-340px'}}
                        >
                            Add Inventory
                    </Button>
                    </label>
     </div>
                   {/* <button class="btn btn-primary" ></button> */}
                    <Button variant="contained" color="primary" onClick={()=>handlesubmit()}>
                            Submit form
                    </Button>
               
                 <p><center>{getmsg}</center></p>
           </div>
        </>
    )
}
