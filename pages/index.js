import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const menuFunction = () => {
    setOpen(!open);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-language" content="ja" />
        <meta
          name="description"
          content="株式会社West Japan Systemのウェブサイトです。「お客様の業務を止めない」これが私たちの掲げる信念です。"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="West Japan System" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="keywords"
          content="West Japan System,west japan system,ウエストジャパンシステム"
        />
        <meta property="og:title" content="株式会社West Japan System" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="株式会社 West Japan Systemのウェブサイトです。「お客様の業務を止めない」これが私たちの掲げる信念です。"
        />
        <meta property="og:url" content="https://west-japan-system.com" />
        <meta
          property="og:image"
          content="https://west-japan-system.com/images/company_ogp-logo.png"
        />
        <meta property="og:site_name" content="株式会社West Japan System" />
        <meta property="og:locale" content="ja_JP" />
        <noscript data-n-css="true"></noscript>
        <link
          rel="apple-touch-icon-precomposed"
          href="/images/apple-touch-icon.png"
        />
        <link rel="canonical" href="https://west-japan-system.com" />
        <link rel="icon" href="/favicon.ico" />
        <title>株式会社West Japan System</title>
      </Head>

      <header className="header">
        <nav className="header__menu">
          <Link href="/">
            <a className="header__menu_logo__position">
              <Image
                src="/images/company-logo.jpg"
                alt="West Japan Systemロゴ"
                width={180}
                height={30}
                className="header__menu_logo"
              />
            </a>
          </Link>
          <div className="header__navigation">
            <Link href="/company">
              <a className="header__menu_item">会社概要</a>
            </Link>
            <Link href="/contact">
              <a className="header__menu_item">お問い合わせ</a>
            </Link>
            <button>
              <img
                src="/images/menu-icon.png"
                alt="メニューバーアイコン（ハンバーガー）"
                width="40"
                height="40"
                className="header__menu_icon"
                onClick={() => menuFunction()}
              />
            </button>
            <ul
              className={`${"header__menu_mobile"} ${
                open ? "open" : "outside"
              }`}
            >
              <div className="header__menu_icon__position">
                <button>
                  <img
                    src="/images/cross-icon.png"
                    alt="メニューバーアイコン（クロス）"
                    width="40"
                    height="40"
                    className="header__closeButton"
                    onClick={() => menuFunction()}
                  />
                </button>
              </div>
              <li className="header__menu_mobile__item">
                <Link href="/company">
                  <a>会社概要</a>
                </Link>
              </li>
              <li className="header__menu_mobile__item">
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`${"header__overlay"} ${open ? "open" : "hidden"}`}
          onClick={() => menuFunction()}
        ></div>
      </header>
      <main className="main">
        <section className="main__section_img">
          <h1 className="main__title">株式会社West Japan System</h1>
        </section>
        <article className="main__article_about">
          <h2 className="main__title_secondary">West Japan Systemについて</h2>
          <p className="main__paragraph">
            私たちはパソコンのトラブルサポート、OA機器の販売、オリジナルソフトウェア作成などを手がけます。
            <br />
            日々お客様のことを考え、想像し、お客様のニーズにお答えします。対応はどこよりも早く、丁寧で綺麗に。
          </p>
        </article>
      </main>
      <footer className="footer">
        <small>©️株式会社West Japan System</small>
      </footer>
    </>
  );
}
