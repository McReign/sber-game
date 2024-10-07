import { Panel } from "../../Panel";
import { Text } from "../../Text";
import { Button } from "../../Button";
import { Image } from "../../Image";
import Image1 from "../../../assets/images/effects/image1.png";
import Image2 from "../../../assets/images/effects/image3.png";
import Image3 from "../../../assets/images/effects/image6.png";
import { useProgress } from "../../../contexts/ProgressContext";
import { ScreenContentTemplate } from "../../ScreenContentTemplate";
import { Title } from "../../Title";
import { reachMetrikaGoal } from "../../../utils/reachMetrikaGoal";
import styles from "./ScreenContent2.module.scss";

export function ScreenContent2(props) {
  const { className } = props;
  const { next } = useProgress();

  function handleNext() {
    reachMetrikaGoal("play");
    next();
  }

  return (
    <ScreenContentTemplate className={className}>
      <ScreenContentTemplate.Images>
        <Image className={styles.image1} src={Image1} />
        <Image className={styles.image2} src={Image2} />
        <Image className={styles.image3} src={Image3} />
      </ScreenContentTemplate.Images>
      <ScreenContentTemplate.Content className={styles.content}>
        <Panel className={styles.panel}>
          <Title width="325" height="54">
            <path
              d="M10.0081 22.288C4.58407 22.288 0.768066 19.144 0.768066 13.576C0.768066 8.39201 4.51207 4.91201 9.98407 4.91201C15.3841 4.91201 19.2001 8.08001 19.2001 13.624C19.2001 18.808 15.4561 22.264 10.0081 22.288ZM4.84807 13.6C4.84807 16.384 6.57607 18.664 10.0081 18.688C13.1761 18.688 15.1201 16.648 15.1201 13.6C15.1201 10.816 13.3921 8.53601 9.96007 8.51201C6.76807 8.53601 4.84807 10.576 4.84807 13.6Z"
              fill="url(#paint0_linear_25_114)"
            />
            <path
              d="M35.7721 5.20001L30.8281 8.80001H28.8841V22H25.0441V8.80001H19.9561V5.20001H35.7721Z"
              fill="url(#paint1_linear_25_114)"
            />
            <path
              d="M41.1289 15.16V22H37.2889V5.20001H41.1289V11.872H43.3369L47.7049 5.20001H52.2649L46.6489 13.072L53.3929 22H48.5449L43.5529 15.16H41.1289Z"
              fill="url(#paint2_linear_25_114)"
            />
            <path
              d="M61.2353 17.296H59.3633V22H55.5233V5.20001H61.2353C67.1393 5.20001 69.2273 7.31201 69.2273 11.104C69.2273 15.256 66.4913 17.296 61.2353 17.296ZM61.9073 8.80001H59.3633V13.696H61.7153C64.1393 13.696 65.2673 12.88 65.2673 11.128C65.2673 9.544 64.3073 8.80001 61.9073 8.80001Z"
              fill="url(#paint3_linear_25_114)"
            />
            <path
              d="M80.3206 22.288C74.8966 22.288 71.0806 19.144 71.0806 13.576C71.0806 8.39201 74.8246 4.91201 80.2966 4.91201C85.6966 4.91201 89.5126 8.08001 89.5126 13.624C89.5126 18.808 85.7686 22.264 80.3206 22.288ZM75.1606 13.6C75.1606 16.384 76.8886 18.664 80.3206 18.688C83.4886 18.688 85.4326 16.648 85.4326 13.6C85.4326 10.816 83.7046 8.53601 80.2726 8.51201C77.0806 8.53601 75.1606 10.576 75.1606 13.6Z"
              fill="url(#paint4_linear_25_114)"
            />
            <path
              d="M96.1133 5.20001V16.504L103.841 5.20001H108.089V22H104.249V10.432L96.4493 22H92.2733V5.20001H96.1133ZM101.945 0.880005H105.545C105.281 3.35201 103.481 4.57601 100.337 4.57601C97.0253 4.57601 95.1533 3.71201 94.8653 0.880005H98.4893C98.6333 1.672 99.1853 2.05601 100.289 2.05601C101.393 2.05601 101.825 1.60001 101.945 0.880005Z"
              fill="url(#paint5_linear_25_114)"
            />
            <path
              d="M125.824 22H118.312V5.20001H125.896C130.048 5.20001 131.872 6.78401 131.872 9.49601C131.872 11.272 131.2 12.472 129.568 13.24C131.464 13.672 132.376 14.92 132.376 17.104C132.376 20.584 129.832 22 125.824 22ZM122.152 18.4H125.92C127.84 18.4 128.512 17.8 128.512 16.648C128.512 15.592 127.816 14.968 125.92 14.968H122.152V18.4ZM122.152 11.992H125.584C127.288 11.992 128.032 11.32 128.032 10.336C128.032 9.37601 127.36 8.80001 125.68 8.80001H122.152V11.992Z"
              fill="url(#paint6_linear_25_114)"
            />
            <path
              d="M149.417 16V20.272C148.577 21.28 146.417 22.288 143.561 22.288C137.993 22.264 134.105 19.12 134.105 13.576C134.105 8.39201 137.945 4.91201 143.609 4.91201C146.153 4.91201 148.025 5.56 149.177 6.23201V11.2C148.121 9.80801 146.153 8.51201 143.609 8.51201C140.321 8.51201 138.305 10.552 138.305 13.6C138.305 16.384 140.081 18.688 143.609 18.688C146.393 18.688 148.409 17.608 149.417 16Z"
              fill="url(#paint7_linear_25_114)"
            />
            <path
              d="M164.873 5.20001L159.929 8.80001H156.113V11.56H163.193V15.16H156.113V18.4H164.345V22H152.273V5.20001H164.873Z"
              fill="url(#paint8_linear_25_114)"
            />
            <path
              d="M173.402 16.936C174.434 17.728 176.018 18.256 178.01 18.256C179.882 18.256 180.458 17.272 180.458 16.36C180.458 15.016 179.402 14.368 177.242 14.368C175.754 14.368 174.554 14.656 173.642 14.992L174.194 5.20001H183.626V9.04001H177.53L177.41 11.152C177.914 11.056 178.514 11.008 178.946 11.008C182.81 11.008 184.538 13.36 184.538 16.36C184.538 20.152 181.682 22.192 178.202 22.192C175.778 22.192 174.026 21.352 173.402 20.776V16.936Z"
              fill="url(#paint9_linear_25_114)"
            />
            <path
              d="M204.394 4.72001V5.992H204.706C209.842 5.992 212.698 8.77601 212.698 13.408C212.698 18.328 209.65 20.872 204.49 20.872H204.394V22.48H200.554V20.872H200.242C195.106 20.872 192.25 18.088 192.25 13.456C192.25 8.53601 195.298 5.992 200.458 5.992H200.554V4.72001H204.394ZM196.33 13.48C196.33 16.504 198.298 17.392 200.362 17.392H200.554V9.47201H200.41C197.938 9.47201 196.33 10.456 196.33 13.48ZM204.586 9.47201H204.394V17.392H204.538C207.01 17.392 208.618 16.408 208.618 13.384C208.618 10.36 206.626 9.47201 204.586 9.47201Z"
              fill="url(#paint10_linear_25_114)"
            />
            <path
              d="M223.857 5.20001L230.648 22H226.592L225.273 18.568H218.073L216.729 22H212.889L219.609 5.20001H223.857ZM219.489 14.968H223.881L221.697 9.32801L219.489 14.968Z"
              fill="url(#paint11_linear_25_114)"
            />
            <path
              d="M236.691 15.16V22H232.851V5.20001H236.691V11.872H238.899L243.267 5.20001H247.827L242.211 13.072L248.955 22H244.107L239.115 15.16H236.691Z"
              fill="url(#paint12_linear_25_114)"
            />
            <path
              d="M265.366 5.20001L260.422 8.80001H258.478V22H254.638V8.80001H249.55V5.20001H265.366Z"
              fill="url(#paint13_linear_25_114)"
            />
            <path
              d="M273.703 22.288C268.279 22.288 264.463 19.144 264.463 13.576C264.463 8.39201 268.207 4.91201 273.679 4.91201C279.079 4.91201 282.895 8.08001 282.895 13.624C282.895 18.808 279.151 22.264 273.703 22.288ZM268.543 13.6C268.543 16.384 270.271 18.664 273.703 18.688C276.871 18.688 278.815 16.648 278.815 13.6C278.815 10.816 277.087 8.53601 273.655 8.51201C270.463 8.53601 268.543 10.576 268.543 13.6Z"
              fill="url(#paint14_linear_25_114)"
            />
            <path
              d="M293.168 22H285.656V5.20001H293.24C297.392 5.20001 299.216 6.78401 299.216 9.49601C299.216 11.272 298.544 12.472 296.912 13.24C298.808 13.672 299.72 14.92 299.72 17.104C299.72 20.584 297.176 22 293.168 22ZM289.496 18.4H293.264C295.184 18.4 295.856 17.8 295.856 16.648C295.856 15.592 295.16 14.968 293.264 14.968H289.496V18.4ZM289.496 11.992H292.928C294.632 11.992 295.376 11.32 295.376 10.336C295.376 9.37601 294.704 8.80001 293.024 8.80001H289.496V11.992Z"
              fill="url(#paint15_linear_25_114)"
            />
            <path
              d="M10.0081 53.288C4.58407 53.288 0.768066 50.144 0.768066 44.576C0.768066 39.392 4.51207 35.912 9.98407 35.912C15.3841 35.912 19.2001 39.08 19.2001 44.624C19.2001 49.808 15.4561 53.264 10.0081 53.288ZM4.84807 44.6C4.84807 47.384 6.57607 49.664 10.0081 49.688C13.1761 49.688 15.1201 47.648 15.1201 44.6C15.1201 41.816 13.3921 39.536 9.96007 39.512C6.76807 39.536 4.84807 41.576 4.84807 44.6Z"
              fill="url(#paint16_linear_25_114)"
            />
            <path
              d="M42.3072 47V51.272C41.4672 52.28 39.3072 53.288 36.4512 53.288C30.8832 53.264 26.9952 50.12 26.9952 44.576C26.9952 39.392 30.8352 35.912 36.4992 35.912C39.0432 35.912 40.9152 36.56 42.0672 37.232V42.2C41.0112 40.808 39.0432 39.512 36.4992 39.512C33.2112 39.512 31.1952 41.552 31.1952 44.6C31.1952 47.384 32.9712 49.688 36.4992 49.688C39.2832 49.688 41.2992 48.608 42.3072 47Z"
              fill="url(#paint17_linear_25_114)"
            />
            <path
              d="M59.5611 36.2L54.6171 39.8H52.6731V53H48.8331V39.8H43.7451V36.2H59.5611Z"
              fill="url(#paint18_linear_25_114)"
            />
            <path
              d="M67.8799 36.2L74.6719 53H70.6159L69.2959 49.568H62.0959L60.7519 53H56.9119L63.6319 36.2H67.8799ZM63.5119 45.968H67.9039L65.7199 40.328L63.5119 45.968Z"
              fill="url(#paint19_linear_25_114)"
            />
            <path
              d="M89.3241 36.2V42.896H91.2201L94.5081 36.2H98.7081L94.5321 44.216L99.3321 53H94.7961L91.2441 46.064H89.3241V53H85.4841V46.064H83.6121L80.0601 53H75.5241L80.2521 44.456L76.0761 36.2H80.4441L83.5881 42.896H85.4841V36.2H89.3241Z"
              fill="url(#paint20_linear_25_114)"
            />
            <path
              d="M105.535 36.2V47.504L113.263 36.2H117.511V53H113.671V41.432L105.871 53H101.695V36.2H105.535Z"
              fill="url(#paint21_linear_25_114)"
            />
            <path
              d="M127.212 48.296H125.34V53H121.5V36.2H127.212C133.116 36.2 135.204 38.312 135.204 42.104C135.204 46.256 132.468 48.296 127.212 48.296ZM127.884 39.8H125.34V44.696H127.692C130.116 44.696 131.244 43.88 131.244 42.128C131.244 40.544 130.284 39.8 127.884 39.8Z"
              fill="url(#paint22_linear_25_114)"
            />
            <path
              d="M146.297 53.288C140.873 53.288 137.057 50.144 137.057 44.576C137.057 39.392 140.801 35.912 146.273 35.912C151.673 35.912 155.489 39.08 155.489 44.624C155.489 49.808 151.745 53.264 146.297 53.288ZM141.137 44.6C141.137 47.384 142.865 49.664 146.297 49.688C149.465 49.688 151.409 47.648 151.409 44.6C151.409 41.816 149.681 39.536 146.249 39.512C143.057 39.536 141.137 41.576 141.137 44.6Z"
              fill="url(#paint23_linear_25_114)"
            />
            <path
              d="M165.762 53H158.25V36.2H165.834C169.986 36.2 171.81 37.784 171.81 40.496C171.81 42.272 171.138 43.472 169.506 44.24C171.402 44.672 172.314 45.92 172.314 48.104C172.314 51.584 169.77 53 165.762 53ZM162.09 49.4H165.858C167.778 49.4 168.45 48.8 168.45 47.648C168.45 46.592 167.754 45.968 165.858 45.968H162.09V49.4ZM162.09 42.992H165.522C167.226 42.992 167.97 42.32 167.97 41.336C167.97 40.376 167.298 39.8 165.618 39.8H162.09V42.992Z"
              fill="url(#paint24_linear_25_114)"
            />
            <path
              d="M179.082 46.16V53H175.242V36.2H179.082V42.872H181.29L185.658 36.2H190.218L184.602 44.072L191.346 53H186.498L181.506 46.16H179.082Z"
              fill="url(#paint25_linear_25_114)"
            />
            <path
              d="M206.076 36.2L201.132 39.8H197.316V42.56H204.396V46.16H197.316V49.4H205.548V53H193.476V36.2H206.076Z"
              fill="url(#paint26_linear_25_114)"
            />
            <path
              d="M222.621 53H215.109V36.2H222.693C226.845 36.2 228.669 37.784 228.669 40.496C228.669 42.272 227.997 43.472 226.365 44.24C228.261 44.672 229.173 45.92 229.173 48.104C229.173 51.584 226.629 53 222.621 53ZM218.949 49.4H222.717C224.637 49.4 225.309 48.8 225.309 47.648C225.309 46.592 224.613 45.968 222.717 45.968H218.949V49.4ZM218.949 42.992H222.381C224.085 42.992 224.829 42.32 224.829 41.336C224.829 40.376 224.157 39.8 222.477 39.8H218.949V42.992Z"
              fill="url(#paint27_linear_25_114)"
            />
            <path
              d="M252.448 47V51.272C251.608 52.28 249.448 53.288 246.592 53.288C241.024 53.264 237.136 50.12 237.136 44.576C237.136 39.392 240.976 35.912 246.64 35.912C249.184 35.912 251.056 36.56 252.208 37.232V42.2C251.152 40.808 249.184 39.512 246.64 39.512C243.352 39.512 241.336 41.552 241.336 44.6C241.336 47.384 243.112 49.688 246.64 49.688C249.424 49.688 251.44 48.608 252.448 47Z"
              fill="url(#paint28_linear_25_114)"
            />
            <path
              d="M262.385 45.56H259.145V49.4H262.313C263.897 49.4 265.265 49.016 265.265 47.36C265.265 45.848 264.065 45.56 262.385 45.56ZM268.385 36.2L263.441 39.8H259.145V41.96H262.409C266.921 41.96 269.201 43.736 269.201 47.336C269.201 51.032 266.249 53 262.265 53H255.305V36.2H268.385Z"
              fill="url(#paint29_linear_25_114)"
            />
            <path
              d="M284.709 36.2L279.765 39.8H275.949V42.56H283.029V46.16H275.949V49.4H284.181V53H272.109V36.2H284.709Z"
              fill="url(#paint30_linear_25_114)"
            />
            <path
              d="M293.22 48.296H291.348V53H287.508V36.2H293.22C299.124 36.2 301.212 38.312 301.212 42.104C301.212 46.256 298.476 48.296 293.22 48.296ZM293.892 39.8H291.348V44.696H293.7C296.124 44.696 297.252 43.88 297.252 42.128C297.252 40.544 296.292 39.8 293.892 39.8Z"
              fill="url(#paint31_linear_25_114)"
            />
            <path
              d="M316.889 36.2L311.945 39.8H308.129V42.56H315.209V46.16H308.129V49.4H316.361V53H304.289V36.2H316.889Z"
              fill="url(#paint32_linear_25_114)"
            />
            <path
              d="M319.855 51.104C319.855 49.904 320.359 48.92 322.015 48.92C323.743 48.92 324.247 49.904 324.247 51.104C324.247 52.28 323.743 53.24 322.015 53.24C320.359 53.24 319.855 52.28 319.855 51.104Z"
              fill="url(#paint33_linear_25_114)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint20_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint21_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint22_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint23_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint24_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint25_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint26_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint27_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint28_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint29_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint30_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint31_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint32_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
              <linearGradient
                id="paint33_linear_25_114"
                x1="8.07245"
                y1="-20.0832"
                x2="20.2447"
                y2="75.6091"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.370833" stop-color="#333F48" />
                <stop offset="0.676307" stop-color="#005987" />
                <stop offset="0.926223" stop-color="#6BCA54" />
              </linearGradient>
            </defs>
          </Title>
          <Text className={styles.textWrapper}>
            <Text as="span">
              Тапай по экрану как можно чаще, сколько именно
              раз&nbsp;—&nbsp;секрет.
            </Text>
            <br />
            <Text as="span">
              Разомни пальцы!{"\n"}У тебя 7&nbsp;секунд на&nbsp;уровень&nbsp;—
              справишься быстрее?
            </Text>
            <br />
            <Text as="span">
              Давай вместе превратим унылые предрассудки в&nbsp;красочную
              реальность!
            </Text>
          </Text>
        </Panel>
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={handleNext}>
            Старт
          </Button>
        </div>
      </ScreenContentTemplate.Content>
    </ScreenContentTemplate>
  );
}

ScreenContent2.preloadImages = [Image1, Image2, Image3];
