// components/shared/audioPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const AudioPlayer = ({ audioUrl, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);

  // Atualiza o progresso do áudio
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadMetadata);
    };
  }, []);

  // Handlers
  const handleLoadMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressChange = (value) => {
    const newTime = (value[0] / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(value[0]);
  };

  // Formata o tempo em minutos:segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4">
      {/* Título do áudio */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <span className="text-sm text-cyan-100/60">
          {formatTime(audioRef.current?.currentTime || 0)} / {formatTime(duration)}
        </span>
      </div>

      {/* Controles de áudio */}
      <div className="flex items-center gap-4">
        {/* Botão play/pause */}
        <button
          onClick={togglePlay}
          className="rounded-full bg-cyan-500/20 p-2 text-cyan-400 transition-colors hover:bg-cyan-500/30"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>

        {/* Slider de progresso */}
        <div className="flex-1">
          <Slider value={[progress]} max={100} step={0.1} onValueChange={handleProgressChange} />
        </div>

        {/* Botão mute */}
        <button
          onClick={toggleMute}
          className="text-cyan-400 transition-colors hover:text-cyan-300"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Elemento de áudio */}
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
    </div>
  );
};

export default AudioPlayer;
