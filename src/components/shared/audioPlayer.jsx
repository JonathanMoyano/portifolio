import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, RefreshCw } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useAccessibility } from '../layout/Layout';

const AudioPlayer = ({ audioUrl, title, transcriptUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentLanguage } = useAccessibility();

  const translations = useMemo(
    () => ({
      pt: {
        play: 'Reproduzir',
        pause: 'Pausar',
        loading: 'Carregando áudio...',
        error: 'Erro ao carregar o áudio',
        transcript: 'Ver transcrição',
        skipForward: 'Avançar 10 segundos',
        skipBack: 'Retroceder 10 segundos',
        mute: 'Mutar',
        unmute: 'Desmutar',
      },
      en: {
        play: 'Play',
        pause: 'Pause',
        loading: 'Loading audio...',
        error: 'Error loading audio',
        transcript: 'View transcript',
        skipForward: 'Skip forward 10 seconds',
        skipBack: 'Skip back 10 seconds',
        mute: 'Mute',
        unmute: 'Unmute',
      },
      es: {
        play: 'Reproducir',
        pause: 'Pausar',
        loading: 'Cargando audio...',
        error: 'Error al cargar el audio',
        transcript: 'Ver transcripción',
        skipForward: 'Adelantar 10 segundos',
        skipBack: 'Retroceder 10 segundos',
        mute: 'Silenciar',
        unmute: 'Activar sonido',
      },
    }),
    []
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    const handleError = () => {
      setError(translations[currentLanguage].error);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [audioUrl, currentLanguage, translations]);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeChange = (newTime) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (newVolume) => {
    const volumeValue = newVolume[0];
    if (audioRef.current) {
      audioRef.current.volume = volumeValue;
      setVolume(volumeValue);
      setIsMuted(volumeValue === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.volume = newMuted ? 0 : volume;
      setIsMuted(newMuted);
    }
  };

  const skipTime = (seconds) => {
    if (audioRef.current) {
      const newTime = Math.min(Math.max(currentTime + seconds, 0), duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full rounded-lg border border-neutral-700 bg-neutral-800 p-4">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />

      {/* Título */}
      {title && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
          {transcriptUrl && (
            <a
              href={transcriptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 transition-colors hover:text-purple-300"
            >
              {translations[currentLanguage].transcript}
            </a>
          )}
        </div>
      )}

      {/* Controles principais */}
      <div className="mb-4 flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => skipTime(-10)}
          className="text-gray-400 hover:text-white"
          aria-label={translations[currentLanguage].skipBack}
        >
          <SkipBack className="h-5 w-5" />
        </Button>

        <Button
          variant="default"
          size="icon"
          onClick={togglePlay}
          className="h-12 w-12 rounded-full bg-purple-500 hover:bg-purple-600"
          disabled={isLoading || error}
          aria-label={
            isPlaying ? translations[currentLanguage].pause : translations[currentLanguage].play
          }
        >
          {isLoading ? (
            <RefreshCw className="h-6 w-6 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => skipTime(10)}
          className="text-gray-400 hover:text-white"
          aria-label={translations[currentLanguage].skipForward}
        >
          <SkipForward className="h-5 w-5" />
        </Button>
      </div>

      {/* Barra de progresso */}
      <div className="space-y-2">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          onValueChange={(value) => handleTimeChange(value[0])}
          className="w-full"
          aria-label="Progress"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controle de volume */}
      <div className="mt-4 flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="text-gray-400 hover:text-white"
          aria-label={
            isMuted ? translations[currentLanguage].unmute : translations[currentLanguage].mute
          }
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        <Slider
          value={[isMuted ? 0 : volume]}
          max={1}
          step={0.1}
          onValueChange={handleVolumeChange}
          className="w-24"
          aria-label="Volume"
        />
      </div>

      {/* Mensagem de erro */}
      {error && <div className="mt-4 text-center text-sm text-red-400">{error}</div>}
    </div>
  );
};

export default AudioPlayer;
