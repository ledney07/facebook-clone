import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>FaceBook</title>
      </Head>

      {/**Header */}
      <Header />

      <main>
        {/**Sidebar */}
        {/**Feed */}
        {/**Widgets */}
      </main>
    </div>
  );
}

{
  /**Server-side rendering basically means that whenever an user login, it will hit the middle-server firstand that's
   * where is hostingour next year's app from there we can tell if they user sing-in or sign-out base on the request
   * that went to the server, and then it basically goes head and prepares the page and send it back to the user.
   */
}

export async function getServerSideProps(context) {
  //get User
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
