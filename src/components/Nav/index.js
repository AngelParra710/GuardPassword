import Link from 'next/link'
import { ContainerItems, Nav, Item, Enlace } from '@styles/NavBar'
export default function NavBar(){
  return (
    <Nav>
      <ContainerItems>
        <Item>
          <Link href="/">
            <Enlace>Generar Contraseña</Enlace>
          </Link>
        </Item>
        <Item>
          <Link href="/guardados">
            <Enlace>Contraseñas Guardadas</Enlace>
          </Link>
        </Item>
      </ContainerItems>
    </Nav>
  )
}