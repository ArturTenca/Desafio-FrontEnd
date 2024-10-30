
import styled from 'styled-components'

export const NavStyle = styled.section`
*{
    padding: 0%;
    margin: 0%;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
}
section{
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -10px;
    padding: 20px;
    background-color: #490b18;
    display: flex;
    justify-content: space-between;
}
nav{
    display: flex;
    gap: 20px;
    
}
.logo{
    color: #FF9FC5;
    font-size: 25px;
    margin-top: 5px;
}
.link{
    color: #FF9FC5;
    font-size: 10px;
    margin-top: 10px;
}
.login{
    color: #490b18;
    background-color: #D9D9D9;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 15px;
    font-size: 10px;
}
`