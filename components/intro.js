import { CMS_NAME } from '../lib/constants'
import dynamic from "next/dynamic";
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import Card from '@/components/Card'
import Image from "@/components/Image";
import Link from "@/components/Link";
import {useRouter} from "next/router";

const HeroEffect = dynamic(() => import('@/components/HeroEffect'), { ssr: false })
const UnchartedRing = dynamic(() => import('@/components/UnchartedRing'), { ssr: false })

const SLIDE_COUNT = 3
const slides = Array.from(Array(SLIDE_COUNT).keys())


export default function Intro() {
    const router = useRouter()

    return (
      <>
          <div className="relative pb-1 pt-2 text-center sm:pb-1 sm:pt-3">
              <div className="absolute inset-x-0 top-0 -z-20 m-auto h-full">
                  <HeroEffect/>
              </div>
              <div className="h-52">
                  <UnchartedRing/>
              </div>
              <div className="text-center">
                  <Image
                      src={`${router.basePath}/static/images/FORENA_BI_.png`}
                      alt="포레나 스마트홈"
                      href={'/'}
                  />
              </div>


              <p className="px-2 text-xl font-bold leading-6 text-gray-900 dark:text-gray-100 sm:px-6 xl:px-0">
                  홈 네트워크 서비스 회원가입
              </p>
          </div>
          <div>
              <div>
                  <EmblaCarousel slides={slides}/>
                  <div className="pb-2 w-full flex flex-wrap">
                      <Card
                          title={'앱 다운로드'}
                          description={'스마트홈 서비스를 즐기기 위해서 먼저, 포레나 스마트홈 어플리케이션을 다운로드 받아주세요.'}
                          href={'/posts/download'}
                          className="py-4 md:px-4"
                      />
                      <Card
                          title={'포레나 스마트홈 이란'}
                          description={'집에서 만나는 AI기술과 사물인터넷, 차별화된 주거서비스 포레나와 함께하세요.'}
                          href={'https://www.forena.co.kr/'}
                          className="py-4 md:px-4"
                      />
                  </div>
              </div>
          </div>
      </>
  )
}
