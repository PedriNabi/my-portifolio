import { styled } from "@mui/material"
import type { ReactNode } from "react"

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}

const  StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {


    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "10px",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
    }))

  return (
    <>
     <StyledButton onClick={onClick} sx={{
                    color: '#fff',
                    textShadow: `
                    0 0 5px #6a00ff,
                    0 0 10px #6a00ff,
                    0 0 20px #6a00ff
                    `
                }}>{children}</StyledButton>
    </>
  )
}

export default StyledButton
