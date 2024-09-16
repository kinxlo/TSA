"use client";

import { TsaButton } from "@strategic-dot/components";

import { CarouselBanner } from "~/components/banners/carousel-banner";
import { Wrapper } from "~/components/layout/wrapper";
import { BlurImage } from "~/components/miscellaneous/blur-image";
import { LifeAfterTraining } from "~/views/life-after-training";

export const SectionThree = () => {
  return (
    <section className="py-[100px]">
      <LifeAfterTraining />
      <Wrapper className="my-[50px] lg:my-[100px]">
        <CarouselBanner />
      </Wrapper>
      <Wrapper className="grid grid-cols-1 items-center gap-[28px] gap-y-0 text-center lg:grid-cols-2 lg:text-left">
        <div className="flex-1">
          <BlurImage
            _width={567}
            _height={431}
            src="https://techstudio.nyc3.cdn.digitaloceanspaces.com/tsa-2.0/gifs/certificate.gif"
            alt="certificate"
            className="mx-auto object-cover"
          />
        </div>
        <div className="flex-1">
          <span className="text-sm font-bold uppercase text-mid-blue">
            Take A Course
          </span>
          <h3 className="my-[19px]">
            Acquire a tech skill to transcend your current earning status
          </h3>
          <p>
            We provide high-quality and affordable technology training to meet
            our students’ needs. Also, we ensure all our students are equipped
            with the necessary tech skills for related work opportunities at the
            end of the program.
          </p>
          <TsaButton
            variant="primary"
            size="lg"
            className="mt-[36px] h-[48px] w-[156px] bg-mid-blue"
          >
            Get Started
          </TsaButton>
        </div>
      </Wrapper>
    </section>
  );
};
