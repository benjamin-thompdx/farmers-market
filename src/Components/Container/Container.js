import React from 'react';
// import { Card } from 
import ScheduleController from './Schedule/ScheduleController';
import ProduceController from './Produce/ProduceController';

const Container = () => {
  return (
  <React.Fragment>
    <div class="mainContain">
      <div className="Intro">
        <h2>Welcome to Avery's Organics!</h2>

          <div className="HeaderPics" id="pics">
            <div class="row">
              <div class="col-md-4">
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format & fit=crop&w=668&q=80" alt="farm" />
              </div>
              <div class="col-md-4">
                <img src="https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format & fit=crop&w=750&q=80" alt="veggies" />
            </div>
              <div class="col-md-4">
                <img src="https://images.unsplash.com/photo-1518738727790-122bb19785e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format & fit=crop&w=750&q=80" alt="cows" />
              </div>
            </div>
          </div>
          
          <p>Avery's Organics is a 100 acre Certified Organic Farm located on the beautiful Sauvie Island, in the City of Portland.  Our goal is to promote Responsible, Organic, and Sustainable farming practices. We also farm an additional 100 acres in Clackamas County. We grow over 70 varieties of berries, fruits, vegetables, pumpkins, vineyard grapes, herbs, and nursery stock. We offer a large variety of organic products for the U-Pick, Already-Picked, as well as for the local retail and wholesale markets. All of these products are available during the season, in our farm store! We also do promotional activities at the farm to promote the sale of farm products.</p>

          <hr></hr>
        </div>

      <div className="row" id="sched-prod">
        <div className="col-md-6">
          Our Schedule
          <ScheduleController />
        </div>
        <div className="col-md-6">
          <ProduceController />
        </div>
      </div>

    </div>
  </React.Fragment>
  )
}
;


export default Container;


