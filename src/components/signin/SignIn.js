import React from 'react'
import * as s from './SignIn.Style'

const SignIn = () => {
    return (
        <s.Container>
            <s.FormWrap>
              <s.Icon to="/">bank</s.Icon>
              <s.FormContent>
                <s.Form action="#">
                  <s.FormH1>Sign in to your account</s.FormH1>
                  <s.FormLabel htmlFor='for'>Email</s.FormLabel>
                  <s.FormInput type="email" required/>
                  <s.FormLabel htmlFor="for">Password</s.FormLabel>
                  <s.FormInput type="password" required/>
                  <s.FormButton type="submit">Continue</s.FormButton>
                  <s.Text>Forgot password</s.Text>
                </s.Form>
              </s.FormContent>
            </s.FormWrap>
        </s.Container>
    )
}

export default SignIn
