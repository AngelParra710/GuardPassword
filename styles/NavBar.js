import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;

  background-color: #05668D;
`;

export const ContainerItems = styled.ul`
  width: 98%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 1.3rem;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: gray;
    transform: scale(1.1);
  }
`;

export const Enlace = styled.a`
  text-decoration: none;
  font: inherit;
`;