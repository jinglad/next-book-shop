import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const SearchBar = () => {
    return (
        <>
         <SearchInput>
            <SearchIcon className="ml-2" />
            <input type="text" placeholder="Search" />
            <input type="button" value="search" />
        </SearchInput>   
        </>
    )
}

export default SearchBar;


const SearchInput = styled.div`
  background: #f1f1f1;
  width: 500px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  border-radius: 5px;
  @media (max-width: 1000px) {
    width: 300px;
  }
  & input[type="text"] {
    border: none;
    padding: 20px;
    background: #f1f1f1;
    width: 70%;
    outline: none;
    @media (max-width: 1000px) {
      width: 50%;
      padding: 10px;
    }
  }
  & input[type="button"] {
    border: none;
    padding: 20px;
    padding-right: 35px;
    padding-left: 35px;
    background: #6946f4;
    color: white;
    border-radius: 5px;
    @media (max-width: 1000px) {
      padding: 10px;
      padding-right: 20px;
      padding-left: 20px;
      margin-left: 30px;
    }
  }
`;
