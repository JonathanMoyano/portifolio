import React from 'react';
import { Circle, ChevronRight } from 'lucide-react';
import { useAccessibility } from '../layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const TimelineItem = ({
  date,
  title,
  description,
  details,
  icon: Icon,
  isLast = false,
  onClick,
  isActive = false,
  tags = [],
  achievements = [],
  media = null,
  category = '',
}) => {
  const { contrast, currentLanguage } = useAccessibility();

  const translations = {
    pt: {
      achievements: 'Conquistas',
      readMore: 'Ler mais',
      details: 'Detalhes',
      highlight: 'Destaque',
    },
    en: {
      achievements: 'Achievements',
      readMore: 'Read more',
      details: 'Details',
      highlight: 'Highlight',
    },
    es: {
      achievements: 'Logros',
      readMore: 'Leer más',
      details: 'Detalles',
      highlight: 'Destacado',
    },
  };

  return (
    <div className="group relative flex items-start" data-category={category}>
      {/* Linha vertical conectora */}
      {!isLast && (
        <div
          className={`
            absolute bottom-0 left-[1.625rem] top-10 w-px 
            ${
              contrast
                ? 'bg-white group-hover:bg-purple-300'
                : 'bg-neutral-800 group-hover:bg-purple-500/50'
            } 
            transition-colors
          `}
        />
      )}

      {/* Conteúdo principal */}
      <div className="ml-12 flex-1">
        <Card
          className={`
            relative cursor-pointer transition-all duration-300
            ${
              isActive
                ? 'border-purple-500 bg-purple-500/10'
                : 'border-neutral-700 bg-neutral-800 hover:border-purple-500'
            }
            ${contrast ? 'border-2' : 'border'}
          `}
          onClick={onClick}
        >
          <CardContent className="p-6">
            {/* Ícone */}
            <div
              className={`
                absolute -left-[3.5rem] flex h-10 w-10 items-center justify-center rounded-full
                ${
                  isActive
                    ? 'bg-purple-500 text-white'
                    : `bg-neutral-700 text-gray-300 
                     ${
                       contrast
                         ? 'hover:bg-white hover:text-black'
                         : 'hover:bg-purple-500/20 hover:text-purple-400'
                     }`
                }
                transition-all duration-300
              `}
            >
              {Icon ? <Icon className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
            </div>

            {/* Cabeçalho */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    contrast ? 'text-white' : 'text-gray-100'
                  } mb-1`}
                >
                  {title}
                </h3>
                <p className={`text-sm ${contrast ? 'text-gray-200' : 'text-gray-400'}`}>{date}</p>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant={contrast ? 'outline' : 'secondary'}
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Descrição */}
            <p className={`mb-4 ${contrast ? 'text-white' : 'text-gray-300'}`}>{description}</p>

            {/* Conquistas */}
            {achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="mb-2 text-sm font-semibold text-purple-400">
                  {translations[currentLanguage].achievements}
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 ${
                        contrast ? 'text-white' : 'text-gray-300'
                      }`}
                    >
                      <Circle className="mt-2 h-2 w-2 flex-shrink-0 fill-current text-purple-500" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Mídia (se houver) */}
            {media && (
              <div className="mb-4 overflow-hidden rounded-lg">
                {media.type === 'image' && (
                  <Image
                    src={media.url}
                    alt={media.alt || title}
                    width={500}
                    height={500}
                    className="h-auto w-full object-cover"
                  />
                )}
                {media.type === 'video' && (
                  <video controls className="w-full" poster={media.poster}>
                    <source src={media.url} type="video/mp4" />
                    {translations[currentLanguage].videoNotSupported}
                  </video>
                )}
              </div>
            )}

            {/* Botão de detalhes */}
            {details && (
              <div
                className={`
                mt-4 flex items-center justify-end gap-2 pt-4
                ${contrast ? 'border-t border-white' : 'border-t border-neutral-700'}
              `}
              >
                <span className={`text-sm ${contrast ? 'text-white' : 'text-gray-400'}`}>
                  {translations[currentLanguage].readMore}
                </span>
                <ChevronRight
                  className={`h-4 w-4 ${isActive ? 'text-purple-400' : 'text-gray-400'}`}
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimelineItem;
