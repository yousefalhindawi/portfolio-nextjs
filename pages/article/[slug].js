import { useEffect, useRef } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import myArticles from "@/data/articles";
import INFO from "@/data/user";

let ArticleStyle = styled.div``;

const ReadArticle = ({ INFO, myArticles }) => {
  const router = useRouter();
  const bodyRef = useRef(null);
  const { slug } = router.query;
  const handleGoBack = () => {
    router.back();
  };
  const article = myArticles && myArticles[slug - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (bodyRef.current) {
      bodyRef.current.innerHTML = article?.body;
    }
  }, [article]);

  ArticleStyle = styled.div`
    ${article?.style}
  `;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{`${article?.title} | ${INFO.main.title}`}</title>
        <meta name="description" content={article?.description} />
        <meta name="keywords" content={article?.keywords.join(", ")} />
      </Head>

      <div className="read-article-container">
        <div className="read-article-back">
          <img
            src="../back-button.png"
            alt="back"
            className="read-article-back-button"
            onClick={handleGoBack}
          />
        </div>

        <div className="read-article-wrapper">
          <div className="read-article-date-container">
            <div className="read-article-date">{article?.date}</div>
          </div>

          <div className="title read-article-title">{article?.title}</div>

          <div className="read-article-body">
            <ArticleStyle ref={bodyRef}></ArticleStyle>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  const paths = myArticles.map((article, index) => ({
    params: { slug: (index + 1).toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(props) {
  const article = myArticles[props.params.slug - 1] ?? null;
  if (!article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      INFO,
      myArticles: JSON.parse(JSON.stringify(myArticles)),
    },
  };
}
export default ReadArticle;
