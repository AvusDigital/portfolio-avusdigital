export default function Home() {
  return (
    <main>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20"
      >
        {/* CONTEÚDO */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">

            <h2 className="title-font text-5xl md:text-6xl lg:text-7xl leading-none text-white">
              AVUS DIGITAL
            </h2>

            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/50">
              Design • Branding • Performance
            </p>

            <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed mx-auto md:mx-0">
              Criamos marcas, experiências e presença digital para empresas
              que querem transmitir mais valor, gerar mais confiança e crescer online.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">

              <a
                href="https://wa.me/5511957767799?text=Olá! Quero iniciar um projeto com a Avus."
                target="_blank"
                className="px-8 py-4 border border-white text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Iniciar Projeto
              </a>

              <a
                href="#signature"
                className="px-8 py-4 border border-white/20 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Explorar Trabalhos
              </a>

            </div>

            {/* RATING */}
            <div className="mt-12 flex items-center justify-center md:justify-start gap-3 text-sm uppercase tracking-[0.15em] text-white/60">
              <span>★★★★★</span>
              <span>5.0 no Google</span>
              <span>•</span>
              <span>25 avaliações</span>
            </div>

          </div>
        </div>
      </section>

      <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2">

        {/* SIGNATURE */}
        <div
          id="signature"
          className="relative flex items-center justify-center overflow-hidden min-h-[60vh] md:min-h-screen"
        >
          <img
            src="/signature-bg.jpg"
            alt="Avus Signature"
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-30"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-md text-center px-6">

            <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
              Avus Signature
            </p>

            <h2 className="signature-font text-5xl md:text-6xl lg:text-7xl mt-4 text-white">
              Signature
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              Precisão visual.<br />
              Performance real.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/5511957767799?text=Quero+entender+o+Signature"
                target="_blank"
                className="px-6 py-3 border border-white text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Conhecer
              </a>

            </div>

          </div>
        </div>

        {/* FOCUS */}
        <div
          id="focus"
          className="flex items-center justify-center min-h-[60vh] md:min-h-screen px-6 md:px-12 lg:px-16"
        >
          <div className="relative max-w-md text-center">

            <img
              src="/signature-bg.jpg"
              alt="Avus Signature"
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-30"
            />

            <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
              Focus
            </p>

            <h2 className="signature-font text-5xl md:text-6xl lg:text-7xl mt-4 text-white">
              Focus
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed">
              Precisão em cada detalhe.<br />
              Estratégia visual e performance digital para marcas que querem crescer.
            </p>



            {/* STATS (mesmo “peso visual” do Signature CTA) */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <div className="px-6 py-3 border border-white/10 text-sm uppercase tracking-[0.15em] text-white/70">
                +10 Projetos
              </div>

              <div className="px-6 py-3 border border-white/10 text-sm uppercase tracking-[0.15em] text-white/70">
                100% Design
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href="https://wa.me/5511957767799?text=Quero+entender+o+Focus"
                  target="_blank"
                  className="px-6 py-3 border border-white text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  Conhecer
                </a>

              </div>

            </div>

          </div>
        </div>

      </section>

      <section id="cases" className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-16">

          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Cases Reais
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6">
            Projetos que viraram presença digital.
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CASE 1 */}
          <a href="https://www.lhlescritorio.com.br/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/lhl-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/lhl-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500"> LHL Escritório </p>
            </div>
          </a>

          {/* CASE 2 */}
          <a href="https://b1motors.com.br/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl">

            {/* DESKTOP */}
            <img src="/images/b1-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/b1-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">B1 Motors</p>
            </div>
          </a>

          {/* CASE 3 */}
          <a href="https://agencia-oceans.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/oceans-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/oceans-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Agência Oceans
              </p>
            </div>
          </a>

          {/* CASE 4 */}
          <a href="https://vg-solucoesfinanceiras.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/vg-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/vg-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                VG Soluções Financeiras
              </p>
            </div>
          </a>

          {/* CASE 5 */}
          <a href="https://gpfilms.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/gpfilms-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/gpfilms-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                GP Film's
              </p>
            </div>
          </a>

        </div>

      </section>

      <section id="lab" className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-16">

          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Avus Lab
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6">
            Experimentos que viram produto.
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LAB 1 */}
          <a href="https://avuscafe.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/cafe-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/cafe-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Avus Café
              </p>
            </div>
          </a>

          {/* LAB 2 */}
          <a href="https://avusbeauty.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/beauty-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/beauty-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Avus Beauty
              </p>
            </div>
          </a>

          {/* LAB 3 */}
          <a href="https://avusrealty.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/realty-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/realty-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Avus Realty
              </p>
            </div>
          </a>

          {/* LAB 4 */}
          <a href="https://avusink.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/ink-desk.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/ink-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Avus Ink
              </p>
            </div>
          </a>

          {/* LAB 5 */}
          <a href="https://avuslaw.vercel.app/" target="_blank" className="group relative overflow-hidden h-72 border border-white/10 rounded-xl" >

            {/* DESKTOP */}
            <img src="/images/law-desktop.png" className="hidden md:block absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* MOBILE */}
            <img src="/images/law-mobile.png" className="block md:hidden absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-white/10 transition duration-500" />

            {/* TEXT */}
            <div className="absolute inset-0 flex items-end p-6">
              <p className="text-white text-lg uppercase tracking-[0.2em] translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                Avus Law
              </p>
            </div>
          </a>

        </div>

      </section>

      <section id="design" className="relative min-h-screen px-6 md:px-12 lg:px-20 py-24">

        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-16">

          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Design Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6">
            Visual explorations & identity work.
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ITEM 1 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design1.png"
              alt="Design 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 2 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design2.png"
              alt="Design 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 3 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design3.png"
              alt="Design 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 4 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design4.JPG"
              alt="Design 4"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 5 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design5.jpg"
              alt="Design 5"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 6 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design6.png"
              alt="Design 6"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 7 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design7.jpg"
              alt="Design 7"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 8 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design8.jpg"
              alt="Design 8"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ITEM 9 */}
          <div className="relative overflow-hidden h-96 border border-white/10">
            <img
              src="/design/design9.png"
              alt="Design 9"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </section>

      <section
        id="build"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >

        <div className="max-w-5xl text-center">

          {/* LABEL */}
          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            O que construímos
          </p>

          {/* TÍTULO */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight">
            Mais do que sites. Criamos presença digital.
          </h2>

          {/* SUB */}
          <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-relaxed">
            A Avus Digital desenvolve experiências completas de marca,
            unindo design, estratégia e tecnologia para transformar ideias em produtos digitais reais.
          </p>

          {/* GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ITEM 1 */}
            <div className="border border-white/10 p-6 hover:border-white transition duration-300">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Design de Interfaces
              </p>
              <p className="mt-4 text-white/70">
                Interfaces modernas, focadas em experiência, clareza e conversão.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="border border-white/10 p-6 hover:border-white transition duration-300">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Branding & Identidade
              </p>
              <p className="mt-4 text-white/70">
                Construção de marcas com presença forte e posicionamento claro.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="border border-white/10 p-6 hover:border-white transition duration-300">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Desenvolvimento Web
              </p>
              <p className="mt-4 text-white/70">
                Sites rápidos, responsivos e otimizados para performance real.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section
        id="process"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >

        <div className="max-w-5xl text-center">

          {/* LABEL */}
          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Processo
          </p>

          {/* TÍTULO */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight">
            Simples. Direto. Eficiente.
          </h2>

          {/* SUB */}
          <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Um processo claro para transformar ideias em projetos reais, sem complicação e sem perda de tempo.
          </p>

          {/* STEPS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* STEP 1 */}
            <div className="border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                01. Entendimento
              </p>
              <p className="mt-4 text-white/70">
                Alinhamos objetivo, referência e direção do projeto.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                02. Construção
              </p>
              <p className="mt-4 text-white/70">
                Design e desenvolvimento com foco em identidade e performance.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                03. Entrega
              </p>
              <p className="mt-4 text-white/70">
                Ajustes finais e publicação do projeto pronto para uso.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section
        id="testimonials"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >

        <div className="max-w-5xl text-center">

          {/* LABEL */}
          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Depoimentos
          </p>

          {/* TÍTULO */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight">
            O que dizem sobre o trabalho.
          </h2>

          {/* SUB */}
          <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Depoimentos selecionados de clientes que confiaram na Avus Digital para construir sua presença online.
          </p>

          {/* GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* TESTE 1 */}
            <div className="border border-white/10 p-6 text-left">
              <p className="text-white/70 leading-relaxed">
                “O resultado superou todas as expectativas. O site ficou extremamente profissional e elevou a imagem do meu negócio.”
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">
                Cliente 01
              </p>
            </div>

            {/* TESTE 2 */}
            <div className="border border-white/10 p-6 text-left">
              <p className="text-white/70 leading-relaxed">
                “Design limpo, moderno e muito bem pensado. O processo foi rápido e muito claro do início ao fim.”
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">
                Cliente 02
              </p>
            </div>

            {/* TESTE 3 */}
            <div className="border border-white/10 p-6 text-left">
              <p className="text-white/70 leading-relaxed">
                “Agora minha marca finalmente transmite o valor que ela realmente tem. Ficou absurdo.”
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/50">
                Cliente 03
              </p>
            </div>

          </div>

        </div>

      </section>

      <section
        id="cta"
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-24"
      >

        <div className="max-w-4xl text-center">

          {/* LABEL */}
          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Vamos construir algo?
          </p>

          {/* TÍTULO */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mt-6 leading-tight">
            Sua marca pode ser muito mais do que ela é hoje.
          </h2>

          {/* SUB */}
          <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Se você chegou até aqui, provavelmente já percebeu o nível de detalhe e cuidado em cada projeto.
            Agora é hora de transformar a sua ideia em algo real.
          </p>

          {/* BOTÃO PRINCIPAL */}
          <div className="mt-12 flex justify-center">

            <a
              href="https://wa.me/5511957767799?text=Olá! Vi seu portfólio e quero entender como podemos trabalhar juntos."
              target="_blank"
              className="px-10 py-5 border border-white text-sm uppercase tracking-[0.2em] transition duration-300 hover:bg-white hover:text-black hover:border-white"
            >
              Quero meu projeto
            </a>

          </div>

          {/* MICRO FRASE */}
          <p className="mt-8 text-white/40 text-sm uppercase tracking-[0.2em]">
            Resposta rápida • Projetos selecionados • Vagas limitadas
          </p>

        </div>

      </section>

      <footer className="relative px-6 md:px-12 lg:px-20 py-12 border-t border-white/10">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LOGO / MARCA */}
          <p className="title-font text-sm tracking-[0.35em] text-white/50 uppercase">
            Avus Digital
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/50">

            <a href="#hero" className="hover:text-white transition">
              Início
            </a>

            <a href="#cases" className="hover:text-white transition">
              Cases
            </a>

            <a href="#lab" className="hover:text-white transition">
              Lab
            </a>

            <a href="#cta" className="hover:text-white transition">
              Contato
            </a>

          </div>

          {/* MICRO TEXTO */}
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 text-center md:text-right">
            Design • Branding • Web
          </p>

        </div>

      </footer>
    </main>
  )
}