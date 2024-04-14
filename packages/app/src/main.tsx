import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'

import { mount } from 'svelte'

import { createApp } from 'vue'

import { ReactApp, SvelteApp, VueApp } from './apps'

import "./app.css"

createApp(VueApp).mount('#vue')

mount(SvelteApp, { target: document.getElementById('svelte')! })

createRoot(document.getElementById('react')!).render(
  <StrictMode>
    <ReactApp />
  </StrictMode>,
)
