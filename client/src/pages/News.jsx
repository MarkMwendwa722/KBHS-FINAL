import { FaRegCalendarAlt } from "react-icons/fa";
import about from "../assets/aboutImage.jpg";
import art from "../assets/art.jpg";

const Card = ({ title, content, date, img }) => {
  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-hidden">
        <img src={img} alt="news" className="object-cover h-full w-full object-top"/>
      </div>
      <div className="flex-1 bg-custom-gray">
        <h3 className="text-custom-green p-4 pt-2">{title}</h3>
        <p className="p-4 pt-0">{content}</p>
        <span className="flex gap-1 items-center p-4 pt-0"><FaRegCalendarAlt />{date}</span>
      </div>
    </div>
  );
};

function News() {
  const latestNews = [
    {
      id: 1,
      img:art,
      title: "KBHS Students Excel in Science Fair",
      content:
        "Our students excelled at the State Science Fair, winning top honors for their innovative projects. Their success highlights KBHS's strong focus on STEM education and critical thinking.",
        date:'2 days ago'
    },
    {
      id: 2,
      img:art,
      title: "KBHS Students Excel in Science Fair",
      content:
        "Our students excelled at the State Science Fair, winning top honors for their innovative projects. Their success highlights KBHS's strong focus on STEM education and critical thinking.",
        date:'2 days ago'
    },
    {
      id: 3,
      img:art,
      title: "KBHS Students Excel in Science Fair",
      content:
        "Our students excelled at the State Science Fair, winning top honors for their innovative projects. Their success highlights KBHS's strong focus on STEM education and critical thinking.",
        date:'2 days ago'
    },
  ];
  const eventNews = [
    {
      id: 1,
      img:'https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg?crop=0.668xw:1.00xh;0.0714xw,0&resize=640:*',
      title: "Track star shines",
      content:
        "Our track athlete broke the school record, winning gold in the 100m sprint with an impressive time.",
        date:'2 days ago'
    },
    {
      id: 2,
      img:'https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg?crop=0.668xw:1.00xh;0.0714xw,0&resize=640:*',
      title: "Track star shines",
      content:
        "Our track athlete broke the school record, winning gold in the 100m sprint with an impressive time.",
        date:'2 days ago'
    },
    {
      id: 3,
      img:'https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg?crop=0.668xw:1.00xh;0.0714xw,0&resize=640:*',
      title: "Track star shines",
      content:
        "Our track athlete broke the school record, winning gold in the 100m sprint with an impressive time.",
        date:'2 days ago'
    },
   
  ];
  const studentNews = [
    {
      id: 1,
      img:"https://jis.gov.jm/wp-content/cache/thumbnails/2024/08/AWP_7474-1200x825-c.jpg?v=1723233165",
      title: "Debate team success",
      content:
        "The KBHS debate team won first place in a regional competition, showcasing outstanding argumentation and teamwork.",
        date:'2 days ago'
    },
    {
      id: 2,
      img:"https://jis.gov.jm/wp-content/cache/thumbnails/2024/08/AWP_7474-1200x825-c.jpg?v=1723233165",
      title: "Debate team success",
      content:
        "The KBHS debate team won first place in a regional competition, showcasing outstanding argumentation and teamwork.",
        date:'2 days ago'
    },
    {
      id: 3,
      img:"https://jis.gov.jm/wp-content/cache/thumbnails/2024/08/AWP_7474-1200x825-c.jpg?v=1723233165",
      title: "Debate team success",
      content:
        "The KBHS debate team won first place in a regional competition, showcasing outstanding argumentation and teamwork.",
        date:'2 days ago'
    },
    
  ];
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${about})` }}
        className="bg-cover bg-center bg-fixed h-[90vh] relative"
      >
        <span className="absolute bottom-10 left-5 sm:left-10 md:left-20 text-white text-3xl font-semibold">
          News & Events
        </span>
      </div>
      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20">
        <div
          style={{ backgroundImage: `url(${about})` }}
          className="bg-cover bg-center h-[30vh] md:h-[40vh] lg:h-[60vh] relative my-12"
        >
          <div className="overlay"></div>
          <p className="absolute bottom-2 md:bottom-5 lg:bottom-10 left-5 sm:left-8 md:left-10 lg:left-20 text-white">
            <span className="text-xl md:text-3xl font-semibold block">
              KBHS TEAM MAKES IT TO THE FINALES
            </span>
            <span className="block text-sm sm:text-base">
              KBHS students showcase an outstanding performance
            </span>
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-center text-2xl">Latest <span className="text-custom-green">News</span> </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {latestNews.map((card) => (
              <Card key={card.id} img={card.img} title={card.title} content={card.content} date={card.date} />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-center text-2xl">Event <span className="text-custom-green">News</span> </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {eventNews.map((card) => (
              <Card key={card.id} img={card.img} title={card.title} content={card.content} date={card.date} />
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-center text-2xl">Students <span className="text-custom-green">News</span> </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {studentNews.map((card) => (
              <Card key={card.id} img={card.img} title={card.title} content={card.content} date={card.date} />
            ))}
          </div>
        </div>        
      </div>
    </div>
  );
}

export default News;
