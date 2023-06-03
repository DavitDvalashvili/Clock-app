import { useEffect, useState } from "react";
import axios from "axios";

const QuoteContainer = () => {
  interface QuoteType {
    content: string;
    author: string;
  }

  const [refreshCount, setRefreshCount] = useState<number>(0);
  const [Quote, setQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    const randomQuote = async () => {
      const response = await axios.get(
        "https://api.quotable.io/quotes/random?tags=technology,famous-quotes"
      );
      const data = await response.data;
      setQuote(data[0]);
    };
    randomQuote();
  }, [refreshCount]);

  return (
    <div className="text-3 leading-[22px] md:leading-[28px] md:text-[18px] text-white h-[140px] mb-[160px] 
    md:mb-[373px] lg:mb-[218px] max-w-[573px] ">
      <div className="flex justify-start items-start gap-[16.67px] font-normal" >
        {Quote && <p className="">"{Quote.content}"</p>}
        <img
          src="./assets/images/icon-refresh.svg"
          alt="refresh"
          className="refresh cursor-pointer"
          onClick={() => {
            setRefreshCount(refreshCount + 1);
          }}
        />
      </div>
      {Quote && <h2 className="mt-2 font-bold 
      ">{Quote.author}</h2>}
    </div>
  );
};

export default QuoteContainer;
