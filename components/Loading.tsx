'use client'

import * as S from './Loading.module.css'

export default function Loading() {
  return (
    <div className={S.container}>
      <div className={S.loading} />
    </div>
  )
}
