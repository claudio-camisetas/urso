'use client'

import React, { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import * as S from './SignUp.module.css'
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
    <div className={S.container}>
      <div className={S.signUpContainer}>
        <div className={S.imageContainer}>
          <Image
            src={logo}
            width={200}
            height={200}
            alt='Picture of the author'
          />
        </div>
        <form className={S.form}>
          <input
            type='tel'
            name='cpf'
            maxLength={14}
            placeholder='DIGITE SEU CPF'
            value={cpf}
            onChange={formatCpf}
            className={S.input}
          />
          <input
            type={eye === inactivedEye ? 'password' : 'text'}
            maxLength={8}
            placeholder='DIGITE SUA SENHA'
            value={password}
            onChange={formatedPassword}
            className={S.input}
          />
          <EyeButton
            imageUrl={eye}
            onClick={changeEyeImage}
          />
          <button className={S.button}>CONTRATAR</button>
          <div className={S.option}>
            <input type='checkbox' id='show' />
            <label htmlFor='show'>
              Não mostrar novamente
            </label>
          </div>
          <div className={S.help}>
            <span>Preciso de ajuda</span>
            <div className={S.version}>V1.87.1</div>
          </div>
        </form>
      </div>
    </div>
  )
}

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
