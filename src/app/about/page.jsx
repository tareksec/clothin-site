import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: 'আমাদের সম্পর্কে | About Us — দুমকি ওড়না ঘর',
  description:
    'দুমকি ওড়না ঘরের গল্প, ঐতিহ্য ও ফেব্রিক কোয়ালিটির প্রতিশ্রুতি। Learn the story, tradition, and fabric quality promise of Dumki Orna Ghor.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <AboutContent />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
