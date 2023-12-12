import React from "react";
import { Link } from "react-router-dom";
        
const Driver = () => {
    return (
    <div>
        <nav class="navbar navbar-dark bg-dark">
             <ul class="nav text-primary" >
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Pickup</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Delivered</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Notifications</a>
  </li>
</ul>
<div>
    </div>
      <form >
              <Link to='/login' className="btn btn-success w-100 rounded-0">Logout</Link>
             </form>
             </nav>
             <body class="container align-center">

<h2 class="mt-5">Parcel Status</h2>

<form id="parcelForm" class="mt-4">
  <div class="mb-3">
    <label for="status" class="form-label">Current Status:</label>
    <input type="text" id="status" name="status" class="form-control" value="In Transit"/>
  </div>

  <div class="mb-3">
    <label for="updateStatus" class="form-label">Update Status:</label>
    <select id="updateStatus" name="updateStatus" class="form-select">
      <option value="In Transit">In Transit</option>
      <option value="Out for Delivery">Out for Delivery</option>
      <option value="Delivered">Delivered</option>
    </select>
  </div>

  <button type="button" onclick="updateParcelStatus()" class="btn btn-primary">Update Status</button>

  <div class="mb-3">
    <label for="confirmDelivery" class="form-check-label">Confirm Delivery:</label>
    <input type="checkbox" id="confirmDelivery" name="confirmDelivery" class="form-check-input"/>
  </div>

  <button type="button" onclick="confirmDelivery()" class="btn btn-success">Confirm Delivery</button>
</form>
</body>
    </div>
    );
};
export default Driver;