'use client'

import React from "react";
import WaveSurfer from "wavesurfer.js";
import { type Theme, useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Typography, Grid, CardActions, IconButton, Button, CardHeader } from "@mui/material";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';

export default function Play() {
  const theme = useTheme();

  return (
    <Box paddingY={2}>
      <Grid container spacing={2}>

        {AudioPaths.map((ap, idx) => (
          <Grid key={idx} item>
            <AudioCard theme={theme} audioPath={ap} itemid={idx} />
          </Grid>
        ))}


      </Grid>
    </Box>
  )
}

const AudioPaths = ['/audio/inspectorj_wind-synthesized-a.wav', '/audio/imjeax_desert-ambient-loop.wav', ];

interface AudioCardProps {
  theme: Theme;
  audioPath: string;
  itemid: number;
}

const AudioCard = ({ theme, audioPath, itemid }: AudioCardProps) => {
  const [waveSurfer, setWaveSurfer] = React.useState<WaveSurfer>();
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  React.useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: `#waveform-${itemid}`,
      waveColor: '#4F4A85',
      progressColor: '#383351',
      url: audioPath,
      autoplay: false,
    });

    setWaveSurfer((p) => wavesurfer);

    return () => {
      wavesurfer.destroy();
    }
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(p => !p);
    waveSurfer?.playPause();
  }

  const handleSeekBackward = () => {
  }

  return (
    <Card
      sx={{ width: '420px' }}
    >

      <CardContent>
        <Box id={`waveform-${itemid}`} component='div'></Box>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton onClick={handlePlayPause}>{isPlaying ? <PauseIcon /> : <PlayArrowIcon />} </IconButton>
      </CardActions>
    </Card>
  )
}