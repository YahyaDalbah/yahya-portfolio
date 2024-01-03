import React from "react";
import Service from "./Service";
import connectivity from "../images/connectivity.png";
import pc from "../images/pc.png";
import performance from "../images/performance.png"

export default function About() {
  return (
    <div className="flex flex-col items-center bg-BLACK px-10 gap-y-12 py-10 mt-0 flex-1">
      <h1 className="text-2xl text-white font-bold">About Me</h1>
      <p className="text-gray-200 font-light max-w-5xl text-center">
        I am a hardworking frontend developer who has acquired extensive
        knowledge in the field through many courses online and doing many
        projects. I am proficient in HTML, CSS, Tailwind CSS, JavaScript,
        TypeScript, React and Redux Toolkit. I can also review an existing code
        and can consult with you on how to improve it.
      </p>
      <h1 className="text-white font-bold text-3xl mt-10 ">Services I offer</h1>
      <div className="flex flex-col gap-14 items-stretch lg:flex-row">
        <Service
          title="Responsive & User-friendly website"
          desc="I can transform your design into a perfectly responsive and hooking website, encouraging users to stay longer and boosting your conversion rate."
          color="yellow-200"
          image={pc}
        />
        <Service
          title="Performance Optimization"
          color="green-400"
          desc="improving page load times and site's speed by employing techniques such as image optimization, code minification, and caching. A faster website not only improves user satisfaction but also positively impacts search engine rankings."
          image={performance}
        />
        <Service
          title="Database Integration"
          color="purple-400"
          desc="Managing your website's database and connecting to the server-side to create a fully integrated and dynamic website."
          image={connectivity}
        />
        {/* bg-yellow-200
        bg-green-400
        bg-purple-400 */}
      </div>
    </div>
  );
}
