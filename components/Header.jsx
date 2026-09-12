import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const menuFunction = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <nav className="header__menu">
        <Link href="/" className="header__menu-logo--position">
          <Image
            src="/images/company-logo.jpg"
            alt="West Japan Systemロゴ"
            width={195}
            height={32}
            className="header__menu-logo"
          />
        </Link>
        <div className="header__navigation">
          <Link href="/company" className="header__menu-item">
            会社概要
          </Link>
          <Link href="/contact" className="header__menu-item">
            お問い合わせ
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
          <ul className={`${"header__menu-mobile"} ${open ? "open" : "close"}`}>
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
              <Link href="/">Home</Link>
            </li>
            <li className="header__menu-mobile--item">
              <Link href="/company">会社概要</Link>
            </li>
            <li className="header__menu-mobile--item">
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${"header__overlay"} ${open ? "open" : "hidden"}`}
        onClick={() => menuFunction()}
      ></div>
    </header>
  );
};
