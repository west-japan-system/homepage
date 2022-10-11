import { Meta } from "../components/Meta";

export default function Company() {
  return (
    <div>
      <Meta
        title="会社概要 | 株式会社 West Japan System"
        description="株式会社 West Japan Systemの「会社概要」です。"
        ogType="article"
        ogUrl="https://west-japan-system.com/company"
      />

      <main className="main">
        <section className="main__section-img">
          <h1 className="main__title">会社概要</h1>
        </section>
        <section className="main__section-about">
          <dl className="main__dl">
            <dt className="main__dt-company">会社名</dt>
            <dd className="main__dd">株式会社 West Japan System</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">創業</dt>
            <dd className="main__dd">2003年1月</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">設立</dt>
            <dd className="main__dd">2020年1月6日</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">資本金</dt>
            <dd className="main__dd">5,000,000円</dd>
          </dl>
          <dl className="main__dl">
            <dt className="main__dt-company">事業</dt>
            <dd className="main__dd">
              ・パソコンのトラブルサポート
              <br />
              ・販売管理、会計、給与ソフトウェアの指導
              <br />
              ・オリジナルソフトウェアの作成
              <br />
              ・OA機器の販売・リース取り扱い
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
    </div>
  );
}
