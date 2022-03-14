
// eslint-disable-next-line jsx-a11y/alt-text
import cn from "classnames";

const Image = ({...rest}) => {
    return (<img
        src={rest.src}
        width={rest.width}
        height={rest.height}
        className={cn('shadow-sm', rest.className)}
        alt={rest.alt}
        href={rest.href}
    />)
}

export default Image
