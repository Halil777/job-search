// Imported icons from React Icons
import { BiTimeFive } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";

const Data = [
  {
    id: 1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    title: "Designer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 3,
    title: "FullStack",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 4,
    title: "Backend",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 5,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 6,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 7,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
  {
    id: 8,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a sed totam soluta ipsum at laudantium impedit consequuntur eos,",
    company: "Novac Linus Co.",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, time, location, desc, company }) => {
          return (
            <div
              key={`data_key${id}`}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg "
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center gap-2 text-[#ccc]">
                  <BiTimeFive /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2 pt-2">
                <AiFillYoutube style={{ background: "red", color: "red" }} />
                <span className="text-[14px] py=[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] mt-3 rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
