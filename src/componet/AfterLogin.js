import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavContext } from "../componet/navbar/router";

const AfterLogin = () => {
    const { setShowNav } = useContext(NavContext);
    setShowNav(true);

    return (
        <Container>
            <StyledLink to="/jCP">
                <span>Jeux Calcule</span>
                <span>Jouer maintenant</span>
            </StyledLink>
            <StyledLink to="/mot">
                <span>Jeux Prononciation</span>
                <span>Jouer maintenant</span>
            </StyledLink>
            <StyledLink to="/jeuxMot">
                <span>Jeux de mots</span>
                <span>Jouer maintenant</span>
            </StyledLink>
        </Container>
    );
};

export default AfterLogin;

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    width: 200px;
    height: 50px;
    margin: 10px 0;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 16px;
    background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(0deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%);
    }

    span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        &:first-child {
            transition: all 0.3s ease;
        }
    }

    span:last-child {
        position: absolute;
        bottom: 0;
        right: 0;
        background: linear-gradient(315deg, #76aef1 0%, #f76af7 74%);
        color: #fff;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;
        display: none;
    }

    &:hover span:last-child {
        display: block;
    }
`;
