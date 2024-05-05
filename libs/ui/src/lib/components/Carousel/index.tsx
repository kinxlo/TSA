'use client';
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import './styles.css';
import {
  TsaCarouselCardProps,
  TsaCarouselProps,
} from 'libs/ui/src/utils/propTypes';
import {
  Card,
  Box,
  CardContent,
  Typography,
  CardActions,
  Stack,
  IconButton,
} from '@mui/material';
import { TsaButton } from '../Button';
import Image from 'next/image';
import { convertUnit as fn } from 'libs/ui/src/utils/fontsFn';
import { TsaWrapper } from '../containers/Wrapper';
import React, { useRef, useState } from 'react';
import { Pagination } from 'swiper';
import { Icon } from '@iconify/react';

export const TsaCarousel: React.FC<TsaCarouselProps> = ({ courses }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setCurrentSlideIndex(swiperRef.current.swiper.realIndex);
    }
  };

  const isLastSlide = currentSlideIndex === courses?.length;
  const isFirstSlide = currentSlideIndex === 0;

  const cardDisplay = courses?.map((card, index) => {
    return (
      <SwiperSlide key={index}>
        <CarouselCard content={card} />
      </SwiperSlide>
    );
  });

  return (
    <TsaWrapper>
      <React.Fragment>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
        >
          {cardDisplay}
        </Swiper>
        <Stack
          direction={`row`}
          justifyContent={`center`}
          alignItems={`center`}
          gap={2}
          my={2}
        >
          <IconButton
            color={`secondary`}
            hidden={!isFirstSlide}
            aria-label="left"
            onClick={goPrev}
          >
            <Icon icon={`carbon:previous-outline`} />
          </IconButton>
          <IconButton
            color={`secondary`}
            hidden={!isLastSlide}
            aria-label="right"
            onClick={goNext}
          >
            <Icon icon={`carbon:next-outline`} />
          </IconButton>
        </Stack>
      </React.Fragment>
    </TsaWrapper>
  );
};

// carousel card
export const CarouselCard: React.FC<TsaCarouselCardProps> = ({ content }) => {
  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: fn.rem(372),
        height: fn.rem(450),
        textAlign: `center`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        bgcolor: `transparent`,
      }}
    >
      <Box position={`relative`} height={fn.rem(178)}>
        <Image
          fill
          objectFit={`contain`}
          src={content?.image}
          alt={`card-img`}
          priority
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={700} component="div">
          {content?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <TsaButton
          name={`View Courses`}
          variant={`text`}
          color={`secondary`}
          sx={{
            border: `2px solid #0266f4`,
            width: fn.rem(180),
            margin: `auto`,
            ':hover': {
              background: `#0266f4`,
              color: `#fff`,
            },
          }}
        />
      </CardActions>
    </Card>
  );
};
