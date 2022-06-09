import { ContainerItems, Nav, Item } from '@styles/NavBar'
function NavBar(){
  return (
    <Nav>
      <ContainerItems>
        <Item>Generar Contraseña</Item>
        <Item>Contraseñas Guardadas</Item>
      </ContainerItems>
    </Nav>
  )
}

export default NavBar;