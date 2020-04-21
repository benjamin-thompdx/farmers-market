import React from "react";
import ProduceByMonth from "./ProduceByMonth";


const monthlyProduceList = [  
  {  
     month: "January",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  },
  {  
     month: "February",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "March",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "April",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Garlic",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "May",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Cauliflower",
        "Garlic",
        "Lettuce",
        "Potatoes",
        "Radishes"
     ]
  },
  {  
     month: "June",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Blackberries",
        "Cherries",
        "Raspberries",
        "Strawberries",
        "Asparagus",
        "Broccoli",
        "Cauliflower",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash"
     ]
  },
  {  
     month: "July",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Raspberries",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "August",
     selection: [  
        "Apples",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Rhubarb",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "September",
     selection: [  
        "Apples",
        "Blueberries",
        "Grapes",
        "Melons",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "October",
     selection: [  
        "Apples",
        "Grapes",
        "Hazelnuts",
        "Melons",
        "Peaches",
        "Pears",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Pumpkins",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "November",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "December",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
       "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  }
];

class ProduceController extends React.Component {

  constructor(props) {
    super(props);
    this.state =
      monthlyProduceList[0];
  }

  handleClick = (index) => {
    this.setState(monthlyProduceList[index]);
  }

  render(){
    return (
      <React.Fragment>
        <div>
          <p><button variant="outlined" onClick={() => this.handleClick(0)}>January</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(1)}>February</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(2)}>March</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(3)}>April</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(4)}>May</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(5)}>June</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(6)}>July</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(7)}>August</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(8)}>September</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(9)}>October</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(10)}>November</button></p>
          <p><button variant="outlined" onClick={() => this.handleClick(11)}>December</button></p>
        </div>
        <ProduceByMonth
          month={this.state.month}
          selection={this.state.selection}/>
      </React.Fragment>
    );
  }

}

export default ProduceController;