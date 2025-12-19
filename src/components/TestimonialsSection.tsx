"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Ana Clara Silva",
    role: "Aprovada em Medicina - UFMG",
    image: "/uploads/b06fde34-b05c-4860-a6c9-4fd3a62ed818.png",
    content: "O Pacote Reta Final foi decisivo! Os resumos diretos ao ponto me pouparam horas de estudo desnecessário. Consegui focar no que realmente cai e tirei 810 no ENEM."
  },
  {
    name: "Carlos Henrique",
    role: "Aprovado em Engenharia - USP",
    image: "/uploads/96d6a574-e450-419b-ba88-82daa8308d26.png",
    content: "O cronograma automático organizou minha bagunça de estudos. Em 3 semanas consegui revisar tudo de forma estratégica. Resultado: 780 pontos e vaga garantida!"
  },
  {
    name: "Mariana Costa",
    role: "Aprovada em Direito - UFRJ",
    image: "/uploads/f3bf1a2c-a7f1-4b1d-8a07-95e78cf2aef6.png",
    content: "Os modelos de redação nota 1000 mudaram meu jogo completamente. Segui a estrutura e tirei 960 na redação! Valeu cada centavo dos R$ 27."
  },
  {
    name: "João Pedro",
    role: "Aprovado em Psicologia - UFSC",
    image: "/uploads/e3c73059-3c3d-4b76-8fdd-c93e9dd33e79.png",
    content: "Estava desesperado faltando 2 semanas para a prova. O material me deu segurança e foco. Entrei confiante e conquistei minha vaga dos sonhos!"
  },
  {
    name: "Letícia Martins",
    role: "Aprovada em Veterinária - UFRGS",
    image: "/uploads/5931c40a-bb8c-4f7e-8cfd-2284c2db631b.png",
    content: "O banco de questões foi perfeito para treinar. Só questões importantes, sem perder tempo. Me senti preparada para qualquer coisa que aparecesse na prova."
  },
  {
    name: "Rafael Santos",
    role: "Aprovado em Administração - FGV",
    image: "/uploads/63d8094d-cc8a-4faa-a1f6-7b86f665b778.png",
    content: "O checklist dos 7 dias antes da prova me ajudou até com a ansiedade. Entrei tranquilo, sabendo que havia feito tudo certo. Resultado: aprovação garantida!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Aprovados no ENEM</h2>
          <p className="text-muted-foreground text-lg">
            Veja o que dizem os estudantes que conquistaram suas vagas
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
