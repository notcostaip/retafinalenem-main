import { motion } from "framer-motion";
import { Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpecialOffer = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30">
      <div className="container px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Urgência Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            <span className="text-red-400 font-bold text-lg">ÚLTIMAS HORAS!</span>
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
          </div>

          {/* Preço Original Cortado */}
          <div className="mb-4">
            <span className="text-3xl text-gray-400 line-through">De R$ 197,00</span>
          </div>

          {/* Preço Promocional */}
          <div className="mb-6">
            <span className="text-6xl md:text-7xl font-bold text-white">R$ 27</span>
            <span className="text-2xl text-gray-300">,00</span>
          </div>

          {/* Copy Principal */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            <span className="text-red-400">86% DE DESCONTO</span> no Método que já aprovou{" "}
            <span className="text-yellow-400">+15.000 estudantes</span>
          </h2>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            O que outros cursos cobram R$ 500+ você tem hoje por menos que um lanche. 
            <strong className="text-white"> Mas só até 23:59h!</strong>
          </p>

          {/* Contador de Urgência */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">
              Promoção encerra em poucas horas → Não perca!
            </span>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold text-lg px-12 py-4 shadow-xl animate-pulse"
            onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
          >
            🔥 GARANTIR POR R$ 27 AGORA
          </Button>

          {/* Garantia */}
          <p className="text-sm text-gray-400 mt-4">
            ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte incluído
          </p>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 pointer-events-none" />
    </section>
  );
};