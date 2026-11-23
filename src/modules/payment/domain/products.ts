/** Catalog produk yang bisa dibeli di Wiyata Academy */
export type ProductId = "skd-intensif" | "skd-premium" | "tryout-bundle";

export interface Product {
  id: ProductId;
  name: string;
  description: string;
  price: number; // dalam Rupiah (integer)
  priceDisplay: string;
}

export const PRODUCTS: Record<ProductId, Product> = {
  "skd-intensif": {
    id: "skd-intensif",
    name: "Paket Intensif SKD CPNS",
    description:
      "Akses penuh 2.700+ soal HOTS, cheat sheet 20 modul, sprint drill, dan try out SKD simulasi resmi.",
    price: 299_000,
    priceDisplay: "Rp 299.000",
  },
  "skd-premium": {
    id: "skd-premium",
    name: "Paket Premium SKD CPNS",
    description:
      "Semua fitur Intensif + live review soal, grup belajar eksklusif, dan garansi uang kembali 7 hari.",
    price: 499_000,
    priceDisplay: "Rp 499.000",
  },
  "tryout-bundle": {
    id: "tryout-bundle",
    name: "Bundle Try Out SKD",
    description:
      "Akses 10 paket try out SKD CAT 110 soal dengan pembahasan lengkap dan ranking nasional.",
    price: 149_000,
    priceDisplay: "Rp 149.000",
  },
};

export function getProduct(id: string): Product | null {
  return PRODUCTS[id as ProductId] ?? null;
}

