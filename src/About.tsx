import cls from "classnames";
import { Icons } from "components/Icons";

export const About = () => {

  return (
    <div className="px-50 mobile:px-15">
      <div className="text-48 mobile:text-26 uppercase mb-10">
        <p className="max-w-80% mobile:max-w-full">
          At our company <Icons.Star className="text-orange inline" />
          we provide{" "}
          <span className="font-regarn text-orange">Professional</span>
          <Icons.Star className="text-orange inline" /> guidance and{" "}
          <span className="font-regarn text-orange"> assistance </span> for
          individuals looking to <Icons.Rings className="inline" /> navigate the
          job market and access freelance{" "}
          <span className="font-regarn text-orange"> platforms </span>{" "}
          <Icons.Star className="text-orange inline" />
        </p>
      </div>

      <img
        className={"rounded-15 w-full h-full mt-20 mb-30"}
        src="freelance-com.webp"
        alt="freelance com"
      />

      <div className={cls("max-w-880 text-38 mobile:text-24 text-orange mb-60")}>
        We assure you of confidentiality, effectiveness, and the provision of
        high-quality services.
      </div>

      <div className={"flex mobile:flex-col space-x-40 mobile:space-x-0 mobile:space-y-20"}>
        <div >
          <Icons.BigStar className="text-dark-pink" />
          <div className={"mt-16 text-18"}>
            Our team of experienced consultants possesses a profound
            understanding of the contemporary job market and the realm of
            freelancing. They will aid you in crafting a compelling resume and
            profile that will distinguish you from your competitors.
            Furthermore, our experts will share top-notch job search strategies
            to enhance your chances of success.
          </div>
        </div>

        <div>
          <Icons.BigStar className="text-dark-pink" />
          <div className={"mt-16 text-18"}>
            Our team of experienced consultants possesses a profound
            understanding of the contemporary job market and the realm of
            freelancing. They will aid you in crafting a compelling resume and
            profile that will distinguish you from your competitors.
            Furthermore, our experts will share top-notch job search strategies
            to enhance your chances of success.
          </div>
        </div>
      </div>

      <div className={"text-orange text-28 mobile:text-24 max-w-660 mt-60 mb-120 mobile:mb-100"}>
        By engaging our services, you can expect to receive professional
        consultation, a personalized approach, and practical assistance crucial
        for a fruitful job search and triumph on freelance platforms.
      </div>
    </div>
  );
};
