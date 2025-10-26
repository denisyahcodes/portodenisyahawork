export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
      <div className="text-center space-y-4">
        <img
          src="/pp1.jpg"
          alt="Deni Merdiansyah"
          className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-lg"
        />
        <h1 className="text-3xl font-bold tracking-wide">Deni Merdiansyah</h1>
        <p className="max-w-xl text-gray-300 mx-auto">
          I am an analytically-driven individual with a deep passion for technology and informatics. My goal is to leverage my technical expertise and analytical mindset to transform challenges into effective digital solutions.
        </p>
      </div>
    </main>
  );
}
