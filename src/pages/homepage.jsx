import React, { useState } from "react";
import Card from "../components/card/card";
import { data } from "../data";
const Homepage = () => {
  const [research, setResearch] = useState("");

  const handleResearch = (e) => {
    setResearch(e.target.value);
  };

  return (
    <section className=" mt-10 max-w-[1920px] m-auto">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search"
          onChange={handleResearch}
          className="input input-bordered w-full max-w-xs bg-white text-black"
        />
      </div>

      {data
        .filter((item) => {
          const title_low = item.title.toLocaleLowerCase();
          const research_low = research.toLocaleLowerCase();
          if (title_low.includes(research_low)) {
            return true;
          }
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <h1 className="normal-case text-4xl p-4"> {item.title} </h1>
              <div className="flex flex-wrap gap-5 justify-start ml-14">
                {item.techno.map((techno) => {
                  return <Card data={techno} key={techno.id} />;
                })}
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Homepage;
