import { motion } from "framer-motion";
import { Check, Clock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "./CardSpotlight";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
  bonus,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  bonus?: string;
}) => (
  <CardSpotlight className={`h-full ${isPopular ? "border-primary" : "border-white/10"} border-2`}>
    <div className="relative h-full p-6 flex flex-col">
      {isPopular && (
        <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
          OFERTA ESPECIAL
        </span>
      )}
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        {price.includes("R$") && <span className="text-gray-400"> único</span>}
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      {bonus && (
        <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Bônus Exclusivo:</span>
          </div>
          <p className="text-sm text-gray-300">{bonus}</p>
        </div>
      )}
      <Button 
        className="button-gradient w-full"
        onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
      >
        GARANTIR ACESSO AGORA
      </Button>
    </div>
  </CardSpotlight>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Oferta Especial{" "}
          <span className="text-gradient font-medium">ENEM 2025</span>
        </motion.h2>
        
        {/* Mensagem de Desconto Urgente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-6 mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-bold text-lg">SÓ ATÉ HOJE!</span>
            <Clock className="w-5 h-5 text-red-400 animate-pulse" />
          </div>
          
          <div className="mb-2">
            <span className="text-2xl text-gray-400 line-through">De R$ 197,00</span>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg px-4 py-2 inline-block mb-3">
            <span className="text-yellow-400 font-bold text-lg">86% DE DESCONTO</span>
          </div>
          
          <p className="text-gray-300 text-sm">
            <span className="text-red-400 font-medium">ÚLTIMA CHANCE!</span> Essa oferta expira em poucas horas. 
            Não perca a oportunidade de garantir sua aprovação por menos que o preço de um lanche.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Acesso imediato ao método que já aprovou milhares de estudantes
        </motion.p>
      </div>

      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <PricingTier
          name="Pacote Reta Final ENEM"
          price="R$ 27,00"
          description="Tudo que você precisa para revisar com estratégia e gabaritar a prova"
          features={[
            "📘 Resumos das matérias mais cobradas",
            "📝 Modelos de redação nota 1000",
            "📊 Banco de questões selecionadas",
            "📅 Cronograma automático de estudos",
            "🎧 Áudios e mapas mentais",
            "⚡ Acesso imediato e vitalício",
            "🔒 Garantia de 7 dias"
          ]}
          bonus="Checklist dos '7 dias antes da prova' — o que revisar, como se alimentar e controlar a ansiedade na véspera."
          isPopular
        />
      </div>

      {/* Urgência */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mt-12 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg font-medium text-red-400">IMPORTANTE!</span>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Cada dia que passa sem revisar direito é um ponto a menos na sua nota. A janela para virar o jogo está se fechando — e você não terá outra chance até o próximo ENEM.
        </p>
      </motion.div>
    </section>
  );
};