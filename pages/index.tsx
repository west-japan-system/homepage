import { Meta } from "../components/Meta";

export default function Home() {
  return (
    <div>
      <Meta
        title="株式会社 West Japan System"
        description="株式会社 West Japan Systemのホームページです。West Japan Systemはパソコンのトラブルサポート、OA機器の販売、オリジナルソフトウェア作成などを手がけます。「お客様の業務を止めない」これが私たちの掲げる信念です。"
        ogType="website"
        ogUrl="https://west-japan-system.com"
      />

      <main className="main">
        <section className="main__section-img">
          <h1 className="main__title">株式会社 West Japan System</h1>
        </section>
        <article className="main__article-about">
          <h2 className="main__title-secondary">West Japan Systemについて</h2>
          <p className="main__paragraph">
            私たちはパソコンのトラブルサポート、OA機器の販売、オリジナルソフトウェア作成などを手がけます。
            <br />
            日々お客様のことを考え、想像し、お客様のニーズにお答えします。
            <br />
            対応はどこよりも早く、丁寧で綺麗に。
          </p>
        </article>
      </main>
    </div>
  );
}
