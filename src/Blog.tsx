export const Blog = () => {
  const h2 = "text-orange my-30 text-28";
  const h3 = "text-orange mt-32 mb-10 text-20";
  return (
    <div className="px-30 mobile:px-15 ">
      <div className="bg-blog rounded-30 bg-center px-40 bg-cover w-full object-cover text-white pb-40 pr-50 pt-260 mobile:pt-120 mobile:px-20">
        <h1 className="text-64 mobile:text-32 uppercase mb-10">
          3 Strategies to Take Your Portfolio to the Next Level
        </h1>
        <div className="text-18 mobile:text-14 space-x-20">
          <span> &#183; June 27, 2023 </span>
          <span> &#183; 5 min read </span>
        </div>
      </div>
      <div className="max-w-660 px-20 mx-auto pt-80 pb-100 mobile:pt-20 mobile:pb-50">
        <p className="mb-20">
          Working on a design portfolio is a challenging task that requires a
          special approach. Whether you are a newcomer to the design field or a
          seasoned professional with a wealth of experience, I would like to
          share my thoughts on creating and showcasing a design portfolio.
        </p>
        <img src="lamp.webp" className="rounded-20 object-cover" />
        <h2 className={h2}>Why is a portfolio so important?</h2>
        <p className="mb-20">
          Unlike professionals in other industries, designers cannot rely solely
          on a resume to showcase their professional experience. Since our work
          is primarily visual in nature, the best way to present it is through
          some form of visual storytelling. That's why many companies,
          recruiters, and even colleagues expect to see a portfolio that
          demonstrates your skills, abilities, and experience.
        </p>
        <h2 className={h2}>Strategy 1: Portfolio as a Reflection</h2>
        <p className="mb-20">
          A portfolio is a gateway to showcasing your work and telling the story
          of who you are as a designer. It serves as a mirror that allows
          clients and potential employers to get to know you, reflecting your
          individuality, skills, and abilities.
        </p>
        <p>
          To make it easier for you to select projects that will showcase your
          abilities in the best possible way, focus on the following aspects:
        </p>
        <h3 className={h3}>Quality</h3>
        <p>
          Choose projects where you have put in extensive work. The deeper you
          were able to immerse yourself in the project or subject matter, the
          better.
        </p>
        <h3 className={h3}>Relevance</h3>
        <p>
          Evaluate your projects in terms of whether they demonstrate your
          current skills. Clearly define your role and the impact you had on the
          outcome.
        </p>
        <h3 className={h3}>Effectiveness</h3>
        <p className="mb-20">
          Select projects that can tell a compelling story. Regardless of
          whether the project was successful or not, it's important to analyze
          your work and reflect on what you would do differently now.
        </p>

        <img src="dialog.webp" className="rounded-20 object-cover" />
        <h2 className={h2}>
          Strategy 2: Format and Content as Communication Tools
        </h2>

        <p className="mb-20">
          Recruiters and potential clients form their opinions about you very
          quickly. To make a good impression, it's important to create an
          accessible and aesthetically appealing portfolio, but finding the
          right balance can be challenging.
        </p>
        <p>
          Take your time and think about the method of showcasing your work that
          is most comfortable for you.
        </p>
        <h2 className={h2}>Strategy 3: Optimization = Growth</h2>
        <p className="mb-20">
          The design industry is constantly evolving and expanding, creating new
          areas as technology advances. This requires continuous optimization of
          both our projects and ourselves. As mentioned before, a portfolio is a
          reflection of our skills, showcasing the projects we have worked on
          and the new professional challenges we aim to tackle. In this sense, a
          portfolio is a constantly evolving living organism that grows
          alongside its owner.
        </p>
        <p className="mb-20">
          Every step in a designer's career is accompanied by portfolio updates.
          Continuous "optimization" may seem daunting, but each update is an
          opportunity to showcase to future clients and recruiters what you have
          to offer.
        </p>
        <img src="planner.webp" className="rounded-20 object-cover" />
        <p className="mt-20 mb-32">
          Keeping your portfolio current involves more than just adding content
          and improving its design. It also means removing or replacing old
          projects that no longer reflect your skills, and focusing on new ones.
          Consider it a transition to the next level!
        </p>

        <p className="bg-light-orange p-24 rounded-10">
          <h4 className="mb-10">Remember:</h4>
          Keep backups of all iterations of your portfolio so that you can look
          back and reminisce about your evolution as a designer.
        </p>
        <p className="mt-20 mb-32">
          We hope that these tips will help you create an attractive and
          effective portfolio that you can be proud of. Good luck!
        </p>
        <h2 className={h2}>Partners</h2>

      </div>
    </div>
  );
};
