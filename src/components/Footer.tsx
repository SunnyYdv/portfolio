import cls from "classnames";
import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router";

export const Footer = () => {

  const navigate = useNavigate();


  const toHome = useCallback(() => {
    navigate("/home");
  }, []);

  return (
        <div className={'bg-red-10 py-55 '}>
          <div className={'flex justify-between items-center mx-50'}>
            <div className={'flex gap-x-100 text-white'}>
              <a onClick={toHome}><img className={'w-58 h-58 cursor-pointer'} src="logoFooter.png" alt=""/></a>
              <div>
                <p className={'text-12'}>Number</p>
                <a href="tel:+1212354213215:26" className={'text-20 cursor-pointer border-b border-b-2 '}>+1 212 354 213215:26</a>

              </div>

              <div>
                <p className={'text-12'}>Email</p>
                <a href={'mailto:Freelancee@gmail.com'} className={'text-20 cursor-pointer border-b border-b-2'}>Freelancee@gmail.com</a>
              </div>
            </div>

            <div className={'text-[#FFF1F6]'}>
              <p className={'text-12'}>Developed by </p>
              <p className={'text-20'}>Brightlab</p>
            </div>
          </div>
        </div>
  );
};
