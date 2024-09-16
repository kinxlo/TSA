import { TsaCarousel } from "@strategic-dot/components";

import { GALLARY_CONTENT } from "~/app/(landing-routes)/(home)/_views/section-five";
import { Wrapper } from "~/components/layout/wrapper";

export const Gallery = () => {
  return (
    <Wrapper className="relative items-center gap-[28px] gap-y-0 lg:flex lg:py-[100px]">
      <TsaCarousel
        variant="gallery"
        slideContent={[]}
        galleryContent={GALLARY_CONTENT}
      />

      <div className="right-10 z-10 max-w-[458px] rounded-lg bg-background px-[28px] py-[47px] shadow-lg lg:absolute">
        <div>
          <h6 className="font-bold">A World-Class Learning Facility</h6>
          <p className="my-[25px] leading-[26px]">
            At Tech Studio Academy, we have created a conducive environment for
            learning, combining exceptional school structures, inspiring
            classrooms, and dedicated tutors. We understand that the physical
            surroundings greatly impact the educational experience, and we
            strive to provide a nurturing setting that fosters academic growth,
            creativity, and personal development.
          </p>
          <p className="leading-[26px]">
            Our classrooms are carefully designed to facilitate effective
            teaching and learning to enable tutors to deliver dynamic and
            engaging lessons that captivate students attention and spark their
            curiosity.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
