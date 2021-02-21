import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import classes from "../components/layout.module.css";

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
          content="株式会社 West Japan Systemのウェブサイトです。West Japan Systemは日々お客様のことを考え、想像し、お客様のニーズにお答えします。対応はどこよりも早く、丁寧で綺麗に。「お客様の業務を止めない」これが私たちの掲げる信念です。"
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
          content="West Japan System, west japan system, ウエストジャパンシステム"
        />
        <meta property="og:title" content="株式会社West Japan System" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="株式会社 West Japan Systemのウェブサイトです。West Japan Systemは日々お客様のことを考え、想像し、お客様のニーズにお答えします。対応はどこよりも早く、丁寧で綺麗に。「お客様の業務を止めない」これが私たちの掲げる信念です。"
        />
        <meta property="og:url" content="https://west-japan-system.com" />
        <meta
          property="og:image"
          content="https://west-japan-system.com/images/company-logo.jpg"
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

      <header className={classes.header}>
        <nav className={classes.header__menu}>
          <Link href="/">
            <a className={classes.header__menu_logo__position}>
              <img
                src="/images/company-logo.jpg"
                alt="株式会社 West Japan Systemロゴ"
                className={classes.header__menu_logo}
              />
            </a>
          </Link>
          <div className={classes.header__navigation}>
            <Link href="/company">
              <a className={classes.header__menu_item}>会社概要</a>
            </Link>
            <Link href="/contact">
              <a className={classes.header__menu_item}>お問い合わせ</a>
            </Link>
            <button>
              <img
                src="/images/menu-icon.png"
                alt="メニューバーアイコン（ハンバーガー）"
                className={classes.header__menu_icon}
                onClick={() => menuFunction()}
              />
            </button>
            <ul
              className={`${classes.header__menu_mobile} ${
                open ? classes.open : classes.outside
              }`}
            >
              <div className={classes.header__menu_icon__position}>
                <button>
                  <img
                    src="images/cross-icon.png"
                    alt="メニューバーアイコン（クロス）"
                    className={classes.header__closeButton}
                    onClick={() => menuFunction()}
                  />
                </button>
              </div>
              <li className={classes.header__menu_mobile__item}>
                <Link href="/company">
                  <a>会社概要</a>
                </Link>
              </li>
              <li className={classes.header__menu_mobile__item}>
                <Link href="/contact">
                  <a>お問い合わせ</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`${classes.header__overlay} ${
            open ? classes.open : classes.hidden
          }`}
          onClick={() => menuFunction()}
        ></div>
      </header>
      <main className={classes.main}>
        <section className={classes.main__section_img}>
          <h1 className={classes.main__title}>株式会社 West Japan System</h1>
        </section>
        <article className={classes.main__article_about}>
          <h2 className={classes.main__title_secondary}>
            West Japan Systemについて
          </h2>
          <p className={classes.main__paragraph}>
            私たちはパソコンのトラブルサポート、OA機器の販売、オリジナルソフトウェア作成などを手がけます。
            <br />
            日々お客様のことを考え、想像し、お客様のニーズにお答えします。対応はどこよりも早く、丁寧で綺麗に。
          </p>
        </article>
      </main>
      <footer className={classes.footer}>
        <small>©️株式会社 West Japan System</small>
      </footer>
    </>
  );
}
