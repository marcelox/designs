import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Designs</h1>
    <div>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Some experiments
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
