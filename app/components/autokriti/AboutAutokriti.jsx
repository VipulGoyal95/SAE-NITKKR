import Image from "next/image";
// import progress1 from '../../../../public/assets/images/autokriti/progress1.svg';
// import progress2 from '../../../../public/assets/images/autokriti/progress2.svg';
// import progress3 from '../../../../public/assets/images/autokriti/progress3.svg';

const AboutAutokriti = () => {
  return (
    <div className="flex flex-row items-center justify-around min-h-screen py-10">
      <div className="flex flex-col items-center w-[30%]">
        <div className="flex flex-row items-start relative">
          <div className="flex flex-col items-center">
            <Image
              src="assets/images/autokriti/progress1.svg"
              alt="Workshops"
              width={20}
              height={172}
              priority
              className="object-contain"
              unoptimized
            />
            <div className="text-[30px] font-bold whitespace-pre mt-4 text-center">
              15+
              <br />
              workshops
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="assets/images/autokriti/progress2.svg"
              alt="Students"
              width={20}
              height={332}
              priority
              className="object-contain"
              unoptimized
            />
            <div className="text-[30px] font-bold whitespace-pre mt-4 text-center">
              2500+
              <br />
              students
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="assets/images/autokriti/progress3.svg"
              alt="Biggest Workshop"
              width={20}
              height={132}
              priority
              className="object-contain"
              unoptimized
            />
            <div className="text-[30px] font-bold whitespace-pre mt-4 text-center">
              North India's
              <br />
              biggest
              <br />
              workshop
            </div>
          </div>
        </div>
      </div>

      <div className="w-[50%]">
        <h1 className="p-5 text-[70px] font-bold text-center">
          About Autokriti
        </h1>
        <div className="p-4 text-justify text-lg leading-relaxed">
          <p>
            Autokriti is north India's largest automobile workshop which began
            in 2010. Every year loads of students gets enrolled to gain
            firsthand knowledge of industrial vehicles. The last held physical
            autokriti in 2019 saw a participation of 700+ candidates.
          </p>
          <p className="mt-4">
            It involves overhauling of a star engine, which varied from a 2
            stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6
            Porsche Cayenne in season 11.0; always in cahoots with technology.
            And not just the gearheads, but geeks from all branches of
            technology find here the stuffs of their interest.
          </p>
          <p className="mt-4">
            E- Autokriti is a digital edition of Autokriti, where this legacy of
            imparting knowledge continues amid the current covid crisis. And
            with many new surprises awaiting e-autokriti 2.0, we are expecting
            an even greater engagement
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAutokriti;
