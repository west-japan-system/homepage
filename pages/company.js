import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Company() {
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
          content="株式会社West Japan Systemの「会社概要」です。"
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
          content="WestJapanSystem,westjapansystem,ウエストジャパンシステム"
        />
        <meta property="og:title" content="株式会社West Japan System" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="株式会社West Japan Systemの「会社概要」です。"
        />
        <meta
          property="og:url"
          content="https://west-japan-system.com/company"
        />
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
        <title>会社概要 | 株式会社West Japan System</title>
      </Head>

      <header className="header">
        <nav className="header__menu">
          <Link href="/">
            <a className="header__menu-logo--position">
              <Image
                src="/images/company-logo.jpg"
                alt="West Japan Systemロゴ"
                width={192}
                height={32}
                className="header__menu-logo"
              />
            </a>
          </Link>
          <div className="header__navigation">
            <Link href="/company">
              <a className="header__menu-item">会社概要</a>
            </Link>
            <Link href="/contact">
              <a className="header__menu-item">お問い合わせ</a>
            </Link>
            <button className="header__menu-icon">
              <Image
                src="/images/menu-icon.png"
                alt="メニューバーのアイコン（ハンバーガー）"
                width={40}
                height={40}
                onClick={() => menuFunction()}
              />
            </button>
            <ul
              className={`${"header__menu-mobile"} ${
                open ? "open" : "outside"
              }`}
            >
              <div className="header__cross-icon--position">
                <button className="header__cross-icon">
                  <Image
                    src="/images/cross-icon.png"
                    alt="メニューバーのアイコン（クロス）"
                    width={40}
                    height={40}
                    onClick={() => menuFunction()}
                  />
                </button>
              </div>
              <li className="header__menu-mobile--item">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className="header__menu-mobile--item">
                <Link href="/company">
                  <a>会社概要</a>
                </Link>
              </li>
              <li className="header__menu-mobile--item">
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
        <section className="main__section-img">
          <h1 className="main__title">会社概要</h1>
        </section>
        <section className="main__section-about">
          <dl className="main__dl">
            <dt className="main__dt-company">会社名</dt>
            <dd className="main__dd">株式会社West Japan System</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">設立</dt>
            <dd className="main__dd">2003年1月</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">創業</dt>
            <dd className="main__dd">2020年1月6日</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">資本金</dt>
            <dd className="main__dd">5,000,000円</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">事業内容</dt>
            <dd className="main__dd">
              パソコンのトラブルサポート
              <br />
              販売管理・会計・給与ソフトウェアのご指導
              <br />
              オリジナルソフトウェアの作成
              <br />
              OA機器の販売・リース取扱
            </dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">取締役</dt>
            <dd className="main__dd">代表取締役　川崎靖彦</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">所在地</dt>
            <dd className="main__dd">
              〒831-0026
              <br />
              福岡県大川市三丸795-4
            </dd>
          </dl>
        </section>
      </main>
      <footer className="footer">
        <small>©️株式会社West Japan System</small>
      </footer>
    </>
  );
}
