import cls from "classnames";

export const About = () => {
  const h2 = "text-orange my-30 text-28";
  const h3 = "text-orange mt-32 mb-10 text-20";
  return (
    <div className="px-30 mobile:px-15">

        <div className="text-64 mobile:text-32 uppercase mb-10  ">
          <div className={'flex items-center gap-x-30'}>
            At our company <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L20.4565 15.5435L36 18L20.4565 20.4565L18 36L15.5435 20.4565L0 18L15.5435 15.5435L18 0Z" fill="#A54834"/>
          </svg>
          </div>
        </div>

        <div className={'flex items-center justify-center bg-light-orange rounded-8 p-70 mt-60'}>
           <img className={'relative'} src="line.png" alt=""/>
            <div className={cls(h2, 'uppercase absolute text-orange text-58 cursor-pointer')}>Freelancee@gmail.com</div>
        </div>

        <div className={cls('max-w-880 text-38 text-orange mt-60')}>We assure you of confidentiality, effectiveness, and the provision of high-quality services.</div>


        <div className={'mt-60 flex space-x-40'}>

            <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0L24.0802 0.507391C25.9851 12.561 35.439 22.0149 47.4926 23.9198L48 24L47.4926 24.0802C35.439 25.9851 25.9851 35.439 24.0802 47.4926L24 48L23.9198 47.4926C22.0149 35.439 12.5611 25.9851 0.50739 24.0802L0 24L0.507391 23.9198C12.5611 22.0149 22.0149 12.561 23.9198 0.50739L24 0Z" fill="#BC8C81"/>
                </svg>
                <div className={'mt-16 text-18'}>Our team of experienced consultants possesses a profound understanding of the contemporary job market and the realm of freelancing. They will aid you in crafting a compelling resume and profile that will distinguish you from your competitors. Furthermore, our experts will share top-notch job search strategies to enhance your chances of success.</div>
            </div>


            <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0L24.0802 0.507391C25.9851 12.561 35.439 22.0149 47.4926 23.9198L48 24L47.4926 24.0802C35.439 25.9851 25.9851 35.439 24.0802 47.4926L24 48L23.9198 47.4926C22.0149 35.439 12.5611 25.9851 0.50739 24.0802L0 24L0.507391 23.9198C12.5611 22.0149 22.0149 12.561 23.9198 0.50739L24 0Z" fill="#BC8C81"/>
                </svg>
                <div className={'mt-16 text-18'}>Our team of experienced consultants possesses a profound understanding of the contemporary job market and the realm of freelancing. They will aid you in crafting a compelling resume and profile that will distinguish you from your competitors. Furthermore, our experts will share top-notch job search strategies to enhance your chances of success.</div>
            </div>

        </div>


        <div className={'text-orange text-28 max-w-660 mt-60 mb-120'}>
            By engaging our services, you can expect to receive professional consultation, a personalized approach, and practical assistance crucial for a fruitful job search and triumph on freelance platforms.
        </div>



    </div>
  );
};
