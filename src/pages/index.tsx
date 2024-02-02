import { Inter } from "next/font/google";
import Head from 'next/head';
import {Board} from "@/components/components/board/board";
import {Provider} from "react-redux";
import store from "@/components/store/store";
import {Score} from "@/components/components/score/score";
import {Footer} from "@/components/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <Provider store={store}>
        <Head>
          <title>2048 Game | Next App</title>
          <meta name="description" content="this is 2024 game using next js" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <section className="bg-white min-h-screen">

          <main
              className={`flex  flex-col items-center justify-between p-5 ${inter.className}`}
          >
            <div className="flex flex-row items-center justify-between gap-10 m-4">
              <p className="text-6xl font-extrabold text-amber-500 drop-shadow">
                2048
              </p>
             <Score />
            </div>

            <div className="flex flex-col items-center justify-center">
              <Board />
            </div>
          </main>
          <Footer />
        </section>
      </Provider>
  )
}
