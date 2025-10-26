import GlassCard from "@/components/GlassCard";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-cyan-300">Contact Me</h1>
      <GlassCard className="max-w-md text-center space-y-4">
        <p className="text-gray-200">You can reach me through:</p>
        <div className="space-y-2">
          <p>📧 <span className="text-cyan-300">deni.merdiansyah@example.com</span></p>
          <p>💼 <a href="#" className="text-cyan-400 hover:underline">LinkedIn</a></p>
          <p>🐙 <a href="#" className="text-cyan-400 hover:underline">GitHub</a></p>
        </div>
      </GlassCard>
    </section>
  );
}
