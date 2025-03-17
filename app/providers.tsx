'use client'
import { ThemeProvider } from "./theme-provider"

function Providers({children}:{children:React.ReactNode}) {
  return (
    <>
    <ThemeProvider attribute='class' enableSystem disableTransitionOnChange>
    {children}
    </ThemeProvider>
      
    </>
  )
}
export default Providers