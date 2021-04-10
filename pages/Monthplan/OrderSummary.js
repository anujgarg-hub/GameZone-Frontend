import React, { useState, useEffect } from "react";
import { ServerURL } from "../../FetchServices";
import { getData, postData } from "../../FetchServices";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import Drawer from '@material-ui/core/Drawer';
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import AddIcon from "@material-ui/icons/Add";
import { NoEncryption } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function OrderSummary() {
  const [getCountry, setCountry] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [address, setAddress] = useState("");
  const [delivery, setDelivery] = useState("");
  const [deliveryAddressId, setDeliveryAddressId] = useState("");

  var address_iddd = 0;

  const [getAdderss, setAdderss] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async () => {
    var body = {
      country: getCountry,
      name: name,
      phone: phone,
      postal_code: postalCode,
      address: address,
      user_register_id: UserId,
      city: city,
      state: states,
      default_Add: 0
    };
  
    var result = await postData("address/addAddress", body);
    if (result) {
      alert("address Added");
      FetchAddress();

      // toggleDrawerDt(anchor, false)
      // router.push('/Monthplan/OrderSummary')
    } else {
      alert("Address not Added");
    }
  };

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      style={{ width: 380 }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <List style={{ padding: "" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ position: "relative", left: "20px" }}>
              Select Address
            </h3>
            <span
              style={{ cursor: "pointer" }}
              onClick={toggleDrawer(anchor, false)}
            >
              X
            </span>
          </div>
        </List>
        <hr id="hrId" />
        <span>
          <div onClick={toggleDrawerDt(anchor, true)}>
            <font color="#00cec9">
              <AddIcon style={{ fontSize: "42px", cursor: "pointer" }} />
            </font>
            <span style={{ opacity: "0.5" }}> Add Your Address </span>
          </div>
          <div>
            {["right"].map(anchor => (
              <React.Fragment key={anchor}>
                {/* <Button onClick={toggleDrawerDt(anchor, true)}>{anchor}</Button> */}
                <Drawer
                  anchor={anchor}
                  open={stateDt[anchor]}
                  //  onClose={toggleDrawerDt(anchor, false)}
                >
                  {listDt(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </span>
        <hr id="hrId" />
        <List style={{ padding: "" }}>
          <span id="saveId" style={{ marginBottom: "100px" }}>
            Saved Addresses
          </span>
          {/* <hr id="hrId" /> */}
          <Divider />
          <p id="savechangeaId">{FillAddress_Right(anchor)}</p>
        </List>
      </div>
    </div>
  );

  //// Second Drawer

  const [stateDt, setStateDt] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawerDt = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateDt({ ...stateDt, [anchor]: open });
  };

  const listDt = anchor => (
    <div
      style={{ width: 400, padding: "10px", overflowX: "hidden" }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      // onClick={toggleDrawerDt(anchor, false)}
      // onKeyDown={toggleDrawerDt(anchor, false)}
    >
      <List>
        <h3> Add Your Address </h3>
      </List>
      <hr id="hrId" />
      {/* <Divider /> */}
      <List>
        <input
          type="text"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*Select Country"
          onChange={e => setCountry(e.target.value)}
        />

        {/* </div> */}

        {/* <label for="validationServer03" className="form-label">City</label> */}
        <input
          type="text"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*Name"
          onChange={e => setName(e.target.value)}
        />

        {/* <label for="validationServer03" className="form-label">City</label> */}
        <input
          type="number"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*Phone"
          onChange={e => setPhone(e.target.value)}
        />

        {/* <label for="validationServer03" className="form-label">City</label> */}
        <input
          type="number"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*Postal Code"
          onChange={e => setPostalCode(e.target.value)}
        />

        <input
          type="text"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*City"
          onChange={e => setCity(e.target.value)}
        />

        <input
          type="text"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*State"
          onChange={e => setStates(e.target.value)}
        />

        {/* <label for="validationServer03" className="form-label">Phone</label> */}
        <input
          type="textArea"
          style={{ borderRadius: 30 }}
          className="form-control mt-4 p-4 ml-2"
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          required
          placeholder="*Address"
          onChange={e => setAddress(e.target.value)}
        />
        <button
          className="btn btn-primary mt-4 btn-block"
          type="button"
          onClick={() => {
            handleSubmit();
            // toggleDrawerDt(anchor, false);
            setStateDt({ ...stateDt, [anchor]: false });

          }}
        >
          Save Address
        </button>
      </List>
    </div>
  );

  ///////////////

  /// Redux

  const cart = useSelector(state => state.cart);
  console.log("cart", cart);

  const count = useSelector(state => state.count);
  const cartitems = Object.values(cart);
  console.log("itemsssssssss", cartitems.length);

  ////Total...
  const total = cartitems.reduce((a, b) => a + b.total, 0);
  console.log("totalllll", total);

  console.log(count);
  const length = Object.keys(cart).length;
  console.log("total items in cart length", length);

  /// Total Saving...

  var totalSaving = cartitems.reduce((a, b) => a + b.saving, 0);
  
  /// User Register ID...

  var UserI = useSelector(state => state.userId);
  var UserId = Object.values(UserI);
  console.log("UserIdAddresspage", UserId);

  ///
  var address_userId = useSelector(state => state.default_Add);
  var address_user_id = Object.values(address_userId);
  console.log("idddddddddddddddddddddddddddd", address_user_id);

  useEffect(() => {
    FetchAddress();
  }, []); 

  const renderItems = () => {
    return cartitems.map(item => {
      var save1 = item.rent - item.offer;
      var save2 = item.price - item.offerprice;

      var saveTotal1 = 0;
      var saveTotal2 = 0;

      saveTotal1 += parseFloat(save1);
      saveTotal2 += parseFloat(save2);

      console.log("saveTotal11111111", saveTotal1);
      console.log("saveTotal22222222", saveTotal2);

      return (
        <>
          <h5>{item.type}</h5>
          <div id="cartManage" class="row">
            {/* <img src={`${ServerURL}/images/${item.poster}`} width={100} height={100}/> */}
            <div id="imgLeft" class="col-md-6">
              <img
                src={`${ServerURL}/images/${item.image || item.poster}`}
                width={100}
                height={100}
                id="img"
              />
            </div>
            <div class="col-md-6">
              {/* product */}
              {item.image ? (
                <>
                  {item.productname ? (
                    <div id="gameinfoId">
                      <p>
                        <b>Product Name:</b>
                        {item.productname}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {item.model ? (
                    <div id="gameinfoId">
                      <p>
                        <b>Model:</b>
                        {item.model}
                      </p>
                    </div>
                  ) : (
                    <div id="gameinfoId">
                      <p>
                        <b>Model:</b>
                        {item.model_name}
                      </p>
                    </div>
                  )}
                  <div id="gameinfoId">
                    <p>
                      <b>M.R.P:</b>
                      {item.price}
                    </p>
                    <p>
                      <b>Rentel Price:</b>
                      <s>{item.rent}</s>
                    </p>
                    {/* <p><b>Rented:</b>{item.rented}</p> */}
                    <p>
                      <b>Offer Price:</b>
                      {item.offer}
                    </p>
                    <p style={{ color: "green" }}>
                      <b>You Save:</b>
                      {save1}
                    </p>
                  </div>

                  {/* games */}
                </>
              ) : (
                <>
                  <div id="gameinfoId">
                    <p>
                      <b>Game Name:</b>
                      {item.name}
                    </p>
                    <p>
                      <b>{item.model}</b>
                    </p>
                    <p>
                      <b>Price:</b>
                      <s>{item.price}</s>
                    </p>
                    {/* <p><b>Rented:</b>{item.rented}</p> */}
                    <p>
                      <b>Offer Price:</b>
                      {item.offerprice}
                    </p>
                    <p style={{ color: "green" }}>
                      <b>You Save:</b>
                      {save2}
                    </p>
                  </div>
                </>
              )}
              <Divider />
              {/* <hr /> */}
            </div>
          </div>
        </>
      );
    });
  };
  ///////

  const FetchAddress = async () => {
    var body = { user_register_id: UserId };
    var addressList = await postData("address/displayAddressId", body);
    console.log("aayaaa aaddress", addressList);
    setAdderss(addressList);
    // setDefaultAddress(addressList[0].default_Add)
  };

  const FillAddress_Left = () => {
    return getAdderss.map(item => {
      if (item.default_Add == 1) {
        address_iddd = item.user_address_id;

        return (
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            {/* <input type="radio" id={item.user_address_id}  name="addresName"  /> */}

            <div>
              <div>{item.name}</div>
              <div>{item.address}</div>
              <div>{item.city}</div>
              <div>{item.postal_code}</div>
              <div>
                {item.city},{item.state}
              </div>
            </div>
            <div>
              <span
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "10px"
                }}
              >
                Default Address
              </span>
            </div>
          </div>
        );
      }
      // setDefaultAddress(item.user_address_id)
    });
  };
  // setDefaultAddress(DefaultAddress)
  // console.log('addressIdddddddddddddddddddddddddddddd',defaultAddress);

  /// Redux default_Add work

  // setDefaultAddress(default_Adddddd)

  /////

  const DeliveryBtn = async item => {
    setDelivery(item.user_address_id);
    setDeliveryAddressId(item.user_address_id);
    // dispatch({type:'delivery_user_address_id',payload:[item.user_address_id , item.user_address_id]})
    // var deliverybtnbackend = await postData()
  };

  const handleUpdate = async anchor => {
    //alert("address_iddd is " +address_iddd);
    let body = { user_address_id: address_iddd, default_Add: 0 };
    var resultUpdate = await postData("address/UpdateWhenDelivery", body);
    if (resultUpdate) {
      //alert('default add 0')
      let body = { user_address_id: deliveryAddressId, default_Add: 1 };
      var resultUpdateF = await postData("address/UpdateWhenDelivery", body);
      console.log("resultUpdateF", resultUpdateF);

      if (resultUpdateF) {
        FetchAddress();
        FillAddress_Left();
        
        setState({ ...state, [anchor]: false });
        // router.push('/Monthplan/OrderSummary')
        // location.reload();
      } else {
        alert("Not_FillAddress_Left..");
      }
    } else {
      alert("default add 1");
    }
  };

  const FillAddress_Right = anchor => {
    return getAdderss.map(item => {
      // setDeliveryAddressId(item.user_address_id)
      return (
        <div style={{ backgroundColor: "white", padding: "20px" }}>
          <input
            type="radio"
            id={item.user_address_id}
            name="addresName"
            onClick={() => DeliveryBtn(item)}
            value={item.user_address_id}
          />

          <div>
            <div>{item.name}</div>
            <div>{item.postal_code}</div>
            <div>{item.address}</div>
            <div>
              {item.city},{item.state}
            </div>
            {delivery == item.user_address_id ? (
              <div>
                <input
                  type="button"
                  id={item.user_address_id}
                  value="Deliver here"
                  onClick={() => handleUpdate(anchor)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
      // }
    });
    // onClick={toggleDrawer(anchor, false)}
  };
  // console.log('xxxxxxxxxxxxxxxxxxxxxxxx',deliveryAddressId);

  return (
    <>
      <nav
        class="navbar navbar-dark"
        id="navid"
        style={{ padding: "10px 0px 15px 80px", backgroundColor: "#e92645" }}
      >
        <a class="navbar-brand" href="#">
          <p
            style={{
              fontFamily: "Lobster Two,cursive",
              fontSize: "24px",
              fontWeight: "bolder"
            }}
          >
            GameZone
          </p>
        </a>
      </nav>
      <section
        style={{ width: "100%", overflow: "hidden", position: "relative" }}
        id="sectionId"
      >
        <div className="row">
          <div
            className="col-md-7 p-5"
            style={{ fontFamily: "Lobster Two,cursive", fontSize: "20px" }}
          >
            <h2 id="orderId">Order Summary</h2>
            <section id="sectionId">
              <div id="selectdeliveryId">
                <div id="selectdeliveryaddressId">Select Delivery Address</div>
                <div style={{ padding: "10px" }}>
                  {FillAddress_Left()}

                  <a className="btn btn-info btn-sm" id="addchangebtnId">
                    {["right"].map(anchor => (
                      <React.Fragment key={anchor}>
                        <a
                          className="text-white"
                          onClick={toggleDrawer(anchor, true)}
                          style={{ textDecoration: "none" }}
                        >
                          Add/Change Address
                        </a>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          //  onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </a>
                </div>
              </div>
            </section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <p id="basketId">Groceries Basket</p>
              <p id="totalitemId">Total: ({count} items)</p>
              <span id="totalId">{total} Rs.</span>
            </div>

            {renderItems()}
          </div>
          <div
            className="col-md-5 p-5"
            style={{ fontFamily: "Lobster Two,cursive", fontSize: "20px" }}
            id="paymentId"
          >
            <h2 id="paymentdetailId">Payment Details</h2>

            <div id="mainpaymetnId">
              <div id="total">Total:&#x20B9;&nbsp;{total}</div>
              <Divider />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px"
                }}
                id="showallsavingId"
              >
                <div>Savings:</div>
                <div id="showallsavingDataId">&#x20B9;&nbsp;{totalSaving}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px"
                }}
                id="showallsavingId"
              >
                <div>Shipping Charge:</div>
                <div id="showallsavingDataId">&#x20B9;&nbsp;{352}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px"
                }}
                id="showallsavingId"
              >
                <div><b>Grand Total:</b></div>
                <div id="showallsavingDataId"><b>&#x20B9;&nbsp;{total + 352}</b></div>
              </div>
            </div>
            <div style={{ padding: "50px 0 0 8px" }}>
              <Link href={{ pathname: "/Monthplan/PaymentGateway" }}>
                <button
                  type="button"
                  class="btn btn-lg btn-primary"
                  id="makepaymentId"
                >
                  Make Payment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// font-family: 'Oi', cursive; ,overflowX:'hidden'
