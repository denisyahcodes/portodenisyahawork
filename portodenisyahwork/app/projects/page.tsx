import GlassCard from "@/components/GlassCard";

export default function Project() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-cyan-300">My Project</h1>
      <GlassCard className="max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-cyan-400">
          Analisis Klasifikasi dalam Data
        </h2>
        <p className="mt-3 text-gray-200">
          Dataset berisi informasi tentang pembayaran gagal bayar, faktor demografis, data kredit, riwayat pembayaran, dan laporan tagihan klien kartu kredit di Taiwan dari April 2005 hingga September 2005.
        </p>
        <p className="mt-3 text-gray-400 text-sm">
          Referensi: UCI Machine Learning Repository — Credit Card Default Dataset.
        </p>
        <a
          href="#"
          className="inline-block mt-5 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/50 hover:bg-cyan-500/30 transition"
        >
          Lihat Notebook (.ipynb)
        </a>
      </GlassCard>
    </section>
  );
}
