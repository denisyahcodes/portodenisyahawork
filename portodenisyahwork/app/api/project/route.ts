import { NextResponse } from 'next/server';

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
