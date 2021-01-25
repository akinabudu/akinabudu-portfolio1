import { HeaderSmall } from '@shared-components';
import SkillsIcons from './skills-icon';

export default function Skills(): JSX.Element {
  return (
    <>
      <div className="relative h-90vh sm:h-auto md:h-90vh">
        <img
          src="/images/vectors/cylinder.svg"
          alt="Cylinder Vector"
          className="absolute right-0 top-16 sm:top-7 w-2/3 md:w-50p lg:w-35p pointer-events-none opacity-50 transition-all animate-absoluteright"
        />
        <img
          src="/images/vectors/l-vector.svg"
          alt="L Vector"
          className="absolute left-0 md:left-35p bottom-0 w-75p opacity-50 md:opacity-100 sm:w-1/3 md:w-1/4 lg:w-1/3 pointer-events-none"
        />
        <div className="ml-4 sm:mx-12 md:mx-16 grid grid-cols-12 gap-4 lg:h-90vh place-items-center items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
            {/* Hero Header */}
            <div className="items-center w-3/4 relative">
              <HeaderSmall text="What does he do?" />
              <h1 className="w-4/5 mb-3 mt-1 text-7xl sm:text-5xl md:text-7xl lg:text-5xl font-normal tracking-wide text-white leading-normal">
                He builds beautiful, logical web & mobile app solutions. Designs in his hobby time.
              </h1>
              <h1 className="mb-3 mt-6 text-4xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-1xl font-extrabold text-white leading-none ">
                Think. <span className="text-pink">Code.</span> Debug.
              </h1>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-6 flex flex-col justify-center items-center my-10 sm:mt-0">
            <SkillsIcons />
          </div>
        </div>
      </div>
    </>
  );
}