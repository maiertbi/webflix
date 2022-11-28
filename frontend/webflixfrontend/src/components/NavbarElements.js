import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
z-index: 14;
height: 90px;
display: flex;
justify-content: space-between;
padding: 0.18rem calc((100vw - 1000px) / 2);
`;

export const NavLink = styled(Link)`
color: #ffff;
display: flex;
cursor: pointer;
align-items: center;
text-decoration: none;
padding: 0 1.2rem;
height: 100%;

&.active {
  color: #757677;
}
`;

export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
    `;

  export const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  `;
  
