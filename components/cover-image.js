import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, src, slug, height, width, link }) {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-md transition-shadow duration-200': slug,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
          <Link href={"https://forena-user-manual.s3.ap-northeast-2.amazonaws.com/FORENA_App_Manual_v1.0.pdf"}>
              <a  target="_blank" rel="noreferrer">{image}</a>
          </Link>
      ) : (
          link ? (
          <Link href={link}>
              <a  target="_blank" rel="noreferrer">{image}</a>
          </Link>
              ) :
          image
      )}
    </div>
  )
}
