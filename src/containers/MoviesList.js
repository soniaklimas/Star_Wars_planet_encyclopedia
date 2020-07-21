import React from "react";
import styled from "styled-components";
import Logo from "../assets/LOGO.svg";
import data from "../data/data.json";
import MovieItem from "../components/MovieItem";
import GlobalStyle from "../theme/GlobalStyle";

const MoviesList = () => {
  const Wrapper = styled.div`
    position: absolute;
    left: 205px;
    top: 96px;
    width: ${(props) => (props.width > 480 ? "790px" : "343px")};
    height: 521px;
    border-radius: 8px;
    background-color: #e0e6ee;
  `;

  const LogoWrapper = styled.div`
    width: 100%;
    padding: 32px 237px 16px 237px;
  `;
  const List = styled.ul`
    list-style: none;
  `;
  const ListItem = styled.li`
    width: 730px;
    height: 48px;
    margin: 0 30px 16px 30px;
    padding: 0 15px;
    box-shadow: 0px 2px 1px rgba(196, 196, 196, 0.2);
    border-radius: 4px;
    background: #ffffff;

    display: flex;
    justify-content: space-between;
  `;
  const width = window.innerWidth;
  // const planets = data.data.films.map(film => data.data.planets.map(planet => planet.filmConnection.films.filter(item => item.id === film.id)))

  return (
    <Wrapper width={width}>
      <>
        <GlobalStyle />
        <LogoWrapper>
          <img src={Logo} alt="logo" />
        </LogoWrapper>
        <List>
          {data.data.films.map((item) => (
            <ListItem>
              <MovieItem
                key={item.id}
                data={data.data.planets}
                id={item.id}
                title={item.title}
              />
            </ListItem>
            // <ListGroup>
            //   <ListGroup.Item
            //     className="m-2 px-3"
            //     className={width < 480 ? "px-0" : ""}
            //   >
            //     <MovieItem
            //       key={item.id}
            //       data={data.data.planets}
            //       id={item.id}
            //       title={item.title}
            //     />
            //   </ListGroup.Item>
            // </ListGroup>
          ))}
        </List>
      </>
    </Wrapper>
  );
};

export default MoviesList;
