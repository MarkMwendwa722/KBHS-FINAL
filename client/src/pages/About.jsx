import about from "../assets/About.JPG";
import Headteacher from "../assets/Headteacher.JPG";
import Deputy from "../assets/Deputy.JPG";
import History from "../assets/History.JPG";
function About() {
  return (
    <div>
      <div style={{backgroundImage:`url(${about})`}} className="bg-cover bg-center bg-fixed h-[90vh] relative">
        {/* <img
          src={about}
          alt="about us banner"
          className="h-[100%] w-screen object-cover object-bottom"
        /> */}
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          About Us
        </span>
      </div>
      <div className="max-w-xl m-auto space-y-10 my-20">
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-2xl">OUR MISSION</h2>
          <p>
            KBHS High School aims to provide a supportive and challenging
            environment that fosters academic excellence, personal integrity,
            and global citizenship. We are dedicated to nurturing lifelong
            learners and critical thinkers who are prepared for a dynamic
            future.
          </p>
        </div>
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-2xl">OUR VISION</h2>
          <p>
            Our vision is to be a top educational institution in Kenya, known
            for academic excellence and holistic development. We strive to
            inspire students to be passionate learners and responsible leaders
            who positively impact their communities.
          </p>
        </div>
      </div>
      <div>
        <div className="h-[30vh] relative">
          <img
            src={History}
            alt="our history banner"
            className="h-[100%] w-screen object-cover object-center"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold">
            OUR HISTORY
          </span>
        </div>
        <div className="my-20 mx-40 space-y-10">
          <p>
            KBHS High School, founded in [Year], has a rich history of academic
            excellence and community involvement in Kenya. Onginally established
            to provide quality education to the local community, the school has
            grown over the years to become a leading institution recognized for
            its commitment to holistic development and innovation. The school
            began with a modest number of of its student body. Over the decades,
            KBHS nas facilities dent body. students and staff but quickly
            expanded its facilities and programs introduced to meet the advanced
            academic curricula, state-of-the-art science growing needs modern
            and a wide range of extracurricular activities, ensuring a
            well-rounded education for its KBHS High School nas consistently
            produced graduates who excel in students various fields,
            contributing significantly to both local and global communities. The
            school remains dedicated to fostering a nurturing ing and and
            challenging challenging environment, environmen preparing students
            for the dynamic challenges of the fature while upholding the values
            of integrity, respect, and excellence.
          </p>
          <p>
            KBHS High School, founded in [Year], has a rich nistory of academic
            excellence and and community involvement in established to provide
            quality education to the local local community, community, the
            school has grown over the years recognized for its commitment to to
            holistic development and innovation. Kenya Originally to become a
            leading institution The school began with a modest number of
            students and staff but quickly expanded its facilities and programs
            to meet the growing needs Um shadent body. Over the decades, KBHS
            cilities, and a wide range of nas introduced advanced academi ic
            curricula, state-of-the-ar extracumcular activities, ensuring a d a
            well-rounded education for is Students who excel in KBHS High School
            nas consistently produced graduates who excel in communities. The
            school remains dedicated to various fields, contributing
            significantly to both local and global fostering a nurturing and
            challenging environment, preparing challenges of the future while
            upholding the values of integrity, respect, and excellence.
          </p>
        </div>
      </div>
      <div>
        <div className="h-[30vh] relative">
          <img
            src="https://www.myhrtoolkit.com/hubfs/time-managers-spend-developing-employees.jpg"
            alt="our history banner"
            className="h-[100%] w-screen object-cover object-bottom"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold">
            OUR MANAGEMENT
          </span>
        </div>
        <div className="my-20 mx-40 flex justify-center h-[500px] gap-5">
            <div className="relative">
                <img src={Headteacher} alt="head teacher" className="h-[100%] object-cover w-[400px]" />
                <div className="absolute bottom-5 bg-[#FFFDD0] w-full py-4 text-center flex flex-col gap-1 font-bold">
                    <span>MR. G.M. BARASA</span>
                    <span className="text-xs font-normal">SCHOOL PRINCIPAL</span>
                </div>
            </div>
            <div className="relative">
                <img src={Deputy} alt="deputy teacher" className="h-[100%] object-cover w-[400px]"/>
                <div className="absolute bottom-5 bg-[#FFFDD0] w-full py-4 text-center flex flex-col gap-1 font-bold">
                    <span>MR JUSTUS MUKWANGACHI</span>
                    <span className="text-xs font-normal">SCHOOL DEPUTY PRINCIPAL</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
