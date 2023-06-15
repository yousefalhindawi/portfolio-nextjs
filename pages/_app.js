import "@/styles/data.css";
import "@/styles/globals.css";
import "@/styles/card.css";
import "@/styles/404.css";
import "@/styles/about.css";
import "@/styles/article.css";
import "@/styles/articles.css";
import "@/styles/homepage.css";
import "@/styles/articles.css";
import "@/styles/allProjects.css";
import "@/styles/project.css";
import "@/styles/projects.css";
import "@/styles/card.css";
import "@/styles/contact.css";
import "@/styles/footer.css";
import "@/styles/logo.css";
import "@/styles/navBar.css";
import "@/styles/readArticle.css";
import "@/styles/socials.css";
import "@/styles/works.css";
import { RouterProvider } from "@/RouterContext/RouterProvider";
import Layout from "@/components/common/Layout";
// import { useRouter } from "next/router";
// import { RouterContext } from "next/dist/shared/lib/router-context";
// import { withRouter } from "next/router";
// import { RouterProvider } from "../RouterContext/RouterProvider";

// import App from "next/app";
function App({ Component, pageProps }) {
  // const router = useRouter();
  return (
    <RouterProvider>
      <Layout>
        {/* // <RouterContext.Provider value={router}> */}
        <Component {...pageProps} />
      </Layout>
    </RouterProvider>
    // </RouterContext.Provider>
  );
}
export default App;
