import Image from "next/image";
import {Profile} from "@/app/ui/profile";
import {getAccessToken, redirectToAuthCodeFlow} from "@/app/utils/auth";
import { fetchProfile } from "@/app/utils/data";

export default async function Home() {

    const clientId = '5c94c60c4ca5447ab76691f093ea019c';
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
        await redirectToAuthCodeFlow(clientId);
    } else {
        const accessToken = await getAccessToken(clientId, code);
        const profile = await fetchProfile(accessToken);
        populateUI(profile);
    }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Profile />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
