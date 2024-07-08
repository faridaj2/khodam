interface Khodam {
  nama: string;
  fungsi: string;
  asal: string;
  deskripsi: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import data from "../data/arrayData";

function Home() {
  const { arrayData } = new data();
  const [name, setName] = useState<string>();
  const [khodam, setKhodam] = useState<Khodam>();
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Cek Khodam";
  }, []);

  function getKhodamFromName(input: string): Khodam {
    let hash = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }

    const index = Math.abs(hash) % arrayData.length;
    return arrayData[index];
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setModal(true);
    setKhodam(getKhodamFromName(name));
  };

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="">
        <div className="text-center mb-5">Cek Khodam Spesial</div>
        <div>
          <div>
            <form
              action=""
              onSubmit={submitHandler}
              className="flex flex-col gap-2"
            >
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan Nama"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Chek Khodam
              </button>
            </form>
          </div>
          {modal && khodam && (
            <div className="w-full h-full absolute flex items-center justify-center left-0 top-0">
              <div className="bg-white w-1/2 h-1/2 rounded-lg shadow-md shadow-white text-black">
                <div className="flex justify-end p-3 ">
                  <button
                    className="text-black"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="flex items-center flex-col text-left gap-2">
                  <div>Nama: {khodam.nama}</div>
                  <div>Asal: {khodam.asal}</div>
                  <div>Deskripsi: {khodam.deskripsi}</div>
                  <div>Fungsi: {khodam.fungsi}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
