import Header from './Header'
import Footer from './Footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="">
        <main>{children}</main>
      </div>
    </>
  )
}
