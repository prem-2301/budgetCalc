import { useRouter } from "next/router";
import App from "./_app";

const ThemePage = () => {
  const { theme } = useRouter().query;

  return <App theme={theme} />;
};

export default ThemePage;
