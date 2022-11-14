import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {

                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                props.setUser(newUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <Container>
            <Content>
                <SlackImg src="https://img.favpng.com/15/21/12/live-television-internet-television-streaming-media-television-channel-png-favpng-T8J5ELHDXjgE7zuSAwED7dUaW.jpg" />
                <h1>Sign in Info_Channel</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign In With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #758283;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
background: #CAD5E2;
padding: 100px;
border-radius: 25px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

const SlackImg = styled.img`
height: 100px;

`

const SignInButton = styled.button`
margin-top: 50px;
background-color: #242B2E;
color: white;
border: none;
height: 40px;
border-radius: 25px;
cursor: pointer;
font-size: 15px;
`