import { Monster } from "../../App";

import Card from "../card/card.component";
import './card-list.styles.css'

type CardListProps = { 
  monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => (

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