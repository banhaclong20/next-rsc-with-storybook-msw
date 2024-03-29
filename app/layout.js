import './globals.css'
import Header from '@/components/Header/header'
import SystemInfo from '@/components/SystemInfo/server-info'
import Footer from '@/components/Footer/footer'

export const metadata = {
  title: 'Next.js App Router + React Server Components Demo',
  description: 'Hacker News clone built with the Next.js App Router.',
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#ffa52a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          <div className="page">
            {children}
            <Footer />
            <SystemInfo />
          </div>
        </main>
      </body>
    </html>
  )
}
