import './styles.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-slate-100'>{children}</body>
    </html>
  )
}
