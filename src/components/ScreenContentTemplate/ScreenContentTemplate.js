import cn from "classnames";
import styles from "./ScreenContentTemplate.module.scss";
import {forwardRef} from "react";

function TemplateImages(props) {
  const {className, children} = props

  return <div className={cn(styles.images, className)}>{children}</div>
}

function TemplateContent(props) {
  const {className, children} = props

  return <div className={cn(styles.content, className)}>{children}</div>
}

export const ScreenContentTemplate = forwardRef((props, ref) => {
  const {className, children} = props

  return <div ref={ref} className={cn(styles.template, className)}>{children}</div>
})

ScreenContentTemplate.Images = TemplateImages
ScreenContentTemplate.Content = TemplateContent
