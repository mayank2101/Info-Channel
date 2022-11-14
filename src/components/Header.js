import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import HelpOutline from '@material-ui/icons/HelpOutline'

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutline />
            </Main>
            <UserContainer>
                <Name>
                    {/* {props.user.name} */}
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"} />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
background: #0D0D0D;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: relative;
box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
display: flex;
margin-left: 16px;
margin-right: 16px;
`

const SearchContainer = styled.div`
min-width: 400px;
margin-left: 16px;
margin-right: 16px;
`

const Search = styled.div`
box-shadow: inset 0 0 0 1px rgb(255 255 255);
width: 100%;
border-radius: 6px; 
display: flex;
align-items: center;

input{
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
}

input:focus{
    outline: none;
}
`

const UserContainer = styled.div`
display: flex;
align-items: center;
padding-right: 16px;
position: absolute;
right: 0;
`

const Name = styled.div`
padding-right: 16px;
`

const UserImage = styled.div`
width: 28px;
height: 28px;
border: 2px solid white;
border-radius: 3px;
cursor: pointer;

img{
 width: 100%;   
}
`
