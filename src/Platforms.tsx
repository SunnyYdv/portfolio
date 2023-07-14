import cls from "classnames";
import { Link, NavLink, animateScroll, Element } from "react-scroll"

export const Platforms = () => {

  console.log(animateScroll, 'animateScroll')
  const h2 = "text-orange my-30 text-28";
  const h3 = "text-orange mt-32 mb-10 text-20";
  return (
    <div className="px-30 mobile:px-15 ">
      <div className="bg-platforms rounded-30 bg-center px-40 bg-cover w-full object-cover text-white pb-40 pr-50 pt-260 mobile:pt-120 mobile:px-20">
        <h1 className="text-64 mobile:text-32 uppercase mb-10">
          The best freelance and Job search platforms
        </h1>
        <div className="text-18 mobile:text-14 space-x-20">
          <span> &#183; June 27, 2023 </span>
          <span> &#183; 15 min read </span>
        </div>
      </div>

      <div className={'flex pt-80'}>

        <div className={'bg-light-orange p-20 rounded-8 h-1/2'}>
          <p>Introduction</p>
          <p className={'my-10'}>Best platforms for freelancers</p>
          <div className={'ml-10'}>
            <Link activeClass={"active"} spy={true} to="Upwork" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer'}>Upwork</p>
            </Link>

            <Link activeClass="active" to="Freelancer" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer my-8'}>Freelancer</p>
            </Link>
            <Link activeClass="active" to="99designs" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer'}>99designs</p>
            </Link>

          </div>
          <p className={'my-10'}>Best platforms for job search</p>
          <div className={'ml-10'}>
            <Link activeClass="active" to="XING" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer'}>XING</p>
            </Link>
            <Link activeClass="active" to="Indeed" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer  my-8'}>Indeed</p>
            </Link>
            <Link activeClass="active" to="CareerBuilder" smooth={true} duration={500} offset={-90}>
              <p className={'cursor-pointer'}>CareerBuilder</p>
            </Link>
          </div>
        </div>
        <div className="max-w-660 px-20 mx-auto pb-100 mobile:pt-20 mobile:pb-50">
          <p className="mb-20">
            Freelance exchanges are an opportunity to enter the profession even without experience.
            We share the best sites and tell you where to start and how to make money on them.
          </p>
          <img src="amin.png" className="rounded-20 object-cover mb-20" />
          <p className="mb-20">
            There are many professions where freelancing is a full—fledged source of income.
            Moreover, this is remote work: you can work from anywhere in the world and receive
            large orders — freelance is not tied to geography.
          </p>
          <p className="mb-20">
            Another advantage of freelancing is a great start in the profession, even if you are a beginner.
          </p>
          <p>
            And the ideal process of working as a freelancer looks like this: choose an exchange,
            apply for interesting projects, fulfill orders and receive money. In fact, everything is
            somewhat more complicated: you need to be able to find a good order and stand out
            among many competitors in order to get it.
          </p>
          <p>In this article we will tell you about freelance websites that will be useful for
            both novice designers and professionals. In addition, you will learn:
          </p>
          <ul className={'mt-40'}>
            <li>&#183; how to make money on freelancing;</li>
            <li>&#183; which approach to work is the most effective;</li>
            <li>&#183; what affects the cost of work;</li>
            <li>&#183; how to attract a customer;</li>
            <li>&#183; how to avoid mistakes.</li>
          </ul>

          <h2 className={cls(h2, 'text-center border border-1 border-[#FFE9D2] p-15')}>Best platforms for <span className={'bg-[#FFE9D2] p-2 rounded-4 '}>freelancers</span></h2>

          <Element name="Upwork"/>
          <div className={'flex justify-between items-center'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="upwork.png" alt=""/>
             <h2 className={h2}>Upwork</h2>

            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            Upwork is a large and well-known freelance exchange for designers and developers.
            Here, you can work with many renowned clients such as Microsoft, Airbnb, Dropbox, and more.
            The discount system on Upwork is organized in a standard way: clients post their projects,
            and freelancers respond to them and offer their services. The work on Upwork is well compensated.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="up-work.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service Upwork</p>

          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Price:</p>
            <p className={'mt-5'}>Free subscription available, but it does not provide access to high-paying projects. The paid subscription costs $14.99 per month.</p>
            <p className={'text-orange mt-15'}>Withdrawal Process:</p>
            <p className={'mt-5'}> Money can be withdrawn to bank cards, Payoneer, Paypal, and through bank transfers.</p>
          </div>

          <Element name="Freelancer"/>
          <div className={'flex justify-between items-center mt-60'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="free.png" alt=""/>
              <h2 className={h2}>Freelancer</h2>
            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            Freelancer is a popular international exchange with a user-friendly interface and
            strict registration and identity verification rules.
            The platform offers a range of job categories, including web development, design, writing,
            marketing, and more. Clients can post projects and specify their requirements, while freelancers
            can create detailed profiles showcasing their skills, experience, and portfolio.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="need.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service Upwork</p>


          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Price:</p>
            <p className={'mt-5'}>The service offers 6 free proposals, and a subscription is required for additional proposals. There are four subscription plans available, ranging from $4.95 to $59.95 per month.</p>
            <p className={'text-orange mt-15'}>Withdrawal Process:</p>
            <p className={'mt-5'}>Money can be withdrawn through bank cards, Wire transfer, PayPal, Skrill, Payoneer, and bank transfer.</p>
          </div>




          <Element name="99designs"/>
          <div className={'flex justify-between items-center mt-60'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="99d-work.png" alt=""/>
              <h2 className={h2}>99designs</h2>
            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            For freelance designers looking for jobs, 99designs offers plenty of options.
            It is a freelance website specially tailored for designers and businesses to collaborate.
            There are various design projects available, from logo design and book covers to clothing and merchandise.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="99banner.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service 99designs</p>


          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Price:</p>
            <p className={'mt-5'}>Free subscription available, but it does not provide access to high-Whenever
              you work with a new client, 99designs will charge an introduction
              fee of $100 and a platform fee ranging from 5% to 15%..</p>
            <p className={'text-orange mt-15'}>Withdrawal Process:</p>
            <p className={'mt-5'}>Freelancers get paid via PayPal or Payoneer
              within three business days and sooner for people with higher profile levels.</p>
          </div>


          <h2 className={cls(h2, 'text-center border border-1 border-[#FFE9D2] p-15')}>Best platforms for <span className={'bg-[#FFE9D2] p-2 rounded-4 '}>job search</span></h2>


           Indeed  CareerBuilder
          <Element name="XING"/>
          <div className={'flex justify-between items-center mt-40'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="xing.png" alt=""/>
              <h2 className={h2}>XING</h2>
            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            XING is the social network for business professionals. More than 20 million members are currently registered on XING.
            It is a platform where professionals from all kinds of different industries can meet up, find jobs, colleagues,
            new assignments, cooperation partners, experts and generate business ideas.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="xing-banner.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service XING</p>


          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Professional Profiles:</p>
            <p className={'mt-5'}>Users can create detailed professional profiles, similar to a resume, highlighting their skills, experience, education, and other relevant information. These profiles serve as a digital representation of their professional identity.</p>
            <p className={'text-orange mt-15'}>Job Search and Recruiting:</p>
            <p className={'mt-5'}>
              Users can search for job opportunities posted by companies and recruiters on Xing. Job seekers can upload their resumes, set job preferences, and receive notifications about relevant job openings. Employers can also use Xing to post job listings and search for potential candidates.</p>
            <p className={'text-orange mt-12'}>Premium Memberships: </p>
            <p className={'mt-5'}>Xing offers premium memberships with additional features and benefits. Premium members may have access to advanced search filters, enhanced visibility in search results, messaging features, and other exclusive perks to enhance their networking and job-seeking experience.</p>
          </div>


            CareerBuilder
          <Element name="Indeed"/>
          <div className={'flex justify-between items-center mt-40'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="indeed.png" alt=""/>
              <h2 className={h2}>Indeed</h2>
            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            Indeed is a leading job search engine that aggregates job listings from various sources,
            including company websites, job boards, and recruitment agencies. Employers can post jobs
            and use the platform's candidate search and screening tools. Job seekers can search for job openings,
            upload resumes, and apply for positions.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="indeed-banner.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service Indeed</p>


          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Professional Profiles: </p>
            <p className={'mt-5'}>Job seekers can create and upload their resumes to their Indeed accounts, making it easy to apply for jobs directly through the platform. Resumes can be customized and edited to highlight relevant skills and experience.</p>
            <p className={'text-orange mt-15'}>Job Search and Recruiting:</p>
            <p className={'mt-5'}>Indeed allows job seekers to search for job openings based on various criteria such as location, keywords, job title, and company name. Users can also set up job alerts to receive email notifications when new jobs matching their criteria are posted.</p>
            <p className={'text-orange mt-12'}>Premium Memberships: </p>
            <p className={'mt-5'}>Employers have the option to boost the visibility of their job postings by opting for sponsored listings. These listings appear prominently in search results and receive increased visibility, potentially attracting more applicants.</p>
          </div>


          <Element name="CareerBuilder"/>
          <div className={'flex justify-between items-center mt-40'}>
            <div className={'flex block items-center'}>
              <img className={'w-full h-full mr-20'} src="career.png" alt=""/>
              <h2 className={h2}>CareerBuilder</h2>
            </div>

            <img className={'w-44 h-44'} src="export.png" alt=""/>
          </div>
          <p className={'mt-20'}>
            CareerBuilder  is a job board and recruitment platform that connects employers with job seekers.
            It offers job posting services, resume search tools, and candidate screening options. Job seekers can
            search for jobs, upload resumes, and receive job alerts.
          </p>

          <img className={'mt-20 border border-light-orange rounded-8'} src="career-banner.png" alt=""/>
          <p className={'text-[#686462] text-12 mt-5'}>Screenshot of the service CareerBuilder</p>


          <div className={'mt-20 bg-light-orange p-20 rounded-8'}>
            <h3 className={'font-bold text-20'}>Service Features</h3>
            <p className={'text-orange mt-12'}>Professional Profiles: </p>
            <p className={'mt-5'}>Job seekers can create or upload their resumes to CareerBuilder's platform. The Resume Builder tool helps users create professional resumes, ensuring they highlight relevant skills and experience. Users can also store multiple versions of their resumes for different job applications.</p>
            <p className={'text-orange mt-15'}>Job Search and Recruiting:</p>
            <p className={'mt-5'}>CareerBuilder provides a comprehensive job search engine, allowing users to search for job openings based on keywords, location, industry, and other criteria. Advanced search options enable users to refine their search results further.</p>
          </div>
        </div>

      </div>



    </div>
  );
};
