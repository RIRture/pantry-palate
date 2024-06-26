import styled from "styled-components";

export const Header = styled.div`
  color: #FFFBE9;
  background-color: #AD8B73;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #775943;
`;

export const AppName = styled.div`
  display: flex;
  align-items: center;
`;
export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  width: 44%;
  background-color:#F6F5F2;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  background-color:#F6F5F2;
`;
