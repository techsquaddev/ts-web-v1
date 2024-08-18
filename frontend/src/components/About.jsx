import React from "react";
import { about } from "../assets";

const About = () => {
  return (
    <div className="mt-7 p-5 bg-white rounded-3xl md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-20">
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-end">
          <img
            src={about}
            alt="Modern website header image"
            className="w-full max-w-sm"
          />
        </div>
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-black mb-5 pt-4 md:p-0">
            We Are Noobs!!
          </h2>
          <p className="text-base text-secondary mb-6">
            <span className="bg-accent text-primary rounded">
              We are a group of IT undergraduates doing IT projects for fun. 😇
            </span>{" "}
            We would like to help other undergraduates who are beginners in IT
            projects to make their projects successful. We are still learning
            and we believe that knowledge sharing is the best way to learn
            something quickly. Visit FAQ page for more details.
          </p>
          <a
            href="/contact"
            className="inline-block border border-primary px-6 py-2 text-black text-base font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Go to FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
