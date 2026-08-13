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

export default function App() {
  return (
    <div className="min-h-screen bg-[#002776] font-sans relative">
      {/* Global Background Gradients */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at 70% 30%, #FFDF00 0%, transparent 40%), radial-gradient(circle at 20% 80%, #008D4C 0%, transparent 50%)' }}
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
    </div>
  );
}
