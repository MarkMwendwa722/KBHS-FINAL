import about from "../assets/Departments.JPG";

const departments = [
    {
        name: "Mathematics",
    },
    {
        name: "Languages",
    },
    {
        name: "Science",
    },
    {
        name: "Art",
    },
    {
        name: "Humanities",
    },
    {
        name: "Physical Education",
    }
]

function Departments() {
  return (
    <div>
         <div style={{backgroundImage:`url(${about})`}} className="bg-cover bg-center bg-fixed h-[90vh] relative">
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          Departments
        </span>
      </div>
      <div className="my-20 max-w-screen-lg m-auto">
        <div className="grid grid-cols-[200px] gap-4 sm:grid-cols-[200px_200px] md:grid-cols-[200px_200px_200px] justify-center">
          {departments.map((department, index) => (
            <div key={index} className="p-2 h-[200px] w-[80vw] sm:w-[200px] place-self-center place-content-center bg-custom-green rounded-lg relative">
              <h3 className="text-2xl text-white text-center">{department.name}</h3>
              <div className="size-8 bg-custom-yellow absolute -bottom-1 -right-1 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Departments