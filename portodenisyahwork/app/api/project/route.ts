import { NextResponse } from 'next/server';

// Anda juga bisa mengimpor NextRequest jika Anda perlu membaca parameter query atau body
// import type { NextRequest } from 'next/server';

/**
 * Menangani permintaan GET ke /api/project
 * Ini adalah contoh dasar untuk mengembalikan daftar proyek.
 */
export async function GET(request: Request) {
  
  // Nanti, Anda bisa mengambil data ini dari database atau sumber lain.
  const projects = [
    {
      id: 1,
      name: "Analisis Klasifikasi dalam Data",
      description: "Dataset berisi informasi tentang pembayaran gagal bayar..."
    }
  ];

  // Mengembalikan respons JSON
  return NextResponse.json({
    message: "Data proyek berhasil diambil",
    data: projects
  });
}

// Anda juga bisa menambahkan metode lain seperti POST, PUT, DELETE di sini
// export async function POST(request: Request) {
//   ...
// }