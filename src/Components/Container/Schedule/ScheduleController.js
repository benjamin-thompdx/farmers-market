import React from 'react';
import Day from './Day';

const marketSchedule = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];

class ScheduleController extends React.Component {

  constructor(props) {
    super(props);
    this.state = 
      marketSchedule[0];
  }

  handleClick = (index) => {
    this.setState(marketSchedule[index]);
  }

  render(){
    // let currentlyVisibleState = null;
    // let goToDay = null;
    // if (this.state.formVisibleOnPage) {
    //   currentlyVisibleState = <ScheduleForm />
      
    // } else {
    //   currentlyVisibleState = <Day />
    //   goToDay = <button onClick={this.handleClick}>Choose another day</button>
      
    // }
    return (
      // <React.Fragment>
      //   {ScheduleForm}
      //   {currentlyVisibleState}
      //   {goToDay}
      // </React.Fragment>
            <React.Fragment>
              <div>
              <p><button variant="outlined" onClick={() => this.handleClick(0)}>Sunday</button></p>
              <p><button variant="outlined" onClick={() => this.handleClick(1)}>Monday</button></p>
              <p><button variant="outlined" onClick={() => this.handleClick(2)}>Tuesday</button></p>
              <p><button variant="outlined" onClick={() => this.handleClick(3)}>Wednesday</button></p>
              <p><button variant="outlined" onClick={() => this.handleClick(4)}>Thursday</button></p>          
              <p><button variant="outlined" onClick={() => this.handleClick(5)}>Saturday</button></p>
              </div>
            <Day
              day={this.state.day}
              hours={this.state.hours}
              location={this.state.location}
              booth={this.state.booth}/>
            </React.Fragment>
 
    );
  }

}


export default ScheduleController;