import React from "react";
import styled from "styled-components";
import Axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./Main.css";
import {
  Header,
  AppName,
  AppIcon,
  SearchComponent,
  SearchInput,
  SearchIcon,
} from "../components/headerComponent.js";
import hamburger from "../components/Assets/hamburger.svg";
import search from "../components/Assets/search-icon.svg";
import {
  RecipeContainer,
  RecipeName,
  CoverImg,
  IngText,
  SeeMoretxt,
} from "../components/recipeComponents.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const APP_ID = "132a0ba5";
const APP_KEY = "5e5bc9c1316de7a3e2caebb021a07854";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;

const RecipeComponent = (props) => {
  const [show, setShow] = useState(false);
  const { recipeObj } = props;
  return (
    <>
      <Dialog open={show} TransitionComponent={Transition} keepMounted>
        <DialogTitle className="font">
          {"Ingredients"}
        </DialogTitle>
        <DialogContent>
          <table className="font">
            {recipeObj.ingredients.map((ingredientObj) => (
              <tr>
                <td>{ingredientObj.text}</td>
              </tr>
            ))}
            <tr>
              <td></td>
            </tr>
          </table>
        </DialogContent>
        <DialogActions>
          <IngText
            className="font"
            onClick={() => window.open(recipeObj.url)}
          >
            See More
          </IngText>
          <SeeMoretxt
            className="font"
            onClick={() => setShow(false)}
          >
            Close
          </SeeMoretxt>
        </DialogActions>
      </Dialog>
      <RecipeContainer style={{ backgroundColor: "#F6F5F2" }}>
        <CoverImg src={recipeObj.image} />
        <RecipeName className="font">
          {recipeObj.label}
        </RecipeName>
        <IngText
          className="font"
          onClick={() => setShow(true)}
        >
          Ingredients
        </IngText>
        <SeeMoretxt
          className="font"
          onClick={() => window.open(recipeObj.url)}
        >
          See Complete Recipe
        </SeeMoretxt>
      </RecipeContainer>
    </>
  );
};

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

function Main() {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Set isLoggedIn to false and remove it from localStorage
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const fetchRecipe = async (searchString) => {
    console.log("Api Called");
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <button onClick={()=>{navigate("/pantry-palate")}} className='logo'>
        <AppName style={{ fontFamily: "Poppins, sans-serif" }}>
          <AppIcon src={hamburger} className='ico2' />
          Pantry Palate
        </AppName>
        </button>
        <SearchComponent>
          <SearchIcon src={search} />
          <SearchInput
            className="font"
            placeholder="Search using Ingredients"
            onChange={onTextChange}
            />
        </SearchComponent>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </Header>
      <RecipeListContainer>
            {recipeList.length ? (
          recipeList.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} />
          ))
        ) : (
          <Placeholder src={hamburger} />
        )}
      </RecipeListContainer>
    </Container>
  );
}

export default Main;
