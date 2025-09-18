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
    <div className="font-sans">
    
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
   
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-stone-200 text-center md:text-left">
          Sector Strength Comparison
        </h1>

       
        <div className="bg-[#1f2128] rounded-xl p-6 md:p-8 text-white">
          
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-y-8 gap-x-4">
            
           
            <div className="hidden md:block text-xs text-stone-500 tracking-widest">
              SECTOR COMPARISON
            </div>
            <div className="hidden md:block text-xs text-stone-500 tracking-widest text-center">
              SCORE
            </div>
            <div className="hidden md:block text-xs text-stone-500 tracking-widest text-center">
              RSI
            </div>
            <div className="hidden md:block text-xs text-stone-500 tracking-widest text-center">
              VOLUME
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#f66700] font-serif">
                {metalData.name}
              </h3>
              <p className="text-xs text-[#f66700] mt-2">
                {metalData.companies.join(" | ")}
              </p>
            </div>

           
            <div className="text-center">
              <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">SCORE</p>
              <p className="text-3xl md:text-4xl font-semibold text-[#f66700]">
                {metalData.score.toFixed(1)}
              </p>
            </div>

           
            <div className="text-center">
              <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">RSI</p>
              <p className="text-3xl md:text-4xl font-semibold text-[#f66700]">
                {metalData.rsi}
              </p>
              <p className="text-sm text-[#f66700] mt-1">{metalData.rsi_label}</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-center">
              <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">VOLUME</p>
              <p className="text-3xl md:text-4xl font-semibold text-[#f66700]">
                {metalData.volume}
              </p>
            </div>

           
            <div className="col-span-2 md:col-span-4 py-2 text-stone-600 text-lg tracking-widest text-center">
              VS
            </div>

           
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-stone-300 font-serif">
                {consumerData.name}
              </h3>
              <p className="text-xs text-stone-500 mt-2 tracking-wider">
                {consumerData.companies.join(" | ")}
              </p>
            </div>

            
            <div className="text-center">
                <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">SCORE</p>
              <p className="text-3xl md:text-4xl font-semibold text-stone-300">
                {consumerData.score.toFixed(1)}
              </p>
            </div>

            
            <div className="text-center">
                <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">RSI</p>
              <p className="text-3xl md:text-4xl font-semibold text-stone-300">
                {consumerData.rsi}
              </p>
              <p className="text-sm text-stone-400 mt-1">
                {consumerData.rsi_label}
              </p>
            </div>

            
            <div className="col-span-2 md:col-span-1 text-center">
                <p className="md:hidden text-xs text-stone-500 tracking-widest mb-2">VOLUME</p>
              <p className="text-3xl md:text-4xl font-semibold text-stone-300">
                {consumerData.volume}
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}