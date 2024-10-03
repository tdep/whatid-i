import Image from "next/image";

export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1>Display your Spotify profile data</h1>

          <section id={"profile"}>
              <h2>Logged in as <span id={"displayName"}></span></h2>
              <span id={"avatar"}></span>
              <ul>
                  <li>User ID: <span id={"id"}></span></li>
                  <li>Email: <span id={"email"}></span></li>
                  <li>Spotify URI: <a id={"uri"} href={"#"}></a></li>
                  <li>Link: <a id={"url"} href={"#"}></a></li>
                  <li>Profile Image: <span id={"imageUrl"}></span></li>
              </ul>
          </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
