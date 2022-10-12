import { Meta } from "../components/Meta";

export default function Contact() {
  return (
    <div>
      <Meta
        title="お問い合わせ | 株式会社 West Japan System"
        description="株式会社 West Japan Systemの「お問い合わせ」です。"
        ogType="article"
        ogUrl="https://west-japan-system.com/contact"
      />

      <main className="main">
        <section className="main__section-img">
          <h1 className="main__title">お問い合わせ</h1>
        </section>
        <section className="main__section-about">
          <dl className="main__dl">
            <dt className="main__dt-contact">電話番号</dt>
            <dd className="main__dd">0944-86-4843</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-contact">FAX</dt>
            <dd className="main__dd">0944-86-4854</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-contact">メールアドレス</dt>
            <dd className="main__dd">wjs@kumin.ne.jp</dd>
          </dl>
        </section>
      </main>
    </div>
  );
}
