import styled from "styled-components";

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  gap: 20px;
  box-shadow: 0 3px 10px 0 #AD8B73;
`;

export const CoverImg = styled.img`
  height: 200px;
  objectfit: cover;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
`;

export const IngText = styled.span`
  font-size: 18px;
  border: solid 1px green;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-align: center;
  margin-bottom: 12px;
`;

export const SeeMoretxt = styled.span`
  font-size: 18px;
  border: solid 1px #eb3300;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 4px;
  color: #eb3300;
  text-align: center;
  margin-bottom: 12px;
`;
