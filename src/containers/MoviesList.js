import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import GlobalStyle from "../theme/GlobalStyle";
import Logo from "../assets/LOGO.svg";
import MovieItem from "../components/MovieItem";

const MoviesList = () => {
  const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 96px;
    transform: translateX(-50%);
    width: ${(props) => (props.width > 480 ? "790px" : "343px")};
    min-height: 521px;
    border-radius: 8px;
    background-color: #e0e6ee;
  `;

  const LogoWrapper = styled.div`
    width: "100%";
    padding: ${(props) =>
      props.width > 480 ? "32px 237px 16px 237px;" : "35px 60px 15px"};
  `;

  const List = styled.ul`
    list-style: none;
  `;

  const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    min-height: 48px;
    margin: 0 30px 16px 30px;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    border-radius: 4px;
    background: #ffffff;
  `;

  const width = window.screen.width;

  return (
    <Wrapper width={width}>
      <>
        <GlobalStyle />
        <LogoWrapper width={width}>
          <img src={Logo} alt="logo" width={width > 480 ? "100%" : "222px"} />
        </LogoWrapper>
        <List>
          {data.data.films.map((item) => (
            <ListItem width={width}>
              <MovieItem
                key={item.id}
                data={data.data.planets}
                id={item.id}
                title={item.title}
              />
            </ListItem>
          ))}
        </List>
      </>
    </Wrapper>
  );
};

export default MoviesList;
