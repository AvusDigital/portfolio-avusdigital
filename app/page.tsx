"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0D0D0E] text-[#F5F5F5] min-h-screen overflow-hidden">

      {/* MENU LATERAL */}
      <div
        className={`fixed top-0 left-0 h-screen w-full md:w-[40%] bg-[#0D0D0E] z-[100] transition-all duration-700 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-8 md:px-14 py-8 border-b border-white/10">
          <h2 className="tracking-[0.3em] uppercase text-sm opacity-60">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl hover:opacity-50 transition-all duration-500"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col mt-28 px-8 md:px-14 gap-6 text-2xl md:text-3xl uppercase">

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-50 transition-all duration-500"
          >
            Início
          </a>

          <a
            href="#manifesto"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-50 transition-all duration-500"
          >
            Sobre
          </a>

          <a
            href="#signature"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-50 transition-all duration-500"
          >
            Signature
          </a>

          <a
            href="#cases"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-50 transition-all duration-500"
          >
            Cases
          </a>

          <a
            href="#plans"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-50 transition-all duration-500"
          >
            Planos
          </a>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-14 py-5 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-white/5">

        {/* MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-[11px] tracking-[0.35em] uppercase flex items-center gap-3 hover:opacity-70 transition-all duration-500"
        >
          <span className="text-lg">☰</span>
          Menu
        </button>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Avus Logo"
            width={38}
            height={38}
            className="object-contain opacity-90"
          />
        </div>

        {/* CONTATO */}
        <a
          href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20em%20criar%20um%20Site"
          target="_blank"
          className="border border-white/20 rounded-full px-6 py-2 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700"
        >
          Contato
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <h1 className="title-font text-5xl md:text-7xl lg:text-[9rem] uppercase leading-none">
          AVUS DIGITAL
        </h1>

        <p className="mt-8 text-[11px] md:text-sm tracking-[0.35em] uppercase opacity-60">
          Design. Engenharia. Performance.
        </p>

        <a
          href="#manifesto"
          className="mt-12 border border-white/20 rounded-full px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700"
        >
          Saiba Mais
        </a>

      </section>

      {/* MANIFESTO */}
      <section
        id="manifesto"
        className="min-h-screen flex items-center justify-center px-8 text-center"
      >
        <div className="max-w-5xl">

          <p className="text-[11px] tracking-[0.4em] uppercase opacity-40 mb-8">
            Designed Without Compromise
          </p>

          <h2 className="title-font text-4xl md:text-7xl uppercase leading-tight">
            Experiências digitais
            <br />
            refinadas em cada detalhe.
          </h2>

        </div>
      </section>

      {/* SIGNATURE */}
      <section
        id="signature"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/images/signature-bg.png"
            alt="Avus Signature"
            fill
            className="object-cover blur-sm scale-105 opacity-40"
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

          <p className="text-[11px] tracking-[0.4em] uppercase opacity-40 mb-6">
            Avus Signature
          </p>

          <h2 className="signature-font text-6xl md:text-8xl lg:text-[10rem] leading-none">
            Signature
          </h2>

          <p className="mt-6 text-sm md:text-lg tracking-[0.08em] opacity-80">
            Precisão visual. Performance real.
          </p>

          <a
            href="#cases"
            className="mt-10 border border-white/30 rounded-full px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700"
          >
            Descubra o Signature
          </a>

        </div>
      </section>

      {/* CASES */}
      <section
        id="cases"
        className="min-h-screen px-8 md:px-14 py-32"
      >

        <div className="mb-16">

          <p className="text-[11px] tracking-[0.4em] uppercase text-[#3E6B61] mb-4">
            Portfólio
          </p>

          <h2 className="title-font text-4xl md:text-7xl uppercase">
            Cases Avus
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1*/}
          <a href="#" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-estetica.png" alt="Estetica" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Estética</h3>
            </div>
          </a>

          {/* CARD 2 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-fitness.png"
                alt="Fitness"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Fitness
              </h3>
            </div>

          </a>

          {/* CARD 3 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-larissa.png"
                alt="Larissa"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Larissa Artes
              </h3>
            </div>

          </a>

          {/* CARD 4 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-lhe.png"
                alt="LHE"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                LHE
              </h3>
            </div>

          </a>

          {/* CARD 5 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-motors.png"
                alt="Motors"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Motors
              </h3>
            </div>

          </a>

          {/* CARD 6 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-oceans.png"
                alt="Oceans"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Oceans
              </h3>
            </div>

          </a>

          {/* CARD 7 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-otica.png"
                alt="Ótica"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Ótica
              </h3>
            </div>

          </a>

          {/* CARD 8 */}
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
          >

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/case-telecom.png"
                alt="Telecom"
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                Avus
              </p>

              <h3 className="mt-3 text-2xl uppercase">
                Telecom
              </h3>
            </div>

          </a>

        </div>
      </section>

      {/* PLANOS */}
      <section
        id="plans"
        className="min-h-screen px-8 md:px-14 py-32"
      >

        <div className="mb-20">

          <p className="text-[11px] tracking-[0.4em] uppercase text-[#3E6B61] mb-4">
            Estrutura
          </p>

          <h2 className="title-font text-4xl md:text-7xl uppercase">
            Planos Avus
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* MONZA */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[500px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center h-full">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">Presença digital desenvolvida para acelerar negócios</p>
              <h3 className="signature-font mt-8 text-6xl md:text-8xl">Monza</h3>
              <p className="mt-10 text-sm md:text-base leading-relaxed opacity-80 max-w-sm">O Monza entrega velocidade, clareza e impacto visual em uma experiência desenvolvida para gerar confiança desde o primeiro acesso.</p>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Investimento</p>
                <p className="mt-3 text-3xl uppercase">R$ 150,00</p>
                <p className="text-xs opacity-50 mt-1">mensal</p>
              </div>

              <a href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20plano%20Monza" className="mt-8 border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700">Saiba Mais</a>

            </div>
          </div>

          {/* INTERLAGOS */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[540px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center h-full">

              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                Performance, estratégia e experiência em equilíbrio perfeito
              </p>

              <h3 className="signature-font mt-8 text-5xl md:text-7xl">
                Interlagos
              </h3>

              <p className="mt-10 text-sm md:text-base leading-relaxed opacity-80 max-w-sm">
                O Interlagos combina design refinado, estrutura estratégica e performance para transformar acessos em oportunidades reais de negócio.
              </p>

              <div className="mt-10 flex flex-col items-center">

                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                  Investimento
                </p>

                <p className="mt-3 text-3xl uppercase">
                  R$ 250,00
                </p>

                <p className="text-xs opacity-50 mt-1">
                  mensal
                </p>

              </div>

              <a
                href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20plano%20Interlagos"
                className="mt-8 border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700"
              >
                Saiba Mais
              </a>

            </div>
          </div>

          {/* SILVERSTONE */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[540px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center h-full">

              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                Autoridade, estrutura e posicionamento premium
              </p>

              <h3 className="signature-font mt-8 text-5xl md:text-7xl">
                Silverstone
              </h3>

              <p className="mt-10 text-sm md:text-base leading-relaxed opacity-80 max-w-sm">
                O Silverstone entrega uma experiência elevada para empresas que buscam impacto visual, autoridade e presença digital refinada.
              </p>

              <div className="mt-10 flex flex-col items-center">

                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                  Investimento
                </p>

                <p className="mt-3 text-3xl uppercase">
                  R$ 350,00
                </p>

                <p className="text-xs opacity-50 mt-1">
                  mensal
                </p>

              </div>

              <a
                href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20plano%20Silverstone"
                className="mt-auto border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700"
              >
                Saiba Mais
              </a>

            </div>
          </div>

          {/* NÜRBURGRING */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[540px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center h-full">

              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">
                Exclusividade, performance e presença sem concessões
              </p>

              <h3 className="signature-font mt-8 text-5xl md:text-7xl">
                Nurburgring
              </h3>

              <p className="mt-10 text-sm md:text-base leading-relaxed opacity-80 max-w-sm">
                A experiência definitiva da Avus. Desenvolvido para operações que exigem exclusividade e performance em cada detalhe.
              </p>

              <div className="mt-10 flex flex-col items-center">

                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">
                  Investimento
                </p>

                <p className="mt-3 text-3xl uppercase">
                  R$ 500,00
                </p>

                <p className="text-xs opacity-50 mt-1">
                  mensal
                </p>

              </div>

              <a
                href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20plano%20Nurburgring"
                className="mt-auto border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700"
              >
                Saiba Mais
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/5 py-20">

        <div className="relative z-10 flex flex-col items-center text-center">

          <p className="text-[11px] tracking-[0.4em] uppercase text-[#3E6B61]">
            Design. Engenharia. Performance.
          </p>

          <div className="flex gap-8 mt-10 text-sm uppercase tracking-[0.25em]">

            <a
              href="https://instagram.com/avusdigital_"
              target="_blank"
              className="hover:opacity-50 transition-all duration-500"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/55119577667799?text=Olá,%20tenho%20interesse%20no%20em%20criar%20um%20Site"
              target="_blank"
              className="hover:opacity-50 transition-all duration-500"
            >
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/adler-neves-aa991a181/"
              target="_blank"
              className="hover:opacity-50 transition-all duration-500"
            >
              LinkedIn
            </a>

          </div>
        </div>

        {/* HUGE BACKGROUND TEXT */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-auto">

          <h2
            className="
              title-font
              text-[7rem]
              md:text-[14rem]
              lg:text-[18rem]
              uppercase
              opacity-[0.04]
              transition-all
              duration-700
              hover:opacity-100
              hover:text-[#3E6B61]
            "
          >
            AVUS
          </h2>

        </div>

      </footer>

    </main>
  );
}