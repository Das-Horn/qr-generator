import { css } from "@emotion/css";
import Header from "../Components/Header";
import Content from "../Components/Content";
import QRC from "../Components/QrcodeBody";
import Head from "next/head";

export default function Home() {
  return (
    <div className={css`
      position : absolute;
      top : 0;
      left : 0;
      display : flex;
      width : 100vw;
      height : 100vh;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
    `}>
      <Head>
        <title>QR Code Generator</title>
      </Head>
      <Header />
      <Content>
        <p>This is a very simple QR Code Generator that takes any text or link and transforms it into a qr code. It utilizes a JS librarie based of this <a href="https://kazuhikoarase.github.io/qrcode-generator/js/demo/">generator</a></p>
        <QRC />
      </Content>
    </div>
  )
}
