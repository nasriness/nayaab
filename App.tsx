/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const Navbar = () => null;
const Hero = () => null;
const MenuSection = () => null;
const GallerySection = () => null;
const CommunitySection = () => null;
const ContactSection = () => null;
const Footer = () => null;
const BookingModal = () => null;
const FeedbackModal = () => null;

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface selection:bg-rosegold-200">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <MenuSection />
        <GallerySection />
        <CommunitySection onOpenFeedback={() => setIsFeedbackOpen(true)} />
        <ContactSection />
      </main>
      
      <Footer />

      {/* Prominent Mobile Booking Button (Fixed Bottom) */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-6 z-40 flex justify-center pointer-events-none">
         <button 
           onClick={() => setIsBookingOpen(true)}
           className="w-full max-w-sm pointer-events-auto bg-text-main text-white py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-medium tracking-wide active:scale-95 transition-transform border border-gray-700 hover:bg-black"
         >
           <Calendar className="w-5 h-5 text-rosegold-400" />
           Book a Table
         </button>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </div>
  );
}
