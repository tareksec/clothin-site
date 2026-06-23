import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CategoryStrip from '@/components/CategoryStrip';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { products } from '@/data/products';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Features />
        <CategoryStrip />
        <ProductGrid products={products} />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
