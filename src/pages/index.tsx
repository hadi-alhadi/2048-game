import { Inter } from "next/font/google";
import Head from 'next/head';
import {Board} from "@/components/components/board/board";
import {Provider} from "react-redux";
import store from "@/components/store/store";
import {Score} from "@/components/components/score/score";

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

          <div className="max-w-screen-xl mx-auto overflow-hidden ">
            <div className="flex justify-center mt-8 space-x-6">

              <a href="https://github.com/hadi-alhadi" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd"
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/hadi-al-hadi/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Dribbble</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd"
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
              © 2021 Made with ❤️ by Hadi.
            </p>
          </div>
        </section>
      </Provider>
  )
}
