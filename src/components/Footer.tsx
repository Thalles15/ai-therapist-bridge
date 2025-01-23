import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">PsicoIA</h3>
            <p className="text-gray-400">Transformando a gestão de clínicas psicológicas</p>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:contato@psicoai.com.br" className="hover:text-primary transition-colors">
              contato@psicoai.com.br
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} PsicoIA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};