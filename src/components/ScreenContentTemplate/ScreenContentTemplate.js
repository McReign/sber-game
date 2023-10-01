import cn from "classnames";
import styles from "./ScreenContentTemplate.module.scss";

function TemplateImages(props) {
  const {className, children} = props

  return <div className={cn(styles.images, className)}>{children}</div>
}

function TemplateContent(props) {
  const {className, children} = props

  return <div className={cn(styles.content, className)}>{children}</div>
}

export function ScreenContentTemplate(props) {
  const {className, children} = props

  return <div className={cn(styles.template, className)}>{children}</div>
}

ScreenContentTemplate.Images = TemplateImages
ScreenContentTemplate.Content = TemplateContent
