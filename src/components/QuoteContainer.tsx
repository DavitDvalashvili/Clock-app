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
    randomQuote()
  }, [refreshCount] );


  return (
    <div className="quote-container">
      <div>
      {Quote && <p>{Quote.content}</p>}
      <img src="./assets/images/icon-refresh.svg" alt="refresh" onClick={() => {
        setRefreshCount(refreshCount+1);
      }}/>
      </div>
      {Quote && <h2>{Quote.author}</h2>}
        
    </div>
  );
};

export default QuoteContainer;
