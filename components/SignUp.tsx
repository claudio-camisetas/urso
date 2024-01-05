'use client'

import React, { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import logo from '../images/logo.png'

const inactivedEye = 'https://centralderequisicoes.einstein.br/static/media/icon_olho_fechado.4b41a025.svg'
const activedEye = 'https://centralderequisicoes.einstein.br/static/media/icon_olho_aberto.9a36df1e.svg'

export default function SignUp() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(inactivedEye)

  const formatCpf = (event: ChangeEvent<HTMLInputElement>) => {
    const formatedCpf = event.target.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    setCpf(formatedCpf)
  }

  const formatedPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const formatedPassword = event.target.value.replace(/\D/g, '')
    setPassword(formatedPassword)
  }

  const changeEyeImage = () => {
    if (eye === inactivedEye) {
      setEye(activedEye)
    } else {
      setEye(inactivedEye)
    }
  }

  return (
    <Container>
      <SignUpContainer>
        <ImageContainer>
          <Image
            src={logo}
            width={200}
            height={200}
            alt='Picture of the author'
          />
        </ImageContainer>
        <Form>
          <Input
            type='tel'
            name='cpf'
            maxLength={14}
            placeholder='DIGITE SEU CPF'
            value={cpf}
            onChange={formatCpf}
          />
          <Input
            type={eye === inactivedEye ? 'password' : 'text'}
            maxLength={8}
            placeholder='DIGITE SUA SENHA'
            value={password}
            onChange={formatedPassword}
          />
          <EyeButton
            imageUrl={eye}
            onClick={changeEyeImage}
          />
          <Button>CONTRATAR</Button>
          <Option>
            <input type='checkbox' id='show' />
            <label htmlFor='show'>
              Não mostrar novamente
            </label>
          </Option>
          <Help>
            <span>Preciso de ajuda</span>
            <Version>V1.87.1</Version>
          </Help>
        </Form>
      </SignUpContainer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0070cc;
  width: 100%;
  height: 100%;
  @media screen and (max-height: 600px) {
    align-items: flex-start;
    overflow: scroll;
  }
`

const SignUpContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #005ca9;
  width: 440px;
  height: 600px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 450px) {
    width: 90%;
    overflow: scroll;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`
  height: 50px;
  padding: 0 20px;
  border: 0;
  margin: 10px 0;
  border-radius: 3px;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: 2px solid #fcb502;
  }
`

const EyeButton = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 94px;
  width: 25px;
  height: 25px;
  right: 12px;
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`

const Button = styled.button`
  background: #fcb502;
  height: 50px;
  outline: 0;
  border: 0;
  color: #fff;
  border-radius: 3px;
  width: 100%;
  margin: 20px 0;
  font-weight: bold;
  &:hover {
    background: #fdbd1c;
    cursor: pointer;
  }
  &:active {
    background: #e3a302;
  }
`

const Option = styled.div`
  color: #fff;
  font-size: 16px;
`

const Help = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;
  font-size: 14px;;
  margin: 10px 0;
`

const Version = styled.div`
  color: #bcbfc0;
  font-size: 16px;
`
