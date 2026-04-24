import { createRoot } from 'react-dom/client'
import { bootstrapApplication } from '@/app/composition/AppModule'
import './styles/global.css'
import './styles/antd-override.css'
import App from './app/App.tsx'

async function start() {
  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === 'true') {
    const { worker } = await import('./mocks/browser')
    await worker.start({ onUnhandledRequest: 'bypass' })
  }

  await bootstrapApplication()

  createRoot(document.getElementById('root')!).render(<App />)
}

void start()
