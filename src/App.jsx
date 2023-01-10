import { useState } from "react";

function App() {
  const [blueTokenNo, setBlueTokenNo] = useState(0);
  const [blueTokenPrefix, setBlueTokenPrefix] = useState("");
  const [blueTokenPerRow, setBlueTokenPerRow] = useState(0);
  const [redTokenNo, setRedTokenNo] = useState(0);
  const [redTokenPrefix, setRedTokenPrefix] = useState("");
  const [redTokenPerRow, setRedTokenPerRow] = useState(0);
  const [showTokens, setShowTokens] = useState(false);


  const handleGenerate = (e) => {
    e.preventDefault();
    setBlueTokenNo(e.target.blue_tkn_no.value);
    setBlueTokenPrefix(e.target.blue_tkn_prefix.value);
    setBlueTokenPerRow(e.target.blue_tkn_row.value);
    setRedTokenNo(e.target.red_tkn_no.value);
    setRedTokenPrefix(e.target.red_tkn_prefix.value);
    setRedTokenPerRow(e.target.red_tkn_row.value);
    setShowTokens(true);
    console.log(e.target.blue_tkn_no.value);

    console.log("Generate button clicked");
  };

  return (
    <main className="w-screen h-screen">
      <header className="my-5 mx-auto">
        <h2 className="text-red-600">Token Generator Application</h2>
      </header>
      <section className="generatorform">
        <form className="w-[50vw] " onSubmit={e => handleGenerate(e)}>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="blue_tkn_no"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Number of blue tokens
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="blue_tkn_no"
              id="blue_tkn_no"
            />
          </div>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="blue_tkn_prefix"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Blue token prefix
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="blue_tkn_prefix"
              id="blue_tkn_prefix"
            />
          </div>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="blue_tkn_row"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Blue token per row
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="blue_tkn_row"
              id="blue_tkn_row"
            />
          </div>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="red_tkn_no"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Number of red tokens
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="red_tkn_no"
              id="red_tkn_no"
            />
          </div>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="red_tkn_prefix"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Red token prefix
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="red_tkn_prefix"
              id="red_tkn_prefix"
            />
          </div>
          <div className="grid grid-cols-4 my-5">
            <label
              htmlFor="red_tkn_row"
              className=" col-span-2 flex flex-row-reverse mr-5"
            >
              Red token per row
            </label>
            <input
              type="text"
              className="border-black border-2"
              name="red_tkn_row"
              id="red_tkn_row"
            />
          </div>
          <div className="grid grid-cols-4 gap-1 my-5">
            <div className="col-span-2"></div>
            <button
              className="col-span-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Generate
            </button>
            <button onClick={() => setShowTokens(false)} className="col-span-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Clear
            </button>
          </div>
        </form>
      </section>
      <section className="w-[100vw] grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-3">
        <div className={`grid grid-cols-${blueTokenPerRow}`}>
          {
            showTokens && Array.from({length: blueTokenNo}, (v, i) => i + 1).map((v, i) => {
              return <p className="border-2 border-black p-5 
              whitespace-nowrap 
              col-span-1 bg-blue-700">{blueTokenPrefix + v}</p>
            }
            )
          }
        </div>
        <div className={`grid grid-cols-${redTokenPerRow}`}>
          {
            showTokens && Array.from({length: redTokenNo}, (v, i) => i + 1).map((v, i) => {
              return <div className="border-2 border-black  whitespace-nowrap p-5 col-span-1 bg-red-700">{redTokenPrefix + v}</div>
            }
            )
          }
        </div>
        </div>
      </section>
    </main>
  );
}

export default App;
