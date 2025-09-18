// import { sectorData } from "../src/data/sectordata";
 
export default function SectorOverview({ highlights, infrastructure, itServices, financial, banking, pharma }) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-stone-200">Sector Strength Overview</h1>
 
      <div className="rounded-xl overflow-hidden">
       
        <div className="grid grid-cols-1 md:grid-cols-5">
 
          {/* LEFT COLUMN */}
          <div className="md:col-span-3 flex flex-col ">
           
            {/* Sector Card */}
            <div
              style={{ backgroundColor: '#181717' }}
              className="p-5 "
            >
              <h2 className="text-4xl font-semibold mb-30 text-stone-300">
                {highlights?.title}
              </h2>
              <p className="text-xs text-stone-400 font-medium mb-2">TOP PERFORMERS</p>
              <p className="text-lg text-stone-300 font-medium">{highlights?.performers}</p>
            </div>
 
            {/* Infrastructure Card */}
            <div
              style={{ backgroundColor: '#50301a' }}
              className="p-5 flex flex-col justify-between h-full "
            >
             
              <div>
                {infrastructure?.stats.map((line, index) => (
                  <p key={index} className="text-sm font-medium text-amber-300">
                    {line}
                  </p>
                ))}
              </div>
             
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-3xl font-semibold text-amber-400">
                  {infrastructure?.name}
                </h3>
                <p className="text-sm text-stone-300 whitespace-nowrap">
                  Score {infrastructure?.score.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
 
         
          <div className="md:col-span-2 grid grid-rows-3">
 
            {/* IT Services Card */}
            <div
              style={{ backgroundColor: '#282823' }}
              className="p-5 flex flex-col justify-between h-full mb-15"
            >
              <div>
                {itServices?.stats.map((line, index) => (
                  <p key={index} className="text-xs text-stone-400 font-medium leading-snug">
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-2xl font-semibold text-stone-300">{itServices?.name}</h3>
                <p className="text-sm text-stone-400 whitespace-nowrap">
                  Score {itServices?.score.toFixed(2)}
                </p>
              </div>
            </div>
 
            {/* Financial Card */}
            <div
              style={{ backgroundColor: '#28231e' }}
              className="p-5 flex flex-col justify-between h-full"
            >
              <div>
                {financial?.stats.map((line, index) => (
                  <p key={index} className="text-xs text-stone-400 font-medium leading-snug">
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex justify-between items-baseline mt-2">
                <h3 className="text-2xl font-semibold text-stone-300">{financial?.name}</h3>
                <p className="text-sm text-stone-400 whitespace-nowrap">
                  Score {financial?.score.toFixed(2)}
                </p>
              </div>
            </div>
           
            {/* Banking and Pharma Cards */}
            <div className="grid grid-cols-2">
              {/* Banking Card */}
              <div
                style={{ backgroundColor: '#272020' }}
                className="p-5 flex flex-col justify-between h-full"
              >
                <div>
                  {banking?.stats.map((line, index) => (
                    <p key={index} className="text-xs text-stone-400 font-medium leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col justify-between items-baseline mt-2">
                  <h3 className="text-2xl font-semibold text-stone-300">{banking?.name}</h3>
                  <p className="text-sm text-stone-400 whitespace-nowrap">
                    Score {banking?.score.toFixed(2)}
                  </p>
                </div>
              </div>
              {/* Pharma Card */}
              <div
                style={{ backgroundColor: '#272020' }}
                className="p-5 flex flex-col justify-between h-full"
              >
                <div>
                  {pharma?.stats.map((line, index) => (
                    <p key={index} className="text-xs text-stone-400 font-medium leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col justify-between items-baseline mt-2">
                  <h3 className="text-2xl font-semibold text-stone-300">{pharma?.name}</h3>
                  <p className="text-sm text-stone-400 whitespace-nowrap">
                    Score {pharma?.score.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 