import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <Navigation />

      {/* Seção Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        {/* Fundo */}
        <div
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            FALTAM POUCOS DIAS PARA O ENEM 2025
          </span>
        </motion.div>

        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Você está preparado para" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="gabaritar o ENEM?" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            Descubra o método mais rápido e direto para revisar tudo que realmente cai no ENEM — sem perder tempo, sem enrolação.{" "}
            <span className="text-white">Comece sua preparação estratégica agora!</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button
              size="lg"
              className="button-gradient"
              onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
            >
              QUERO O PACOTE AGORA
            </Button>
            <Button
              size="lg"
              variant="link"
              className="text-white"
              onClick={() => {
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver conteúdo completo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/uploads/48b1fe5a-e586-4297-b41b-1f7d1b725793.png"
              alt="Dashboard de Preparação ENEM - Amanda"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Carrossel de Logos */}
      <LogoCarousel />

      {/* Seção de Funcionalidades */}
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div>

      {/* Seção de Preços */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Seção de Depoimentos */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* Seção de Chamada para Ação */}
      <section className="container px-4 py-20 relative bg-black">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não deixe a ansiedade dominar sua prova
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre no ENEM sabendo que está preparado. Milhares de estudantes já garantiram sua vaga com nossa metodologia.
          </p>
          <Button
            size="lg"
            className="button-gradient"
            onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
          >
            GARANTIR MINHA VAGA
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Rodapé */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
