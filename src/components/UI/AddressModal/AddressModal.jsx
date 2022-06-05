import axios from 'axios';
import React from 'react';
import { VAR_ENCODE_TOKEN } from '../../../utils/Routes';
import { Alert } from '../Alert/Alert';
import "./AddressModal.css"

const AddressModal = ( props ) => {
  console.log(props);

  function AddAddressHandler(e) { 
    e.preventDefault();
    try {
      (async () => {
        var res = await axios.post("/api/user/address", {
          address: {
          	name: "dummy",
							street: "Princenton Street",
							city: "New york",
							state: "New York",
							country: "USA",
							pincode: "100043",
							phone: "123456789",
						
        }}, {
              headers: {
                  authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
              }
          })
          console.log(res);
          // setAddressList(res.data.addressList);
      })();
    } catch (error) {
      console.log(error)
      Alert("error", "Something went wrong!! try again.");
  }
  }
  return (
    <div className='fixed-container' onClick={(e) => { 
      if (e.target.classList.contains("fixed-container")) { 
        props.setModal(false)
      }
    }}>
      <div className='address-modal-container'>
        <h4>Address</h4>
        <form onSubmit={AddAddressHandler} className="address-modal">
          <input placeholder='Full Name' />
          <input placeholder='Email Address'/>
          <input placeholder='State'/>
          <input placeholder='City'/>
          <input placeholder='Pincode'/>
          <input placeholder='Address' />
         <button type='submit' className='action-btn'> Add Address</button>
        </form>
      </div>
    </div>
  )
}

export default AddressModal