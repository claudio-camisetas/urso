'use client'

import React, { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import * as S from './SignUp.module.css'
import logo from '../images/logo.png'

const inactivedEye = 'https://centralderequisicoes.einstein.br/static/media/icon_olho_fechado.4b41a025.svg'
const activedEye = 'https://centralderequisicoes.einstein.br/static/media/icon_olho_aberto.9a36df1e.svg'

function isValidCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, '')
  if (cpf.length !== 11) return false
  const invalidCPFs = Array.from({ length: 10 }, (_, i) => String(i).repeat(11));
  if (invalidCPFs.includes(cpf)) return false
  let total = cpf.split('').slice(0, 9).reduce((acc: number, digit: string, index: number) => acc + parseInt(digit) * (10 - index), 0) % 11;
  const digit1 = total < 2 ? 0 : 11 - total;
  total = cpf.split('').slice(0, 10).reduce((acc: number, digit: string, index: number) => acc + parseInt(digit) * (11 - index), 0) % 11;
  const digit2 = total < 2 ? 0 : 11 - total;
  return cpf.endsWith(String(digit1) + String(digit2));
}

export default function SignUp() {
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const [eye, setEye] = useState(inactivedEye)
  const [isCpfValid, setIsCpfValid] = useState(true)

  const formatCpf = (event: ChangeEvent<HTMLInputElement>) => {
    const formatedCpf = event.target.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    setIsCpfValid(true)
    if (formatedCpf.length === 14) setIsCpfValid(isValidCPF(formatedCpf))
    setCpf(formatedCpf)
  }

  const formatedPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const formatedPassword = event.target.value.replace(/\D/g, '')
    setPassword(formatedPassword)
  }

  const changeEyeImage = () => {
    if (eye === inactivedEye) setEye(activedEye)
    else setEye(inactivedEye)
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
            className={isCpfValid ? S.input : S.input_invalid}
            required
          />
          <input
            type={eye === inactivedEye ? 'password' : 'text'}
            maxLength={8}
            placeholder='DIGITE SUA SENHA'
            value={password}
            onChange={formatedPassword}
            className={S.input}
            required
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
