/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Proposals from './components/Proposals';
import ActionBanner from './components/ActionBanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#002776] font-sans relative overflow-x-hidden">
      {/* Global Background Gradients */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none z-0 h-[100vh] overflow-hidden" 
        style={{ background: 'radial-gradient(circle at 30% 20%, #FFDF00 0%, transparent 40%), radial-gradient(circle at 80% 60%, #008D4C 0%, transparent 40%)' }}
      ></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Proposals />
          <ActionBanner />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
