import { ImagePath } from "@/Constant";
import "../index.scss";
import MainProvider from "./MainProvider";
import { detectLanguage } from "./i18n/server";
import { I18nProvider } from "./i18n/i18n-context";
import { getServerSession } from "next-auth";
import { authoption } from "./api/auth/[...nextauth]/authOption";
import SessionWrapper from "@/CommonComponents/SessionWrapper";
import { ToastContainer } from "react-toastify";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lng = await detectLanguage();
  const session = await getServerSession(authoption);
  return (
    <I18nProvider language={lng}>
      <html lang={lng}>
        <head>
          <title>Zeta admin dashboard</title>
          {/* <link rel='icon' href={`../../assets/images/logo/favicon-icon.png`} type='image/x-icon' />
          <link rel='shortcut icon' href={`../../assets/images/logo/favicon-icon.png`} type='image/x-icon' /> */}
          <script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
          <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap' rel='stylesheet'></link>
        </head>
        <body id='mainBody' className='light'>
          <SessionWrapper session={session}>
            <MainProvider>{children}</MainProvider>
            <ToastContainer />
          </SessionWrapper>
        </body>
      </html>
    </I18nProvider>
  );
}
