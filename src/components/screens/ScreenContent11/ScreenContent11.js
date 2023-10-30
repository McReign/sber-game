import {Text} from "../../Text";
import {Button} from "../../Button";
import {Image} from "../../Image";
import Image1 from "../../../assets/images/effects/image1.png";
import Image2 from "../../../assets/images/effects/image14.png";
import Image3 from "../../../assets/images/effects/image15.png";
import Image4 from "../../../assets/images/effects/image24.png";
import {useProgress} from "../../../contexts/ProgressContext";
import {ScreenContentTemplate} from "../../ScreenContentTemplate";
import {Panel} from "../../Panel";
import {Title} from "../../Title";
import styles from './ScreenContent11.module.scss'

export function ScreenContent11(props) {
  const {className} = props
  const {next} = useProgress()

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
        <Image className={styles.image4} src={Image4} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel className={styles.panel}>
          <Title width="311" height="115">
            <path d="M11.328 4.8H9.384V18H5.544V4.8H0.456V1.2H16.272L11.328 4.8ZM21.6289 5.904H22.8529C24.3249 5.904 25.5649 6.04 26.5729 6.312C27.5969 6.568 28.4209 6.952 29.0449 7.464C29.6849 7.96 30.1409 8.576 30.4129 9.312C30.7009 10.032 30.8449 10.864 30.8449 11.808C30.8449 13.904 30.1729 15.464 28.8289 16.488C27.5009 17.496 25.5169 18 22.8769 18H17.7889V1.2H21.6289V5.904ZM32.1169 1.2H35.9569V18H32.1169V1.2ZM21.6289 9.504V14.4H23.3329C24.5489 14.4 25.4449 14.2 26.0209 13.8C26.5969 13.384 26.8849 12.728 26.8849 11.832C26.8849 11.032 26.6209 10.448 26.0929 10.08C25.5809 9.696 24.7249 9.504 23.5249 9.504H21.6289ZM60.2603 16.272C60.0523 16.528 59.7643 16.776 59.3963 17.016C59.0283 17.256 58.5883 17.472 58.0763 17.664C57.5803 17.856 57.0203 18.008 56.3963 18.12C55.7883 18.232 55.1243 18.288 54.4043 18.288C53.0123 18.288 51.7323 18.096 50.5643 17.712C49.4123 17.312 48.4203 16.744 47.5883 16.008C46.7563 15.256 46.1083 14.344 45.6443 13.272C45.1803 12.2 44.9482 10.968 44.9482 9.576C44.9482 8.28 45.1723 7.104 45.6203 6.048C46.0843 4.976 46.7323 4.064 47.5643 3.312C48.4123 2.544 49.4123 1.952 50.5643 1.536C51.7323 1.12 53.0283 0.912 54.4523 0.912C55.7323 0.912 56.8363 1.048 57.7643 1.32C58.6923 1.592 59.4443 1.896 60.0203 2.232V7.2C59.7483 6.848 59.4283 6.512 59.0603 6.192C58.6923 5.872 58.2683 5.592 57.7883 5.352C57.3243 5.096 56.8123 4.896 56.2523 4.752C55.6923 4.592 55.0923 4.512 54.4523 4.512C53.6363 4.512 52.9003 4.64 52.2443 4.896C51.5883 5.136 51.0283 5.48 50.5643 5.928C50.1163 6.36 49.7643 6.888 49.5083 7.512C49.2683 8.136 49.1483 8.832 49.1483 9.6C49.1483 10.304 49.2603 10.968 49.4843 11.592C49.7083 12.2 50.0363 12.736 50.4683 13.2C50.9163 13.648 51.4683 14.008 52.1243 14.28C52.7963 14.552 53.5723 14.688 54.4523 14.688C55.8603 14.688 57.0523 14.448 58.0283 13.968C59.0043 13.472 59.7483 12.816 60.2603 12V16.272ZM78.309 6.456L73.773 14.184H71.637L66.957 6.504V18H63.117V1.2H68.061L72.789 9.288L77.469 1.2H82.149V18H78.309V6.456ZM94.1486 18.288C92.7886 18.288 91.5406 18.096 90.4046 17.712C89.2846 17.328 88.3166 16.768 87.5006 16.032C86.6846 15.28 86.0446 14.368 85.5806 13.296C85.1326 12.208 84.9086 10.968 84.9086 9.576C84.9086 8.28 85.1326 7.104 85.5806 6.048C86.0286 4.976 86.6526 4.064 87.4526 3.312C88.2686 2.544 89.2366 1.952 90.3566 1.536C91.4926 1.12 92.7486 0.912 94.1246 0.912C95.4686 0.912 96.7006 1.104 97.8206 1.488C98.9566 1.872 99.9326 2.44 100.749 3.192C101.565 3.928 102.197 4.84 102.645 5.928C103.109 7 103.341 8.232 103.341 9.624C103.341 10.92 103.117 12.104 102.669 13.176C102.221 14.232 101.589 15.136 100.773 15.888C99.9726 16.64 99.0046 17.232 97.8686 17.664C96.7486 18.08 95.5086 18.288 94.1486 18.288ZM88.9886 9.6C88.9886 10.304 89.0926 10.96 89.3006 11.568C89.5246 12.176 89.8526 12.712 90.2846 13.176C90.7166 13.64 91.2526 14.008 91.8926 14.28C92.5326 14.552 93.2846 14.688 94.1486 14.688C94.9326 14.688 95.6366 14.568 96.2606 14.328C96.9006 14.072 97.4446 13.728 97.8926 13.296C98.3406 12.848 98.6766 12.312 98.9006 11.688C99.1406 11.064 99.2606 10.368 99.2606 9.6C99.2606 8.912 99.1486 8.264 98.9246 7.656C98.7166 7.032 98.3966 6.488 97.9646 6.024C97.5326 5.56 96.9966 5.192 96.3566 4.92C95.7166 4.648 94.9646 4.512 94.1006 4.512C93.3006 4.512 92.5806 4.64 91.9406 4.896C91.3166 5.136 90.7806 5.48 90.3326 5.928C89.9006 6.376 89.5646 6.912 89.3246 7.536C89.1006 8.16 88.9886 8.848 88.9886 9.6ZM117.379 7.896H119.275L122.563 1.2H126.763L122.587 9.216L127.387 18H122.851L119.299 11.064H117.379V18H113.539V11.064H111.667L108.115 18H103.579L108.307 9.456L104.131 1.2H108.499L111.643 7.896H113.539V1.2H117.379V7.896ZM137.406 4.8H133.59V7.56H140.67V11.16H133.59V14.4H141.822V18H129.75V1.2H142.35L137.406 4.8ZM157.436 14.4H162.068V1.2H165.908V18H145.148V1.2H148.988V14.4H153.596V1.2H157.436V14.4ZM173.738 5.904H175.178C176.666 5.904 177.914 6.04 178.922 6.312C179.946 6.568 180.77 6.952 181.394 7.464C182.034 7.96 182.49 8.576 182.762 9.312C183.05 10.032 183.194 10.864 183.194 11.808C183.194 13.904 182.522 15.464 181.178 16.488C179.834 17.496 177.842 18 175.202 18H169.898V1.2H173.738V5.904ZM173.738 9.504V14.4H175.682C176.898 14.4 177.794 14.2 178.37 13.8C178.946 13.384 179.234 12.728 179.234 11.832C179.234 11.032 178.97 10.448 178.442 10.08C177.93 9.696 177.066 9.504 175.85 9.504H173.738ZM1.608 33.232C2.184 32.896 2.928 32.6 3.84 32.344C4.768 32.088 5.88 31.96 7.176 31.96C8.248 31.96 9.2 32.048 10.032 32.224C10.88 32.384 11.592 32.64 12.168 32.992C12.744 33.328 13.184 33.768 13.488 34.312C13.792 34.856 13.944 35.512 13.944 36.28C13.944 37.304 13.68 38.12 13.152 38.728C12.624 39.32 11.872 39.792 10.896 40.144C12.256 40.32 13.248 40.728 13.872 41.368C14.496 41.992 14.808 42.856 14.808 43.96C14.808 44.712 14.656 45.408 14.352 46.048C14.064 46.688 13.616 47.248 13.008 47.728C12.416 48.192 11.656 48.56 10.728 48.832C9.816 49.088 8.728 49.224 7.464 49.24C6.712 49.24 6.008 49.184 5.352 49.072C4.712 48.976 4.128 48.84 3.6 48.664C3.072 48.472 2.608 48.256 2.208 48.016C1.824 47.776 1.52 47.528 1.296 47.272V43C1.84 43.816 2.632 44.472 3.672 44.968C4.712 45.448 5.968 45.672 7.44 45.64C7.888 45.64 8.32 45.608 8.736 45.544C9.152 45.464 9.512 45.344 9.816 45.184C10.136 45.024 10.384 44.824 10.56 44.584C10.752 44.328 10.848 44.032 10.848 43.696C10.848 43.104 10.592 42.68 10.08 42.424C9.568 42.168 8.728 42.04 7.56 42.04H5.112V38.872H7.536C8.432 38.872 9.064 38.72 9.432 38.416C9.816 38.096 10.008 37.704 10.008 37.24C10.008 36.632 9.768 36.208 9.288 35.968C8.808 35.712 8.104 35.576 7.176 35.56C6.536 35.56 5.936 35.632 5.376 35.776C4.816 35.92 4.296 36.112 3.816 36.352C3.352 36.592 2.928 36.872 2.544 37.192C2.176 37.512 1.864 37.848 1.608 38.2V33.232ZM33.75 49H29.694L28.374 45.568H21.174L19.83 49H15.99L22.71 32.2H26.958L33.75 49ZM26.982 41.968L24.798 36.328L22.59 41.968H26.982ZM39.7929 44.296V49H35.9529V32.2H41.6649C43.1369 32.2 44.3769 32.328 45.3849 32.584C46.4089 32.84 47.2329 33.224 47.8569 33.736C48.4969 34.232 48.9529 34.848 49.2249 35.584C49.5129 36.32 49.6569 37.16 49.6569 38.104C49.6569 40.2 48.9849 41.76 47.6409 42.784C46.2969 43.792 44.3049 44.296 41.6649 44.296H39.7929ZM39.7929 35.8V40.696H42.1449C43.3609 40.696 44.2569 40.488 44.8329 40.072C45.4089 39.656 45.6969 39.008 45.6969 38.128C45.6969 37.328 45.4329 36.744 44.9049 36.376C44.3929 35.992 43.5369 35.8 42.3369 35.8H39.7929ZM67.5 49H63.444L62.124 45.568H54.924L53.58 49H49.74L56.46 32.2H60.708L67.5 49ZM60.732 41.968L58.548 36.328L56.34 41.968H60.732ZM73.5429 41.56V45.4H76.7109C77.1109 45.4 77.4869 45.376 77.8389 45.328C78.1909 45.264 78.5029 45.16 78.7749 45.016C79.0469 44.856 79.2629 44.648 79.4229 44.392C79.5829 44.12 79.6629 43.776 79.6629 43.36C79.6629 42.976 79.5909 42.672 79.4469 42.448C79.3029 42.208 79.1029 42.024 78.8469 41.896C78.5909 41.768 78.2869 41.68 77.9349 41.632C77.5829 41.584 77.1989 41.56 76.7829 41.56H73.5429ZM77.8389 35.8H73.5429V37.96H76.8069C81.3349 37.96 83.5989 39.752 83.5989 43.336C83.5989 44.264 83.4229 45.08 83.0709 45.784C82.7189 46.488 82.2309 47.08 81.6069 47.56C80.9989 48.04 80.2709 48.4 79.4229 48.64C78.5749 48.88 77.6549 49 76.6629 49H69.7029V32.2H82.7829L77.8389 35.8ZM102.516 49H98.4596L97.1396 45.568H89.9396L88.5956 49H84.7556L91.4756 32.2H95.7236L102.516 49ZM95.7476 41.968L93.5636 36.328L91.3556 41.968H95.7476ZM112.344 35.8H110.4V49H106.56V35.8H101.472V32.2H117.288L112.344 35.8ZM122.645 36.904H123.868C125.341 36.904 126.581 37.04 127.589 37.312C128.613 37.568 129.437 37.952 130.061 38.464C130.701 38.96 131.157 39.576 131.429 40.312C131.717 41.032 131.861 41.864 131.861 42.808C131.861 44.904 131.189 46.464 129.845 47.488C128.517 48.496 126.533 49 123.893 49H118.805V32.2H122.645V36.904ZM133.133 32.2H136.973V49H133.133V32.2ZM122.645 40.504V45.4H124.349C125.565 45.4 126.461 45.2 127.037 44.8C127.613 44.384 127.901 43.728 127.901 42.832C127.901 42.032 127.637 41.448 127.109 41.08C126.597 40.696 125.741 40.504 124.541 40.504H122.645ZM140.93 49V32.2H148.514C150.594 32.2 152.106 32.576 153.049 33.328C154.01 34.08 154.49 35.136 154.49 36.496C154.49 37.392 154.306 38.144 153.938 38.752C153.586 39.36 153.002 39.856 152.186 40.24C154.058 40.672 154.994 41.96 154.994 44.104C154.994 44.968 154.842 45.712 154.538 46.336C154.234 46.96 153.794 47.472 153.218 47.872C152.658 48.256 151.97 48.544 151.154 48.736C150.354 48.912 149.45 49 148.442 49H140.93ZM148.538 45.4C149.498 45.4 150.17 45.256 150.554 44.968C150.938 44.664 151.13 44.224 151.13 43.648C151.13 43.12 150.938 42.712 150.554 42.424C150.17 42.12 149.498 41.968 148.538 41.968H144.77V45.4H148.538ZM148.202 38.992C149.066 38.992 149.69 38.84 150.074 38.536C150.458 38.232 150.65 37.832 150.65 37.336C150.65 36.856 150.466 36.48 150.098 36.208C149.746 35.936 149.146 35.8 148.298 35.8H144.77V38.992H148.202ZM173.93 49H169.874L168.554 45.568H161.354L160.01 49H156.17L162.89 32.2H167.138L173.93 49ZM167.162 41.968L164.978 36.328L162.77 41.968H167.162ZM183.758 35.8H181.814V49H177.974V35.8H172.886V32.2H188.702L183.758 35.8ZM194.059 36.904H195.499C196.987 36.904 198.235 37.04 199.243 37.312C200.267 37.568 201.091 37.952 201.715 38.464C202.355 38.96 202.811 39.576 203.083 40.312C203.371 41.032 203.515 41.864 203.515 42.808C203.515 44.904 202.843 46.464 201.499 47.488C200.155 48.496 198.163 49 195.523 49H190.219V32.2H194.059V36.904ZM194.059 40.504V45.4H196.003C197.219 45.4 198.115 45.2 198.691 44.8C199.267 44.384 199.555 43.728 199.555 42.832C199.555 42.032 199.291 41.448 198.763 41.08C198.251 40.696 197.387 40.504 196.171 40.504H194.059ZM1.896 76.4C2.12 75.856 2.32 75.28 2.496 74.672C2.688 74.048 2.848 73.352 2.976 72.584C3.12 71.816 3.232 70.952 3.312 69.992C3.392 69.032 3.44 67.928 3.456 66.68L3.504 63.2H15.84V76.4H17.568V83.12H13.968V80H3.84V83.12H0.216V76.4H1.896ZM7.104 66.8C7.072 67.872 7.024 68.856 6.96 69.752C6.896 70.648 6.808 71.488 6.696 72.272C6.584 73.04 6.44 73.76 6.264 74.432C6.104 75.104 5.912 75.76 5.688 76.4H12V66.8H7.104ZM28.008 80.288C26.648 80.288 25.4 80.096 24.264 79.712C23.144 79.328 22.176 78.768 21.36 78.032C20.544 77.28 19.904 76.368 19.44 75.296C18.992 74.208 18.768 72.968 18.768 71.576C18.768 70.28 18.992 69.104 19.44 68.048C19.888 66.976 20.512 66.064 21.312 65.312C22.128 64.544 23.096 63.952 24.216 63.536C25.352 63.12 26.608 62.912 27.984 62.912C29.328 62.912 30.56 63.104 31.68 63.488C32.816 63.872 33.792 64.44 34.608 65.192C35.424 65.928 36.056 66.84 36.504 67.928C36.968 69 37.2 70.232 37.2 71.624C37.2 72.92 36.976 74.104 36.528 75.176C36.08 76.232 35.448 77.136 34.632 77.888C33.832 78.64 32.864 79.232 31.728 79.664C30.608 80.08 29.368 80.288 28.008 80.288ZM22.848 71.6C22.848 72.304 22.952 72.96 23.16 73.568C23.384 74.176 23.712 74.712 24.144 75.176C24.576 75.64 25.112 76.008 25.752 76.28C26.392 76.552 27.144 76.688 28.008 76.688C28.792 76.688 29.496 76.568 30.12 76.328C30.76 76.072 31.304 75.728 31.752 75.296C32.2 74.848 32.536 74.312 32.76 73.688C33 73.064 33.12 72.368 33.12 71.6C33.12 70.912 33.008 70.264 32.784 69.656C32.576 69.032 32.256 68.488 31.824 68.024C31.392 67.56 30.856 67.192 30.216 66.92C29.576 66.648 28.824 66.512 27.96 66.512C27.16 66.512 26.44 66.64 25.8 66.896C25.176 67.136 24.64 67.48 24.192 67.928C23.76 68.376 23.424 68.912 23.184 69.536C22.96 70.16 22.848 70.848 22.848 71.6ZM57.1391 68.744C56.8671 68.488 56.5551 68.24 56.2031 68C55.8511 67.76 55.4671 67.552 55.0511 67.376C54.6351 67.184 54.1791 67.048 53.6831 66.968C53.2031 66.872 52.6911 66.848 52.1471 66.896C51.1231 67.008 50.2911 67.408 49.6511 68.096C49.0111 68.768 48.6671 69.68 48.6191 70.832V71.024C48.9711 70.288 49.4991 69.712 50.2031 69.296C50.9231 68.88 51.7631 68.672 52.7231 68.672C53.5871 68.672 54.3551 68.816 55.0271 69.104C55.7151 69.392 56.2911 69.792 56.7551 70.304C57.2191 70.8 57.5711 71.392 57.8111 72.08C58.0671 72.752 58.1951 73.48 58.1951 74.264C58.1951 75.192 58.0191 76.024 57.6671 76.76C57.3311 77.48 56.8751 78.096 56.2991 78.608C55.7231 79.12 55.0511 79.512 54.2831 79.784C53.5311 80.056 52.7391 80.192 51.9071 80.192C50.9151 80.192 49.9951 80.024 49.1471 79.688C48.2991 79.352 47.5631 78.848 46.9391 78.176C46.3151 77.504 45.8191 76.664 45.4511 75.656C45.0991 74.632 44.9231 73.448 44.9231 72.104C44.9231 70.552 45.1071 69.216 45.4751 68.096C45.8431 66.976 46.3471 66.048 46.9871 65.312C47.6271 64.576 48.3791 64.024 49.2431 63.656C50.1231 63.288 51.0671 63.08 52.0751 63.032C52.6991 63 53.2831 63.04 53.8271 63.152C54.3871 63.248 54.8831 63.384 55.3151 63.56C55.7471 63.736 56.1151 63.928 56.4191 64.136C56.7391 64.328 56.9791 64.504 57.1391 64.664V68.744ZM51.6671 72.176C50.9631 72.176 50.3471 72.376 49.8191 72.776C49.3071 73.16 49.0111 73.728 48.9311 74.48C49.1391 75.088 49.4591 75.552 49.8911 75.872C50.3231 76.192 50.9231 76.352 51.6911 76.352C52.1231 76.352 52.4991 76.296 52.8191 76.184C53.1391 76.056 53.4031 75.896 53.6111 75.704C53.8191 75.512 53.9711 75.296 54.0671 75.056C54.1791 74.8 54.2351 74.544 54.2351 74.288C54.2351 73.744 54.0271 73.256 53.6111 72.824C53.2111 72.392 52.5631 72.176 51.6671 72.176ZM61.0539 64.568C61.2619 64.376 61.5339 64.184 61.8699 63.992C62.2059 63.8 62.5979 63.632 63.0459 63.488C63.5099 63.328 64.0139 63.2 64.5579 63.104C65.1179 63.008 65.7099 62.96 66.3339 62.96C68.2219 62.976 69.6459 63.36 70.6059 64.112C71.5659 64.864 72.0459 65.944 72.0459 67.352C72.0459 68.312 71.7899 69.112 71.2779 69.752C70.7659 70.376 70.1419 70.856 69.4059 71.192C70.4619 71.416 71.2619 71.848 71.8059 72.488C72.3499 73.112 72.6219 73.992 72.6219 75.128C72.6219 75.832 72.4859 76.488 72.2139 77.096C71.9579 77.704 71.5579 78.24 71.0139 78.704C70.4859 79.152 69.8219 79.512 69.0219 79.784C68.2219 80.04 67.2939 80.176 66.2379 80.192C65.5819 80.192 64.9659 80.136 64.3899 80.024C63.8139 79.928 63.2939 79.8 62.8299 79.64C62.3819 79.464 61.9899 79.28 61.6539 79.088C61.3339 78.88 61.0939 78.696 60.9339 78.536V74.456C61.4939 74.968 62.2139 75.4 63.0939 75.752C63.9739 76.104 64.9979 76.264 66.1659 76.232C67.8939 76.232 68.7579 75.688 68.7579 74.6C68.7579 74.296 68.7099 74.04 68.6139 73.832C68.5339 73.624 68.3819 73.456 68.1579 73.328C67.9339 73.184 67.6299 73.088 67.2459 73.04C66.8619 72.976 66.3739 72.944 65.7819 72.944H64.0539V70.064H65.2779C66.2059 70.064 66.9179 69.968 67.4139 69.776C67.9259 69.568 68.1819 69.144 68.1819 68.504C68.1819 67.944 68.0139 67.544 67.6779 67.304C67.3419 67.048 66.7499 66.92 65.9019 66.92C65.0379 66.92 64.1579 67.08 63.2619 67.4C62.3819 67.72 61.6459 68.184 61.0539 68.792V64.568ZM80.9951 71.624C80.9951 70.088 81.1711 68.776 81.5231 67.688C81.8751 66.6 82.3471 65.712 82.9391 65.024C83.5471 64.32 84.2511 63.808 85.0511 63.488C85.8511 63.168 86.7071 63.008 87.6191 63.008C88.6591 63.008 89.5951 63.192 90.4271 63.56C91.2591 63.912 91.9631 64.448 92.5391 65.168C93.1151 65.872 93.5551 66.76 93.8591 67.832C94.1631 68.904 94.3151 70.168 94.3151 71.624C94.3151 73.16 94.1391 74.472 93.7871 75.56C93.4351 76.648 92.9551 77.544 92.3471 78.248C91.7391 78.936 91.0351 79.44 90.2351 79.76C89.4351 80.08 88.5791 80.24 87.6671 80.24C85.5711 80.224 83.9311 79.512 82.7471 78.104C81.5791 76.696 80.9951 74.536 80.9951 71.624ZM84.6191 71.624C84.6191 72.52 84.6751 73.288 84.7871 73.928C84.8991 74.552 85.0751 75.064 85.3151 75.464C85.5551 75.848 85.8671 76.136 86.2511 76.328C86.6511 76.52 87.1311 76.616 87.6911 76.616C88.7791 76.616 89.5471 76.2 89.9951 75.368C90.4431 74.536 90.6671 73.288 90.6671 71.624C90.6671 70.744 90.6111 69.992 90.4991 69.368C90.3871 68.728 90.2111 68.208 89.9711 67.808C89.7311 67.408 89.4111 67.112 89.0111 66.92C88.6271 66.728 88.1631 66.624 87.6191 66.608C86.5151 66.608 85.7391 67.032 85.2911 67.88C84.8431 68.712 84.6191 69.96 84.6191 71.624ZM95.8779 71.624C95.8779 70.088 96.0539 68.776 96.4059 67.688C96.7579 66.6 97.2299 65.712 97.8219 65.024C98.4299 64.32 99.1339 63.808 99.9339 63.488C100.734 63.168 101.59 63.008 102.502 63.008C103.542 63.008 104.478 63.192 105.31 63.56C106.142 63.912 106.846 64.448 107.422 65.168C107.998 65.872 108.438 66.76 108.742 67.832C109.046 68.904 109.198 70.168 109.198 71.624C109.198 73.16 109.022 74.472 108.67 75.56C108.318 76.648 107.838 77.544 107.23 78.248C106.622 78.936 105.918 79.44 105.118 79.76C104.318 80.08 103.462 80.24 102.55 80.24C100.454 80.224 98.8139 79.512 97.6299 78.104C96.4619 76.696 95.8779 74.536 95.8779 71.624ZM99.5019 71.624C99.5019 72.52 99.5579 73.288 99.6699 73.928C99.7819 74.552 99.9579 75.064 100.198 75.464C100.438 75.848 100.75 76.136 101.134 76.328C101.534 76.52 102.014 76.616 102.574 76.616C103.662 76.616 104.43 76.2 104.878 75.368C105.326 74.536 105.55 73.288 105.55 71.624C105.55 70.744 105.494 69.992 105.382 69.368C105.27 68.728 105.094 68.208 104.854 67.808C104.614 67.408 104.294 67.112 103.894 66.92C103.51 66.728 103.046 66.624 102.502 66.608C101.398 66.608 100.622 67.032 100.174 67.88C99.7259 68.712 99.5019 69.96 99.5019 71.624ZM110.761 71.624C110.761 70.088 110.937 68.776 111.289 67.688C111.641 66.6 112.113 65.712 112.705 65.024C113.313 64.32 114.017 63.808 114.817 63.488C115.617 63.168 116.473 63.008 117.385 63.008C118.425 63.008 119.361 63.192 120.193 63.56C121.025 63.912 121.729 64.448 122.305 65.168C122.881 65.872 123.321 66.76 123.625 67.832C123.929 68.904 124.081 70.168 124.081 71.624C124.081 73.16 123.905 74.472 123.553 75.56C123.201 76.648 122.721 77.544 122.113 78.248C121.505 78.936 120.801 79.44 120.001 79.76C119.201 80.08 118.345 80.24 117.433 80.24C115.337 80.224 113.697 79.512 112.513 78.104C111.345 76.696 110.761 74.536 110.761 71.624ZM114.385 71.624C114.385 72.52 114.441 73.288 114.553 73.928C114.665 74.552 114.841 75.064 115.081 75.464C115.321 75.848 115.633 76.136 116.017 76.328C116.417 76.52 116.897 76.616 117.457 76.616C118.545 76.616 119.313 76.2 119.761 75.368C120.209 74.536 120.433 73.288 120.433 71.624C120.433 70.744 120.377 69.992 120.265 69.368C120.153 68.728 119.977 68.208 119.737 67.808C119.497 67.408 119.177 67.112 118.777 66.92C118.393 66.728 117.929 66.624 117.385 66.608C116.281 66.608 115.505 67.032 115.057 67.88C114.609 68.712 114.385 69.96 114.385 71.624ZM136.918 75.296V80H133.078V63.2H138.79C140.262 63.2 141.502 63.328 142.51 63.584C143.534 63.84 144.358 64.224 144.982 64.736C145.622 65.232 146.078 65.848 146.35 66.584C146.638 67.32 146.782 68.16 146.782 69.104C146.782 71.2 146.11 72.76 144.766 73.784C143.422 74.792 141.43 75.296 138.79 75.296H136.918ZM136.918 66.8V71.696H139.27C140.486 71.696 141.382 71.488 141.958 71.072C142.534 70.656 142.822 70.008 142.822 69.128C142.822 68.328 142.558 67.744 142.03 67.376C141.518 66.992 140.662 66.8 139.462 66.8H136.918ZM153.76 76.568C154.048 76.568 154.272 76.536 154.432 76.472C154.608 76.392 154.752 76.264 154.864 76.088L147.712 63.2H152.152L156.784 71.72L160.504 63.2H164.536L158.68 76.112C158.312 76.928 157.944 77.6 157.576 78.128C157.208 78.64 156.824 79.056 156.424 79.376C156.04 79.68 155.632 79.888 155.2 80C154.784 80.128 154.336 80.192 153.856 80.192C153.392 80.192 152.944 80.144 152.512 80.048C152.096 79.952 151.776 79.856 151.552 79.76V75.896C151.824 76.104 152.16 76.272 152.56 76.4C152.96 76.512 153.36 76.568 153.76 76.568ZM170.621 72.56V76.4H173.789C174.189 76.4 174.565 76.376 174.917 76.328C175.269 76.264 175.581 76.16 175.853 76.016C176.125 75.856 176.341 75.648 176.501 75.392C176.661 75.12 176.741 74.776 176.741 74.36C176.741 73.976 176.669 73.672 176.525 73.448C176.381 73.208 176.181 73.024 175.925 72.896C175.669 72.768 175.365 72.68 175.013 72.632C174.661 72.584 174.277 72.56 173.861 72.56H170.621ZM174.917 66.8H170.621V68.96H173.885C178.413 68.96 180.677 70.752 180.677 74.336C180.677 75.264 180.501 76.08 180.149 76.784C179.797 77.488 179.309 78.08 178.685 78.56C178.077 79.04 177.349 79.4 176.501 79.64C175.653 79.88 174.733 80 173.741 80H166.781V63.2H179.861L174.917 66.8ZM183.754 78.104C183.754 77.8 183.786 77.52 183.85 77.264C183.93 76.992 184.05 76.76 184.21 76.568C184.386 76.36 184.61 76.2 184.882 76.088C185.154 75.976 185.498 75.92 185.914 75.92C186.346 75.92 186.706 75.976 186.994 76.088C187.282 76.2 187.506 76.36 187.666 76.568C187.842 76.76 187.962 76.992 188.026 77.264C188.106 77.52 188.146 77.8 188.146 78.104C188.146 78.696 187.986 79.2 187.666 79.616C187.362 80.032 186.778 80.24 185.914 80.24C185.498 80.24 185.154 80.184 184.882 80.072C184.61 79.96 184.386 79.808 184.21 79.616C184.05 79.424 183.93 79.2 183.85 78.944C183.786 78.672 183.754 78.392 183.754 78.104ZM198.539 80V63.2H206.123C208.203 63.2 209.715 63.576 210.659 64.328C211.619 65.08 212.099 66.136 212.099 67.496C212.099 68.392 211.915 69.144 211.547 69.752C211.195 70.36 210.611 70.856 209.795 71.24C211.667 71.672 212.603 72.96 212.603 75.104C212.603 75.968 212.451 76.712 212.147 77.336C211.843 77.96 211.403 78.472 210.827 78.872C210.267 79.256 209.579 79.544 208.763 79.736C207.963 79.912 207.059 80 206.051 80H198.539ZM206.147 76.4C207.107 76.4 207.779 76.256 208.163 75.968C208.547 75.664 208.739 75.224 208.739 74.648C208.739 74.12 208.547 73.712 208.163 73.424C207.779 73.12 207.107 72.968 206.147 72.968H202.379V76.4H206.147ZM205.811 69.992C206.675 69.992 207.299 69.84 207.683 69.536C208.067 69.232 208.259 68.832 208.259 68.336C208.259 67.856 208.075 67.48 207.707 67.208C207.355 66.936 206.755 66.8 205.907 66.8H202.379V69.992H205.811ZM236.957 68.456L232.421 76.184H230.285L225.605 68.504V80H221.765V63.2H226.709L231.437 71.288L236.117 63.2H240.797V80H236.957V68.456ZM252.437 66.8H248.621V69.56H255.701V73.16H248.621V76.4H256.853V80H244.781V63.2H257.381L252.437 66.8ZM274.057 78.272C273.849 78.528 273.561 78.776 273.193 79.016C272.825 79.256 272.385 79.472 271.873 79.664C271.377 79.856 270.817 80.008 270.193 80.12C269.585 80.232 268.921 80.288 268.201 80.288C266.809 80.288 265.529 80.096 264.361 79.712C263.209 79.312 262.217 78.744 261.385 78.008C260.553 77.256 259.905 76.344 259.441 75.272C258.977 74.2 258.745 72.968 258.745 71.576C258.745 70.28 258.969 69.104 259.417 68.048C259.881 66.976 260.529 66.064 261.361 65.312C262.209 64.544 263.209 63.952 264.361 63.536C265.529 63.12 266.825 62.912 268.249 62.912C269.529 62.912 270.633 63.048 271.561 63.32C272.489 63.592 273.241 63.896 273.817 64.232V69.2C273.545 68.848 273.225 68.512 272.857 68.192C272.489 67.872 272.065 67.592 271.585 67.352C271.121 67.096 270.609 66.896 270.049 66.752C269.489 66.592 268.889 66.512 268.249 66.512C267.433 66.512 266.697 66.64 266.041 66.896C265.385 67.136 264.825 67.48 264.361 67.928C263.913 68.36 263.561 68.888 263.305 69.512C263.065 70.136 262.945 70.832 262.945 71.6C262.945 72.304 263.057 72.968 263.281 73.592C263.505 74.2 263.833 74.736 264.265 75.2C264.713 75.648 265.265 76.008 265.921 76.28C266.593 76.552 267.369 76.688 268.249 76.688C269.657 76.688 270.849 76.448 271.825 75.968C272.801 75.472 273.545 74.816 274.057 74V78.272ZM286.109 75.296H284.045C283.853 75.296 283.661 75.296 283.469 75.296C283.293 75.296 283.117 75.288 282.941 75.272L280.157 80H275.741L279.173 74.552C278.037 74.088 277.229 73.424 276.749 72.56C276.269 71.68 276.029 70.616 276.029 69.368C276.029 67.288 276.701 65.744 278.045 64.736C279.389 63.712 281.381 63.2 284.021 63.2H289.949V80H286.109V75.296ZM279.989 69.344C279.989 70.16 280.245 70.76 280.757 71.144C281.285 71.512 282.157 71.696 283.373 71.696H286.109V66.8H283.541C282.341 66.8 281.445 67.008 280.853 67.424C280.277 67.824 279.989 68.464 279.989 69.344ZM293.93 63.2H297.77V76.4H305.161V63.2H309.002V76.4H310.73V83.12H307.13V80H293.93V63.2ZM1.896 107.4C2.12 106.856 2.32 106.28 2.496 105.672C2.688 105.048 2.848 104.352 2.976 103.584C3.12 102.816 3.232 101.952 3.312 100.992C3.392 100.032 3.44 98.928 3.456 97.68L3.504 94.2H15.84V107.4H17.568V114.12H13.968V111H3.84V114.12H0.216V107.4H1.896ZM7.104 97.8C7.072 98.872 7.024 99.856 6.96 100.752C6.896 101.648 6.808 102.488 6.696 103.272C6.584 104.04 6.44 104.76 6.264 105.432C6.104 106.104 5.912 106.76 5.688 107.4H12V97.8H7.104ZM28.008 111.288C26.648 111.288 25.4 111.096 24.264 110.712C23.144 110.328 22.176 109.768 21.36 109.032C20.544 108.28 19.904 107.368 19.44 106.296C18.992 105.208 18.768 103.968 18.768 102.576C18.768 101.28 18.992 100.104 19.44 99.048C19.888 97.976 20.512 97.064 21.312 96.312C22.128 95.544 23.096 94.952 24.216 94.536C25.352 94.12 26.608 93.912 27.984 93.912C29.328 93.912 30.56 94.104 31.68 94.488C32.816 94.872 33.792 95.44 34.608 96.192C35.424 96.928 36.056 97.84 36.504 98.928C36.968 100 37.2 101.232 37.2 102.624C37.2 103.92 36.976 105.104 36.528 106.176C36.08 107.232 35.448 108.136 34.632 108.888C33.832 109.64 32.864 110.232 31.728 110.664C30.608 111.08 29.368 111.288 28.008 111.288ZM22.848 102.6C22.848 103.304 22.952 103.96 23.16 104.568C23.384 105.176 23.712 105.712 24.144 106.176C24.576 106.64 25.112 107.008 25.752 107.28C26.392 107.552 27.144 107.688 28.008 107.688C28.792 107.688 29.496 107.568 30.12 107.328C30.76 107.072 31.304 106.728 31.752 106.296C32.2 105.848 32.536 105.312 32.76 104.688C33 104.064 33.12 103.368 33.12 102.6C33.12 101.912 33.008 101.264 32.784 100.656C32.576 100.032 32.256 99.488 31.824 99.024C31.392 98.56 30.856 98.192 30.216 97.92C29.576 97.648 28.824 97.512 27.96 97.512C27.16 97.512 26.44 97.64 25.8 97.896C25.176 98.136 24.64 98.48 24.192 98.928C23.76 99.376 23.424 99.912 23.184 100.536C22.96 101.16 22.848 101.848 22.848 102.6ZM46.1951 111V94.2H53.7791C55.8591 94.2 57.3711 94.576 58.3151 95.328C59.2751 96.08 59.7551 97.136 59.7551 98.496C59.7551 99.392 59.5711 100.144 59.2031 100.752C58.8511 101.36 58.2671 101.856 57.4511 102.24C59.3231 102.672 60.2591 103.96 60.2591 106.104C60.2591 106.968 60.1071 107.712 59.8031 108.336C59.4991 108.96 59.0591 109.472 58.4831 109.872C57.9231 110.256 57.2351 110.544 56.4191 110.736C55.6191 110.912 54.7151 111 53.7071 111H46.1951ZM53.8031 107.4C54.7631 107.4 55.4351 107.256 55.8191 106.968C56.2031 106.664 56.3951 106.224 56.3951 105.648C56.3951 105.12 56.2031 104.712 55.8191 104.424C55.4351 104.12 54.7631 103.968 53.8031 103.968H50.0351V107.4H53.8031ZM53.4671 100.992C54.3311 100.992 54.9551 100.84 55.3391 100.536C55.7231 100.232 55.9151 99.832 55.9151 99.336C55.9151 98.856 55.7311 98.48 55.3631 98.208C55.0111 97.936 54.4111 97.8 53.5631 97.8H50.0351V100.992H53.4671ZM67.0273 98.904H68.2513C69.7233 98.904 70.9633 99.04 71.9713 99.312C72.9953 99.568 73.8193 99.952 74.4433 100.464C75.0833 100.96 75.5393 101.576 75.8113 102.312C76.0993 103.032 76.2433 103.864 76.2433 104.808C76.2433 106.904 75.5713 108.464 74.2273 109.488C72.8993 110.496 70.9153 111 68.2753 111H63.1873V94.2H67.0273V98.904ZM77.5153 94.2H81.3553V111H77.5153V94.2ZM67.0273 102.504V107.4H68.7313C69.9473 107.4 70.8433 107.2 71.4193 106.8C71.9953 106.384 72.2833 105.728 72.2833 104.832C72.2833 104.032 72.0193 103.448 71.4913 103.08C70.9793 102.696 70.1233 102.504 68.9233 102.504H67.0273ZM88.5283 99.408C88.5283 99.824 88.5763 100.192 88.6723 100.512C88.7843 100.816 88.9603 101.072 89.2003 101.28C89.4563 101.488 89.8003 101.64 90.2323 101.736C90.6643 101.832 91.2083 101.88 91.8643 101.88C92.8403 101.88 93.7443 101.728 94.5763 101.424V94.2H98.4163V111H94.5763V104.904C94.1123 105.048 93.5923 105.168 93.0163 105.264C92.4403 105.344 91.8483 105.384 91.2403 105.384C90.0403 105.384 89.0243 105.272 88.1923 105.048C87.3603 104.808 86.6803 104.464 86.1523 104.016C85.6403 103.552 85.2643 102.984 85.0243 102.312C84.8003 101.64 84.6883 100.864 84.6883 99.984V94.2H88.5283V99.408ZM110.031 97.8H106.215V100.56H113.295V104.16H106.215V107.4H114.447V111H102.375V94.2H114.975L110.031 97.8ZM127.273 97.8H125.329V111H121.489V97.8H116.401V94.2H132.217L127.273 97.8ZM147.328 111H143.272L141.952 107.568H134.752L133.408 111H129.568L136.288 94.2H140.536L147.328 111ZM140.56 103.968L138.376 98.328L136.168 103.968H140.56ZM167.717 104.16H159.605V111H155.765V94.2H159.605V100.56H167.717V94.2H171.557V111H167.717V104.16ZM191.555 111H187.499L186.179 107.568H178.979L177.635 111H173.795L180.515 94.2H184.763L191.555 111ZM184.787 103.968L182.603 98.328L180.395 103.968H184.787ZM204.882 97.8H199.65C199.538 99.832 199.386 101.576 199.194 103.032C199.002 104.472 198.778 105.696 198.522 106.704C198.266 107.696 197.978 108.496 197.658 109.104C197.338 109.696 196.994 110.152 196.626 110.472C196.274 110.776 195.89 110.976 195.474 111.072C195.058 111.184 194.634 111.24 194.202 111.24C193.882 111.24 193.562 111.208 193.242 111.144C192.922 111.08 192.674 111.008 192.498 110.928V107.184C192.626 107.232 192.762 107.264 192.906 107.28C193.05 107.296 193.178 107.304 193.29 107.304C193.466 107.304 193.65 107.28 193.842 107.232C194.034 107.168 194.218 107.032 194.394 106.824C194.57 106.616 194.738 106.312 194.898 105.912C195.058 105.496 195.21 104.928 195.354 104.208C195.498 103.488 195.618 102.6 195.714 101.544C195.826 100.488 195.922 99.2 196.002 97.68L196.17 94.2H208.722V111H204.882V97.8ZM220.711 111.288C219.351 111.288 218.103 111.096 216.967 110.712C215.847 110.328 214.879 109.768 214.063 109.032C213.247 108.28 212.607 107.368 212.143 106.296C211.695 105.208 211.471 103.968 211.471 102.576C211.471 101.28 211.695 100.104 212.143 99.048C212.591 97.976 213.215 97.064 214.015 96.312C214.831 95.544 215.799 94.952 216.919 94.536C218.055 94.12 219.311 93.912 220.687 93.912C222.031 93.912 223.263 94.104 224.383 94.488C225.519 94.872 226.495 95.44 227.311 96.192C228.127 96.928 228.759 97.84 229.207 98.928C229.671 100 229.903 101.232 229.903 102.624C229.903 103.92 229.679 105.104 229.231 106.176C228.783 107.232 228.151 108.136 227.335 108.888C226.535 109.64 225.567 110.232 224.431 110.664C223.311 111.08 222.071 111.288 220.711 111.288ZM215.551 102.6C215.551 103.304 215.655 103.96 215.863 104.568C216.087 105.176 216.415 105.712 216.847 106.176C217.279 106.64 217.815 107.008 218.455 107.28C219.095 107.552 219.847 107.688 220.711 107.688C221.495 107.688 222.199 107.568 222.823 107.328C223.463 107.072 224.007 106.728 224.455 106.296C224.903 105.848 225.239 105.312 225.463 104.688C225.703 104.064 225.823 103.368 225.823 102.6C225.823 101.912 225.711 101.264 225.487 100.656C225.279 100.032 224.959 99.488 224.527 99.024C224.095 98.56 223.559 98.192 222.919 97.92C222.279 97.648 221.527 97.512 220.663 97.512C219.863 97.512 219.143 97.64 218.503 97.896C217.879 98.136 217.343 98.48 216.895 98.928C216.463 99.376 216.127 99.912 215.887 100.536C215.663 101.16 215.551 101.848 215.551 102.6ZM239.72 97.8H236.504V111H232.664V94.2H244.664L239.72 97.8ZM260.625 111H256.569L255.249 107.568H248.049L246.705 111H242.865L249.585 94.2H253.833L260.625 111ZM253.857 103.968L251.673 98.328L249.465 103.968H253.857ZM263.23 109.104C263.23 108.8 263.262 108.52 263.326 108.264C263.406 107.992 263.526 107.76 263.686 107.568C263.862 107.36 264.086 107.2 264.358 107.088C264.63 106.976 264.974 106.92 265.39 106.92C265.822 106.92 266.182 106.976 266.47 107.088C266.758 107.2 266.982 107.36 267.142 107.568C267.318 107.76 267.438 107.992 267.502 108.264C267.582 108.52 267.622 108.8 267.622 109.104C267.622 109.696 267.462 110.2 267.142 110.616C266.838 111.032 266.254 111.24 265.39 111.24C264.974 111.24 264.63 111.184 264.358 111.072C264.086 110.96 263.862 110.808 263.686 110.616C263.526 110.424 263.406 110.2 263.326 109.944C263.262 109.672 263.23 109.392 263.23 109.104Z" fill="url(#paint0_linear_497_94)"/>
            <defs>
              <linearGradient id="paint0_linear_497_94" x1="7.90323" y1="-51" x2="59.5141" y2="149.063" gradientUnits="userSpaceOnUse">
                <stop offset="0.370833" stopColor="#333F48"/>
                <stop offset="0.676307" stopColor="#005987"/>
                <stop offset="0.926223" stopColor="#6BCA54"/>
              </linearGradient>
            </defs>
          </Title>
          <Text className={styles.textWrapper}>
            <Text as='span'>Зарплаты хватит и&nbsp;на&nbsp;поездки, и&nbsp;на&nbsp;насыщенный досуг!</Text>
            <br/>
            <Text as='span'>А приятные бонусы от&nbsp;компании дополнят удовлетворенность своей работой.</Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={next}>Это по мне</Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  )
}

ScreenContent11.preloadImages = [Image1, Image2, Image3, Image4]