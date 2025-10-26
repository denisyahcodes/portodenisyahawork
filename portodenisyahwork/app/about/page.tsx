import GlassCard from "@/components/GlassCard";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-cyan-300">About Me</h1>
      <GlassCard className="max-w-2xl text-center">
        <p className="text-gray-200 leading-relaxed">
          I am <span className="text-cyan-400 font-semibold">Deni Merdiansyah</span>,
          an analytically-driven individual with a deep passion for technology and informatics.
          My academic background is rooted in Mathematics and Natural Sciences (MIPA) and
          I am currently studying Informatics Engineering Education at the State University of Jakarta (UNJ).
        </p>
        <br />
        <p className="text-gray-200 leading-relaxed">
          I’m interested in Data Science and Data Analysis — especially in how data can reveal
          insights that guide smart, impactful decisions in education and beyond.
        </p>
      </GlassCard>
    </section>
  );
}
