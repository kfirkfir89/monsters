//import { Component } from "react";

import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => (

  <div className="card-list">
    {
      monsters.map((monster) => {
        return(
          <Card key={monster.id} monster = {monster}></Card>
        );
      })
    }
  </div>
)



/* 
class CardList extends Component {

  render() 
  {
    const { monsters } = this.props;
    return(
      <div className="card-list">
        {
          monsters.map((monster) => {
            const { name, email, id } = monster;
            return(
              <Card monster = {monster}></Card>
            );
          })
        }
      </div>
    ); 
  }
} */
export default CardList;