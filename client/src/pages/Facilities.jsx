import about from "../assets/Facilities.JPG";

const facilities = [
    {
        id: 1,
        title:'Classrooms',
        image1: 'https://qnextech.com/wp-content/uploads/2023/03/%E6%95%99%E5%AE%A4%E5%9C%BA%E6%99%AF-1024x559.jpg',
        image2: 'https://portablepartitions.com.au/wp-content/uploads/2022/05/flexible-classroom-design-indie-school.jpg',
        image3: 'https://www.rochester.edu/college/ecm/assets/images/slider/dewey_hall-l.jpg',
    },
    {
        id: 2,
        title:'Laboratories',
        image1: 'https://industrialtalks.wordpress.com/wp-content/uploads/2014/01/2.jpg',
        image2: 'https://www.grankriegel.com/wp-content/uploads/2014/08/prospect-heights-science-lab-580x482.jpg',
        image3: 'https://designcollaborative.com/wp-content/uploads/2024/02/11.16.22_066-scaled.webp',
    },
    {
        id: 3,
        title:'Dining',
        image1: 'https://i.shgcdn.com/573981e9-e1c8-4238-8256-c632ee25203b/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        image2: 'https://i.shgcdn.com/05c7daf9-0e4d-4f55-ae55-72dfabb44607/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        image3: 'https://i.shgcdn.com/a94cca2c-ed43-418a-b7d9-aa4ad084f66d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
        id: 4,
        title:'Sports',
        image1: 'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/newsandevents/news/2023/03/social-main.jpg',
        image2: 'https://lhsroar.com/wp-content/uploads/2015/12/10373593623_feaf5a6ac1_h.jpg',
        image3: 'https://www.seastar-swimschool.ch/wp-content/uploads/2024/04/start_schwimmschule2.jpg',
    },
 
]

function Facilities() {
  return (
    <div>
        <div style={{backgroundImage:`url(${about})`}} className="bg-cover bg-center bg-fixed h-[90vh] relative">
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          Facilities
        </span>
      </div>
      <div className="my-20 max-w-screen-lg m-auto">
        <div>
            {facilities.map(facility => (
                <div key={facility.id} className="my-10 space-y-3">
                    <h2 className="text-2xl">{facility.title}</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <img src={facility.image1} alt={facility.title} className="w-full h-[360px] object-cover"/>
                        </div>
                        <div>
                            <img src={facility.image2} alt={facility.title} className="w-full h-[360px] object-cover"/>
                        </div>
                        <div>
                            <img src={facility.image3} alt={facility.title} className="w-full h-[360px] object-cover"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>        
      </div>
    </div>
  )
}

export default Facilities