import { ChangeEvent } from "react";

import './search-box.styles.css';

/* interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}
 */

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}


const SearchBox = ({className, placeholder, onChangeHandler} : SearchBoxProps) => (

  <input 
    type={'search'} 
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChangeHandler} 
  />
)


/* class SearchBox extends Component{

  render(){
    return (
      <input 
      type={'search'} 
      className={`search-box ${this.props.className}`}
      placeholder={this.props.placeholder}
      onChange={this.props.onChangeHandler} 
      ></input>
    )
  }
} */

export default SearchBox;