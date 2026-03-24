import styled from "@emotion/styled"
import { AppBar, MenuItem, Toolbar } from "@mui/material"



const  NavBar = () => {

    const StyledToolBar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly"
       

    }))

  return (
    <>
     <AppBar position="absolute"> 
        <StyledToolBar>
            <MenuItem>Tal</MenuItem>
            <MenuItem>Tal</MenuItem>
            <MenuItem>Tal</MenuItem>
        </StyledToolBar>
     </AppBar>
    </>
  )
}

export default NavBar
