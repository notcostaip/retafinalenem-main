import { motion } from "framer-motion";
import { Clock, AlertTriangle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UrgencyOffer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-red-900/30 to-orange-900/20 border-2 border-red-500/40 rounded-2xl p-8 md:p-12 my-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse" />
      <div className="absolute top-4 right-4">
        <div className="w-20 h-20 bg-red-500/20 rounded-full animate-ping" />
      </div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Urgência Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <AlertTriangle className="w-8 h-8 text-red-400 animate-bounce" />
          <span className="text-red-400 font-black text-2xl md:text-3xl tracking-wide">
            ATENÇÃO! SÓ ATÉ HOJE
          </span>
          <AlertTriangle className="w-8 h-8 text-red-400 animate-bounce" />
        </motion.div>

        {/* Desconto Gigante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl text-gray-400 line-through font-bold">
              R$ 197,00
            </span>
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          
          <div className="text-center">
            <span className="text-7xl md:text-8xl font-black text-gradient bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              R$ 27
            </span>
            <span className="text-3xl text-gray-300 font-bold">,00</span>
          </div>
          
          <div className="mt-4">
            <span className="inline-block bg-red-500 text-white font-black text-2xl md:text-3xl px-6 py-2 rounded-full animate-pulse">
              86% OFF
            </span>
          </div>
        </motion.div>

        {/* Copy Persuasiva */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            🔥 <span className="text-red-400">ÚLTIMA CHANCE</span> de garantir o método que já aprovou{" "}
            <span className="text-yellow-400">+15.000 estudantes</span>
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            <span className="text-red-400 font-bold">HOJE:</span> Pague menos que um lanche e tenha acesso ao que outros cursos cobram R$ 500+
          </p>
        </motion.div>

        {/* Contador */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8 p-4 bg-black/30 rounded-full border border-orange-500/30"
        >
          <Clock className="w-6 h-6 text-orange-400 animate-spin" />
          <span className="text-orange-400 font-bold text-lg">
            ⏰ Promoção encerra às 23:59h → NÃO PERCA!
          </span>
        </motion.div>

        {/* CTA Gigante */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-700 hover:via-green-600 hover:to-emerald-600 text-white font-black text-xl md:text-2xl px-16 py-6 shadow-2xl shadow-green-500/30 animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
          >
            🚀 GARANTIR POR R$ 27 AGORA!
          </Button>
        </motion.div>

        {/* Garantias */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-sm text-gray-400"
        >
          <p>
            ✅ <span className="text-green-400">Acesso Imediato</span> • 
            ✅ <span className="text-blue-400">Garantia 7 dias</span> • 
            ✅ <span className="text-purple-400">Suporte Incluído</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};