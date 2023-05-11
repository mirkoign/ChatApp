import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Layout = () => {

    return (

        <AppBody>
            <Container>
                <Outlet />
            </Container>
        </AppBody>

    )
}



const AppBody = styled.div`
    height: calc(100vh - 56px);
    width: 100%;
`

const Container = styled.div`
    max-width: 900px;
    margin: 1em auto;
`



export default Layout;