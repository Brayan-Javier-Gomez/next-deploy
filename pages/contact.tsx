import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts/MainLayout';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
     <MainLayout>
      <h1>Pagina del contacto</h1>
    </MainLayout>
    
  )
}
