export function Image(props) {
  const {className, src, alt} = props

  return <img className={className} src={src} alt={alt} />
}