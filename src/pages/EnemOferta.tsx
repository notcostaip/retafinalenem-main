import { motion } from "framer-motion";
import { CheckCircle, Clock, Download, Target, Brain, FileText, Headphones, Calendar, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const EnemOferta = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      {/* Seção Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Distintivo de Urgência */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20"
          >
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">
              FALTAM POUCOS DIAS PARA O ENEM…
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            A pergunta é: você vai entrar nessa prova <span className="text-gradient">preparado</span> ou vai ser mais um a se arrepender quando já for{" "}
            <span className="text-red-400">tarde demais?</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Você ainda tem tempo para mudar seu resultado — mas só se focar naquilo que{" "}
            <span className="text-white font-medium">REALMENTE cai na prova.</span> Esqueça horas perdidas em apostilas infinitas e vídeos que só enrolam: o que vai decidir sua aprovação é revisar com estratégia.
          </motion.p>
        </div>
      </motion.section>

      {/* Seção do Problema */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">❌ O PROBLEMA</h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            {[
              "O tempo está acabando e a pressão só aumenta.",
              "Você tenta estudar, mas se perde em conteúdos gigantescos que não fazem diferença na nota.",
              "A cada dia, cresce a sensação de que não vai dar conta.",
              "E a pior parte? Enquanto você procrastina, seus concorrentes já estão usando métodos rápidos e certeiros para ganhar pontos valiosos."
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-red-500/5 border-red-500/20 hover:bg-red-500/10 transition-colors">
                  <p className="text-gray-300">{problem}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção da Solução */}
      <section className="container px-4 py-16 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ✅ A <span className="text-gradient">SOLUÇÃO</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Apresentamos o <span className="text-white font-medium">Pacote Reta Final ENEM</span> — o atalho que separa os aprovados dos que vão repetir a prova ano que vem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <FileText className="w-6 h-6" />,
                text: "📘 Resumos prontos das matérias mais cobradas (direto ao ponto, sem enrolação)"
              },
              {
                icon: <Target className="w-6 h-6" />,
                text: "📝 Modelos de redação nota 1000 para você treinar e adaptar sem perder tempo"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                text: "📊 Banco de questões selecionadas dos últimos anos para praticar só o que importa"
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                text: "📅 Cronograma automático de estudos (preencha seu tempo e ele organiza tudo pra você)"
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                text: "🎧 Áudios e mapas mentais para revisar em qualquer lugar"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-primary font-medium">
              Em menos de 5 minutos você já estará estudando de forma organizada, sabendo exatamente o que revisar até o dia da prova.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção Por Que Funciona */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">POR QUE FUNCIONA?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "✔ Elimina o excesso e mostra só o que cai.",
              "✔ Mantém você disciplinado com plano pronto.",
              "✔ Transforma revisão em algo rápido e sem sofrimento.",
              "✔ Dá segurança psicológica: você entra na prova sabendo que revisou o essencial."
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-green-500/5 border-green-500/20 hover:bg-green-500/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção da Oferta */}
      <section className="container px-4 py-16 bg-gradient-to-b from-black to-primary/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">💎 A OFERTA (IRRECUSÁVEL)</h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <span className="text-lg text-gray-300">Hoje você pode ter acesso a todo esse material por apenas:</span>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  R$ 27,00
                </div>
                <p className="text-gray-400">(pagamento único, acesso imediato e vitalício)</p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg font-medium text-yellow-400">Bônus exclusivo (só nesta oferta):</span>
                </div>
                <Card className="p-4 bg-yellow-500/10 border-yellow-500/20">
                  <p className="text-gray-300">
                    • Checklist dos "7 dias antes da prova" — exatamente o que revisar, como se alimentar e até como controlar a ansiedade na véspera.
                  </p>
                  <p className="text-yellow-400 font-medium mt-2">
                    Esse bônus sozinho já vale mais que o preço do pacote inteiro.
                  </p>
                </Card>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-lg font-medium text-red-400">IMPORTANTE!</span>
                </div>
                <Card className="p-4 bg-red-500/10 border-red-500/20">
                  <p className="text-gray-300">
                    Mas atenção: cada dia que passa sem revisar direito é um ponto a menos na sua nota. A janela para virar o jogo está se fechando — e você não terá outra chance até o próximo ENEM.
                  </p>
                </Card>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-gray-300 mb-6">
                  Clique agora no botão abaixo e garanta já seu acesso ao Pacote Reta Final ENEM.
                  <br />
                  <span className="text-white font-medium">Você não pode entrar na prova com medo. Entre sabendo que fez a preparação certa.</span>
                </p>

                <Button
                  size="lg"
                  className="button-gradient w-full text-lg py-6 font-bold"
                  onClick={() => window.open('https://pay.kirvano.com/66a64121-2b7f-4bd2-883a-2fe4d1f910be', '_blank')}
                >
                  QUERO MEU PACOTE AGORA
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                  Acesso imediato após o pagamento • Suporte 24h • Garantia de 7 dias
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnemOferta;