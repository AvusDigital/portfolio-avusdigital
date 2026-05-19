"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Shield,
  Search,
  Smartphone,
  MessageCircle,
  Wrench,
  HardDrive,
  Bot,
  Zap,
  Video,
  BarChart3,
  Briefcase,
  Server,
  Gauge,
  MapPinned,
  BadgePlus,
  Palette,
  LayoutDashboard,
  Rocket,
  FileText,
  MessageSquareMore,
  Link,
  Activity,
  Crown,
  MonitorSmartphone,
  Workflow,
  Settings,
  ShieldCheck,
  Infinity,

} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0D0D0E] text-[#F5F5F5] min-h-screen overflow-hidden">

      {/* MENU LATERAL */}
      <div className={`fixed top-0 left-0 h-screen w-full md:w-[40%] bg-[#0D0D0E] z-[100] transition-all duration-700 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center px-8 md:px-14 py-8 border-b border-white/10">
          <h2 className="tracking-[0.3em] uppercase text-sm opacity-60">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-3xl hover:opacity-50 transition-all duration-500">×</button>
        </div>

        <div className="flex flex-col mt-28 px-8 md:px-14 gap-6 text-2xl md:text-3xl uppercase">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-all duration-500">Início</a>
          <a href="#manifesto" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-all duration-500">Sobre</a>
          <a href="#signature" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-all duration-500">Signature</a>
          <a href="#cases" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-all duration-500">Cases</a>
          <a href="#plans" onClick={() => setMenuOpen(false)} className="hover:opacity-50 transition-all duration-500">Planos</a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-14 py-5 flex items-center justify-between bg-black/20 backdrop-blur-md border-b border-white/5">

        {/* MENU BUTTON */}
        <button onClick={() => setMenuOpen(true)} className="text-[11px] tracking-[0.35em] uppercase flex items-center gap-3 hover:opacity-70 transition-all duration-500">
          <span className="text-lg">☰</span>Menu</button>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src="/images/logo.png" alt="Avus Logo" width={59} height={59} className="object-contain opacity-90" />
        </div>

        {/* CONTATO */}
        <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20em%20criar%20um%20Site"
          target="_blank" className="border border-white/20 rounded-full px-6 py-2 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700">Contato</a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="title-font text-5xl md:text-7xl lg:text-[9rem] uppercase leading-none">AVUS DIGITAL</h1>
        <p className="mt-8 text-[11px] md:text-sm tracking-[0.35em] uppercase opacity-60">Design. Engenharia. Performance.</p>
        <a href="#manifesto" className="mt-12 border border-white/20 rounded-full px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700">Saiba Mais</a>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="min-h-screen flex items-center justify-center px-8 text-center">
        <div className="max-w-5xl">
          <p className="text-[11px] tracking-[0.4em] uppercase opacity-40 mb-8">Designed Without Compromise</p>
          <h2 className="title-font text-4xl md:text-7xl uppercase leading-tight">Experiências digitais<br /> refinadas em cada detalhe.</h2>
        </div>
      </section>

      {/* SIGNATURE */}
      <section id="signature" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image src="/images/signature-bg.png" alt="Avus Signature" fill className="object-cover blur-sm scale-105 opacity-40" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <p className="text-[11px] tracking-[0.4em] uppercase opacity-40 mb-6">Avus Signature</p>
          <h2 className="signature-font text-6xl md:text-8xl lg:text-[10rem] leading-none">Signature</h2>
          <p className="mt-6 text-sm md:text-lg tracking-[0.08em] opacity-80">Precisão visual. Performance real.</p>
          <a href="#cases" className="mt-10 border border-white/30 rounded-full px-8 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700">Descubra o Signature</a>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="min-h-screen px-8 md:px-14 py-32">

        <div className="mb-16">
          <p className="text-[20px] tracking-[0.4em] uppercase text-[#3E6B61] mb-4">Portfólio</p>
          <h2 className="title-font text-4xl md:text-7xl uppercase">Cases Avus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1*/}
          <a href="https://garage-avus.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-estetica.png" alt="Estetica" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Estética</h3>
            </div>
          </a>

          {/* CARD 2 */}
          <a href="https://avus-moda-fitness.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-fitness.png" alt="Fitness" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Fitness</h3>
            </div>
          </a>

          {/* CARD 3 */}
          <a href="https://larissartes-3d.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-larissa.png" alt="Larissa" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Larissa Artes</h3>
            </div>
          </a>

          {/* CARD 4 */}
          <a href="https://www.lhlescritorio.com.br/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-lhe.png" alt="LHL" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">LHL Escritório</h3>
            </div>
          </a>

          {/* CARD 5 */}
          <a href="https://avus-motors.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-motors.png" alt="Motors" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Motors</h3>
            </div>
          </a>

          {/* CARD 6 */}
          <a href="https://agencia-oceans.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-oceans.png" alt="Oceans" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Oceans</h3>
            </div>
          </a>

          {/* CARD 7 */}
          <a href="https://oticas-avus.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-otica.png" alt="Ótica" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Ótica</h3>
            </div>
          </a>

          {/* CARD 8 */}
          <a href="https://avus-telecomunicacoes.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-telecom.png" alt="Telecom" fill className="object-cover transition-all duration-700 group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">Telecom</h3>
            </div>
          </a>

          {/* CARD 9 */}
          <a href="https://vg-solucoes-financeiras.vercel.app/" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-vg.png" alt="Soluções Financeiras" fill className="object-cover transition-all duration-700 {/ group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">VG Soluções Financeiras</h3>
            </div>
          </a>

          {/* CARD 10 */}
          <a href="www.b1motors.com.br" target="_blank" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src="/images/case-b1.png" alt="B1 Motors" fill className="object-cover transition-all duration-700 {/ group-hover:scale-105" />
            </div>

            <div className="p-6">
              <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Avus</p>
              <h3 className="mt-3 text-2xl uppercase">B1 Motors</h3>
            </div>
          </a>
        </div>
      </section>

      {/* PLANOS */}
      <section id="plans" className="min-h-screen px-8 md:px-14 py-32">

        <div className="mb-20">
          <p className="text-[20px] tracking-[0.4em] uppercase text-[#3E6B61] mb-4">Estrutura</p>
          <h2 className="title-font text-4xl md:text-7xl uppercase">Planos Avus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* MONZA */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[500px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center h-full">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">Presença digital desenvolvida para acelerar negócios</p>
              <h3 className="signature-font mt-8 text-6xl md:text-8xl">Monza</h3>

              <ul className="mt-10 w-full max-w-sm space-y-3 text-left text-sm md:text-base opacity-80">

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Globe size={18} className="text-green-400 shrink-0" />
                  <span>Hospedagem e manutenção básica</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Wrench size={18} className="text-green-400 shrink-0" />
                  <span>Atualizações simples no site</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MessageCircle size={18} className="text-green-400 shrink-0" />
                  <span>Suporte via WhatsApp</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Smartphone size={18} className="text-green-400 shrink-0" />
                  <span>Site responsivo</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Search size={18} className="text-green-400 shrink-0" />
                  <span>SEO básico</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MessageCircle size={18} className="text-green-400 shrink-0" />
                  <span>Integração com WhatsApp</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Shield size={18} className="text-green-400 shrink-0" />
                  <span>Certificado SSL</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <HardDrive size={18} className="text-green-400 shrink-0" />
                  <span>Backup mensal</span>
                </li>

                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Globe size={18} className="text-green-400 shrink-0" />
                  <span>1 domínio grátis por 1 ano</span>
                </li>

                <li className="flex items-center gap-3 pb-1">
                  <Wrench size={18} className="text-green-400 shrink-0" />
                  <span>Correções técnicas básicas</span>
                </li>

              </ul>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Investimento</p>
                <p className="mt-3 text-3xl uppercase">R$ 150,00</p>
                <p className="text-xs opacity-50 mt-1">mensal</p>
              </div>

              <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20no%20plano%20Monza" className="mt-8 border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-[#F3F3F3] hover:text-[#0D3A2F] transition-all duration-700">Saiba Mais</a>
            </div>
          </div>

          {/* INTERLAGOS */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[500px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />
            <div className="relative z-10 flex flex-col items-center h-full">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">Performance, estratégia e experiência em equilíbrio perfeito</p>
              <h3 className="signature-font mt-8 text-5xl md:text-7xl">Interlagos</h3>
              <ul className="mt-10 w-full max-w-sm space-y-3 text-left text-sm md:text-base opacity-80">
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Zap size={18} className="text-green-400 shrink-0" />
                  <span>Atualizações prioritárias</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Search size={18} className="text-green-400 shrink-0" />
                  <span>SEO intermediário</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Gauge size={18} className="text-green-400 shrink-0" />
                  <span>Otimização de performance</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MapPinned size={18} className="text-green-400 shrink-0" />
                  <span>Cadastro no Google Business</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <BadgePlus size={18} className="text-green-400 shrink-0" />
                  <span>4 posts mensais para redes sociais</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Video size={18} className="text-green-400 shrink-0" />
                  <span>1 vídeo/reel curto mensal</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <BarChart3 size={18} className="text-green-400 shrink-0" />
                  <span>Relatório básico de acessos</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Smartphone size={18} className="text-green-400 shrink-0" />
                  <span>Integração com Instagram</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Palette size={18} className="text-green-400 shrink-0" />
                  <span>Alterações visuais mensais</span>
                </li>
                <li className="flex items-center gap-3 pb-1">
                  <MessageCircle size={18} className="text-green-400 shrink-0" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Investimento</p>
                <p className="mt-3 text-3xl uppercase">R$ 250,00</p>
                <p className="text-xs opacity-50 mt-1">mensal</p>
              </div>

              <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20no%20plano%20Interlagos" className="mt-8 border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700">Saiba Mais</a>
            </div>
          </div>

          {/* SILVERSTONE */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[500px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center h-full">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">Autoridade, estrutura e posicionamento premium</p>
              <h3 className="signature-font mt-8 text-5xl md:text-7xl">Silverstone</h3>
              <ul className="mt-10 w-full max-w-sm space-y-3 text-left text-sm md:text-base opacity-80">
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <LayoutDashboard size={18} className="text-green-400 shrink-0" />
                  <span>Dashboard com métricas</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Search size={18} className="text-green-400 shrink-0" />
                  <span>SEO avançado</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Rocket size={18} className="text-green-400 shrink-0" />
                  <span>Estratégia de conversão</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <FileText size={18} className="text-green-400 shrink-0" />
                  <span>Landing pages promocionais</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MessageSquareMore size={18} className="text-green-400 shrink-0" />
                  <span>8 posts mensais</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Video size={18} className="text-green-400 shrink-0" />
                  <span>2 vídeos/reels mensais</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Bot size={18} className="text-green-400 shrink-0" />
                  <span>Automação básica de atendimento</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Link size={18} className="text-green-400 shrink-0" />
                  <span>Integração com formulários/leads</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Wrench size={18} className="text-green-400 shrink-0" />
                  <span>Melhorias contínuas no site</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Briefcase size={18} className="text-green-400 shrink-0" />
                  <span>Consultoria mensal</span>
                </li>
                <li className="flex items-center gap-3 pb-1">
                  <Activity size={18} className="text-green-400 shrink-0" />
                  <span>Monitoramento de uptime</span>
                </li>
              </ul>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Investimento</p>
                <p className="mt-3 text-3xl uppercase">R$ 350,00</p>
                <p className="text-xs opacity-50 mt-1">mensal</p>
              </div>

              <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20no%20plano%20Silverstone" className="mt-auto border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700">Saiba Mais</a>
            </div>
          </div>

          {/* NÜRBURGRING */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0D3A2F] p-10 md:p-14 min-h-[500px] flex flex-col items-center text-center border border-white/5">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center h-full">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-50">Exclusividade, performance e presença sem concessões</p>
              <h3 className="signature-font mt-8 text-5xl md:text-7xl">Nurburgring</h3>
              <ul className="mt-10 w-full max-w-sm space-y-3 text-left text-sm md:text-base opacity-80">
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Crown size={18} className="text-yellow-400 shrink-0" />
                  <span>Atendimento prioritário VIP</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Wrench size={18} className="text-yellow-400 shrink-0" />
                  <span>Desenvolvimento contínuo</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <MonitorSmartphone size={18} className="text-yellow-400 shrink-0" />
                  <span>Sistema personalizado simples</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Workflow size={18} className="text-yellow-400 shrink-0" />
                  <span>Automação avançada</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <LayoutDashboard size={18} className="text-yellow-400 shrink-0" />
                  <span>Dashboard premium</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Rocket size={18} className="text-yellow-400 shrink-0" />
                  <span>Estratégia digital personalizada</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <BarChart3 size={18} className="text-yellow-400 shrink-0" />
                  <span>Criação de campanhas sazonais</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Search size={18} className="text-yellow-400 shrink-0" />
                  <span>Otimização avançada de SEO</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Settings size={18} className="text-yellow-400 shrink-0" />
                  <span>Gestão técnica completa</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <HardDrive size={18} className="text-yellow-400 shrink-0" />
                  <span>Backup diário</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Briefcase size={18} className="text-yellow-400 shrink-0" />
                  <span>Consultoria estratégica</span>
                </li>
                <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <Infinity size={18} className="text-yellow-400 shrink-0" />
                  <span>Ajustes ilimitados*</span>
                </li>
                <li className="flex items-center gap-3 pb-1">
                  <ShieldCheck size={18} className="text-yellow-400 shrink-0" />
                  <span>Integrações avançadas</span>
                </li>
              </ul>

              <div className="mt-10 flex flex-col items-center">
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40">Investimento</p>
                <p className="mt-3 text-3xl uppercase">R$ 500,00</p>
                <p className="text-xs opacity-50 mt-1">mensal</p>
              </div>

              <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20no%20plano%20Nurburgring" className="mt-auto border border-white/20 rounded-full px-6 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-700">Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/5 py-20">

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#3E6B61]">Design. Engenharia. Performance.</p>

          <div className="flex gap-8 mt-10 text-sm uppercase tracking-[0.25em]">
            <a href="https://instagram.com/avusdigital_" target="_blank" className="hover:opacity-50 transition-all duration-500">Instagram</a>
            <a href="https://wa.me/5511957767799?text=Olá,%20tenho%20interesse%20no%20em%20criar%20um%20Site" target="_blank" className="hover:opacity-50 transition-all duration-500">WhatsApp</a>
            <a href="https://www.linkedin.com/in/adler-neves-aa991a181/" target="_blank" className="hover:opacity-50 transition-all duration-500">LinkedIn</a>
          </div>
        </div>

        {/* HUGE BACKGROUND TEXT */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-auto">
          <h2 className="title-font text-[7rem] md:text-[14rem] lg:text-[18rem] uppercase opacity-[0.04] transition-all duration-700 hover:opacity-100 hover:text-[#3E6B61]">AVUS</h2>
        </div>
      </footer>
    </main>
  );
}