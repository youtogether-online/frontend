import { allSettled, fork, sample } from 'effector'
import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { getSessionFx } from '@/entities/session'
import { App } from './app'

const root = createRoot(document.querySelector('#root')!)

const scope = fork()

allSettled(getSessionFx, { scope }).then(() =>
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
)
