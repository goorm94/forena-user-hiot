import Container from './container'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            특별함 속에서 누리는 생활의 여유 FORENA
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://forena-user-manual.s3.ap-northeast-2.amazonaws.com/FORENA_App_Manual_v1.0.pdf"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              매뉴얼 읽기
            </a>
              <div className="mb-8 flex space-x-2 text-sm text-gray-1000 ">
                <div>{`© ${new Date().getFullYear()}`}</div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  {siteMetadata.headerTitle}
                </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
