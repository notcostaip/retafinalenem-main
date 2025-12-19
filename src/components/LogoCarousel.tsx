import { motion } from "framer-motion";

const LogoCarousel = () => {
  const stats = [
    { number: "15.847", text: "Estudantes aprovados" },
    { number: "847", text: "Notas acima de 800" },
    { number: "234", text: "Redações nota 1000" },
    { number: "95%", text: "Taxa de aprovação" },
    { number: "3 semanas", text: "Tempo médio de preparação" },
  ];

  const extendedStats = [...stats, ...stats, ...stats];

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm py-12 mt-20">
      <motion.div 
        className="flex space-x-16"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-50%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem"
        }}
      >
        {extendedStats.map((stat, index) => (
          <motion.div
            key={`stat-${index}`}
            className="text-center min-w-[200px]"
            initial={{ opacity: 0.7 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
            <div className="text-sm text-gray-400">{stat.text}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;