import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
             <nav class="navbar navbar-dark bg-dark">
             <ul class="nav">
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Send Parcel</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">Notifications</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
      <form >
              <Link to='/login'className="btn btn-success w-100 rounded-0">Logout</Link>
             </form>
             </nav>
    <div class="container align-center mt-2">
      <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <br />
            <br />
            <br />
            <h1 class="text-center">Parcel Locker Website</h1>
            <div class="row justify-content-center">
              <div class="col-auto">
                <p><input Type="TrackingNumber" class="form-control mr-sm-2"  placeholder="Enter Tracking Number"></input> </p>
              </div>
              <div class="col-auto">
                <p><a class="btn btn-success w-100 rounded-0" href="#" role="button">Track Your Parcel</a> </p>
              </div>
            </div>
            <p class="text-center">&nbsp;</p>
</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Dashboard;