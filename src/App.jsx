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
    console.log(redTokenPerRow);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setBlueTokenNo(0);
    setBlueTokenPrefix("");
    setBlueTokenPerRow(0);
    setRedTokenNo(0);
    setRedTokenPrefix("");
    setRedTokenPerRow(0);
    setShowTokens(false);

    document.getElementById("blue_tkn_no").value = "";
    document.getElementById("blue_tkn_prefix").value = "";
    document.getElementById("blue_tkn_row").value = "";
    document.getElementById("red_tkn_no").value = "";
    document.getElementById("red_tkn_prefix").value = "";
    document.getElementById("red_tkn_row").value = "";

  };

  return (
    <main className="w-screen h-screen">
      <header className="my-5 mx-auto">
        <h2 className="text-red-600">Token Generator Application</h2>
      </header>
      <section className="generatorform">
        <form className="w-[50vw] " onSubmit={(e) => handleGenerate(e)}>
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
            <button
              onClick={(e) => handleClear(e)}
              type="reset"
              value={"reset"}
              className="col-span-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Clear
            </button>
          </div>
        </form>
      </section>
      <section className="w-[100vw] flex">
        <div className="col-span-1 w-[25%]"></div>{" "}
        {/*leaving empty space at start*/}
        <div className="col-span-3 w-[75%]">
          <div
            className={`grid gap-2 mb-5 `}
            style={{ gridTemplateColumns: `repeat(${blueTokenPerRow}, 1fr)` }}
          >
            {showTokens &&
              Array.from({ length: blueTokenNo }, (v, i) => i + 1).map(
                (v, i) => {
                  return (
                    <p
                      key={i}
                      className="border-2 border-black text-center py-5
              whitespace-nowrap col-span-1
               bg-blue-700"
                    >
                      {blueTokenPrefix + v}
                    </p>
                  );
                }
              )}
          </div>
          <div
            className={`grid gap-2 `}
            style={{ gridTemplateColumns: `repeat(${redTokenPerRow}, 1fr)` }}
          >
            {showTokens &&
              Array.from({ length: redTokenNo }, (v, i) => i + 1).map(
                (v, i) => {
                  return (
                    <p
                      key={i}
                      className="border-2 border-black  whitespace-nowrap py-5 text-center col-span-1 bg-red-700"
                    >
                      {redTokenPrefix + v}
                    </p>
                  );
                }
              )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
