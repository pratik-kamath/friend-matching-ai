export default async function Home() {
  const data = await (await fetch(process.env.API_URL as string)).json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            FriendMatchAI
          </h1>

          <em>{data.message}!</em>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            FriendMatchAI is an AI-powered friend-matching platform that
            connects people based on their texting style, interests,
            personality, and real-world filters like age and distance. Users
            onboard through an LLM chat, generating embeddings stored in a
            vector database. ## Features - LLM-based onboarding - Embedding
            extraction - Vector similarity search - Distance & age filters -
            FastAPI backend - Next.js frontend
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"></div>
      </main>
    </div>
  );
}
