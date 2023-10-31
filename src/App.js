import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState("Your quote here");
  async function fetchQuote() {
    let timestamp = Date.now();
    try {
      let res = await fetch(`https://api.adviceslip.com/advice?timestamp=${timestamp}`)
      const data = await res.json();
      setQuote(data.slip.advice);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='py-40'>
      <Content quote={quote} />
      <Button onClick={fetchQuote} />
    </div>
  );
}

function AppIcon() {
  return (
    <div className="shrink-0">
      <img className="h-12 w-12 rounded-xl" src="./20857307.jpg" alt="" />
    </div>
  );
}

function Content(props) {
  return (
    <div className="py-10 px-5 max-w-sm mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-xl flex items-center space-x-4 font-sans text-left">
      <AppIcon />
      <div className="items-center  hover:font-semibold">
        <div className="text-xl font-medium text-white">Daily Quotes</div>
        <p className="text-slate-800" id="quote">
          {props.quote}
        </p>
      </div>
    </div>
  );
}

function Button({ onClick }) {
  return (
    <div className="py-10 px-10 text-center">
      <button
        className="border px-4 py-1 border-blue-300 rounded-md hover:bg-sky-600 hover:text-slate-100 hover:font-semibold shadow-lg"
        id="btn"
        onClick={onClick}
      >
        Get a quote
      </button>
    </div>
  );
}

export default App;
