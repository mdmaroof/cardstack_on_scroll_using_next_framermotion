import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-black text-white flex items-center justify-center">Block One</section>
      <section className="bg-slate-400 py-20">
        <div className="relative flex flex-col items-center justify-center max-w-[1024px] mx-auto gap-10 ">
          {new Array(3).fill(null).map((z, i) => {
            return (
              <Card key={i} index={i} />
            )
          })}
        </div>
      </section>
      <section className="h-screen bg-red-800 flex items-center justify-center">Block Three</section>
    </main>
  );
}
