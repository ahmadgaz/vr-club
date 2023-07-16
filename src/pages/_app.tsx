import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "~/components/layout";
import { AppWrapper } from "../context/context";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
};

export default api.withTRPC(MyApp);
