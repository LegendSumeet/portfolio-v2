import { CaseStudy as CaseStudyType } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FloatingImages } from "../FloatingImages/FloatingImages";
import { Box } from "./Box";

export interface CaseStudyProps extends CaseStudyType {
  index: number;
}

const CaseStudyss = ({
  slug,
  title,
  client,
  skills,
  mainImage,
  secondaryImages,
  index,
}: CaseStudyProps) => {
  const isEven = index % 2 === 0;

  return (
    <article className="mt-24 transition first-of-type:mt-0 md:hover:scale-[1.01]">
      <Link href={`/case-studies/${slug}`} className="group">
        <Box>
          <div
            className={classNames("flex flex-col gap-4", {
              "md:flex-row": isEven,
              "md:flex-row-reverse": !isEven,
            })}
          >
            <div className="flex h-full flex-col md:w-1/2">
              <h1 className="mb-2 text-xl text-white font-bold md:text-6xl">
                {title}
              </h1>
              <p className="max-w-xs sm:mt-10 text-sm text-white sm:text-2xl">
                <strong>Tech used: </strong>
                {skills.join(", ")}
              </p>
            
            </div>
            <div
              className={classNames(
                "-mx-10 -mb-12 md:mx-0 md:-mb-12 md:-mt-8",
                {
                  "md:-mr-20": isEven,
                  "md:-ml-20": !isEven,
                }
              )}
            >
              <FloatingImages mainImage={mainImage} altText={title} />
            </div>
          </div>
        </Box>
      </Link>
    </article>
  );
};

export { CaseStudyss };
