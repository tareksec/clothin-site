import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import HowToOrderContent from '@/components/HowToOrderContent';

export const metadata = {
  title: 'অর্ডার নিয়ম | How to Order — দুমকি ওড়না ঘর',
  description:
    'হোয়াটসঅ্যাপে অর্ডার, বিকাশ/নগদ পেমেন্ট ও ডেলিভারি তথ্য। Step-by-step guide to ordering via WhatsApp with Bkash/Nagad payment and delivery details.',
};

export default function HowToOrderPage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HowToOrderContent />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
