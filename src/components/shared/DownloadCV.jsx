import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { downloadCV } from '@/utils/download';

const DownloadCV = ({ area }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (type) => {
    setIsDownloading(true);
    try {
      await downloadCV(area, type);

      toast({
        title: 'Download concluído!',
        description: 'O arquivo foi baixado com sucesso.',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Erro no download',
        description: 'Não foi possível baixar o arquivo. Tente novamente.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Download className="mr-2 h-4 w-4" />
            )}
            Download CV
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={() => handleDownload('completo')} className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            CV Completo
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDownload('resumido')} className="cursor-pointer">
            <FileText className="mr-2 h-4 w-4" />
            CV Resumido
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DownloadCV;
