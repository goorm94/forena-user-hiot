/* eslint-disable jsx-a11y/no-onchange */
import SectionContainer from './SectionContainer'
import Header from './Header'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
    const color1 = "#0037ff"
    const color2 = "#572727"

  return (
      <>
          <Header />
          <div className="fixed -z-10 h-full w-full opacity-60 sm:-bottom-0 "
               style={{background: `linear-gradient(${color1}, ${color2})`}} >
          </div>
          <SectionContainer>
          <div className="flex min-h-screen flex-col justify-between">
            <main className="mb-auto">{children}</main>
              <Footer />
          </div>
          </SectionContainer>

      </>
  )
}

export default LayoutWrapper
