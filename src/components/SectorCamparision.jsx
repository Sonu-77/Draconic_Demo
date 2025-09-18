export default function SectorComparison() {
 
  const metalData = {
    name: "Metal",
    companies: ["NATIONALUM", "TATASTEEL", "JINDALSTEL"],
    score: 74.1,
    rsi: 66,
    rsi_label: "High",
    volume: "1.9x",
  };
 
  const consumerData = {
    name: "Consumer",
    companies: ["BATAINDIA", "NYKAA", "JUBLFOOD"],
    score: 69.8,
    rsi: 50,
    rsi_label: "Neutral",
    volume: "2.1x",
  };
 
  return (
    <div className="  font-sans">
      <div className="max-w-7xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 text-stone-200">Sector Strength Comparison</h1>
       
        <div className="bg-[#1f2128] rounded-xl p-8 text-white">
 
          <div className="grid grid-cols-4 items-center gap-y-6">
 
            <div className="text-xs text-stone-500 tracking-widest">SECTOR COMPARISON</div>
            <div className="text-xs text-stone-500 tracking-widest text-center">SCORE</div>
            <div className="text-xs text-stone-500 tracking-widest text-center">RSI</div>
            <div className="text-xs text-stone-500 tracking-widest text-center">VOLUME</div>
 
          {/* orange row*/}
            <div>
              <h3 className="text-3xl font-semibold text-[#f66700] font-serif">{metalData.name}</h3>
              <p className="text-xs text-[#f66700] mt-2 ">
                {metalData.companies.join(' | ')}
              </p>
            </div>
           
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#f66700]">{metalData.score.toFixed(1)}</p>
            </div>
           
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#f66700]">{metalData.rsi}</p>
              <p className="text-sm text-[#f66700] mt-1">{metalData.rsi_label}</p>
            </div>
           
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#f66700]">{metalData.volume}</p>
            </div>
 
          {/* vs */}
            <div className="col-span-4 py-2 text-stone-600 text-2px tracking-widest">VS</div>
           
 
            {/* white row */}
            <div>
              <h3 className="text-3xl font-semibold text-stone-300 font-serif">{consumerData.name}</h3>
              <p className="text-xs text-stone-500 mt-2 tracking-wider">
                {consumerData.companies.join(' | ')}
              </p>
            </div>
           
            <div className="text-center">
              <p className="text-4xl font-semibold text-stone-300">{consumerData.score.toFixed(1)}</p>
            </div>
       
            <div className="text-center">
              <p className="text-4xl font-semibold text-stone-300">{consumerData.rsi}</p>
              <p className="text-sm text-stone-400 mt-1">{consumerData.rsi_label}</p>
            </div>
       
            <div className="text-center">
              <p className="text-4xl font-semibold text-stone-300">{consumerData.volume}</p>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  );
}
 