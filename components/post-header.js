import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Link from "next/link";

export default function PostHeader({ title, coverImage, date, author, ogImage }) {
  return (
      ogImage ? <>
          <PostTitle>{title}</PostTitle>
          <div className="hidden md:block md:mb-12">
              <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-8 md:mb-16 sm:mx-0">
              <CoverImage title={title} src={coverImage} height={620} width={1240} link={`https://play.google.com/store/apps/details?id=com.hanwha.forenaiot`} />
          </div>
              <div className="mb-8 md:mb-16 sm:mx-0">
                  <CoverImage title={title} src={ogImage} height={620} width={1240} link={`https://apps.apple.com/kr/app/%ED%8F%AC%EB%A0%88%EB%82%98-%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%99%88/id1528124965`}/>
              </div>
          <div className="max-w-2xl mx-auto">
              <div className="block md:hidden mb-6">
                  <Avatar name={author.name} picture={author.picture} />
              </div>
              <div className="mb-6 text-lg">
                  <DateFormatter dateString={date} />
              </div>
          </div>
          </> :
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
