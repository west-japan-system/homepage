import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuFunction = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <nav className="header__menu">
        <Link href="/">
          <a className="header__menu-logo--position">
            <Image
              src="/images/company-logo.jpg"
              alt="West Japan Systemロゴ"
              width={195}
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
  );
};
