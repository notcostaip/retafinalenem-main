import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { RunwareService } from "@/services/runware";
import { toast } from "sonner";

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string, filename: string) => void;
  prompt: string;
  isGenerating: boolean;
  onGeneratingChange: (generating: boolean) => void;
}

const ImageGenerator = ({ onImageGenerated, prompt, isGenerating, onGeneratingChange }: ImageGeneratorProps) => {
  const [apiKey] = useState("NacpJ8evebFDSqeP1i8IfY8XJ5TdgJzW");

  const generateImage = async () => {
    if (!apiKey) {
      toast.error("API Key não encontrada");
      return;
    }

    onGeneratingChange(true);
    toast.info("Gerando imagem...");

    try {
      const runware = new RunwareService(apiKey);
      const result = await runware.generateImage({
        positivePrompt: prompt,
        width: 512,
        height: 512,
        model: "runware:100@1"
      });

      if (result.imageURL) {
        // Download the image and convert to blob
        const response = await fetch(result.imageURL);
        const blob = await response.blob();
        
        // Create a local URL
        const localUrl = URL.createObjectURL(blob);
        const filename = `generated-${Date.now()}.webp`;
        
        onImageGenerated(result.imageURL, filename);
        toast.success("Imagem gerada com sucesso!");
      }
      
      runware.disconnect();
    } catch (error) {
      console.error("Erro ao gerar imagem:", error);
      toast.error("Erro ao gerar imagem. Tente novamente.");
    } finally {
      onGeneratingChange(false);
    }
  };

  return (
    <Button 
      onClick={generateImage} 
      disabled={isGenerating}
      className="w-full"
    >
      {isGenerating ? "Gerando..." : "Gerar Imagem com IA"}
    </Button>
  );
};

export default ImageGenerator;