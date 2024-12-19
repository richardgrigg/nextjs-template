

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">

{/*
      <div className="flex flex-row">
        <div className="row-span-2 self-center">9:00</div>
        <div className="grid grid-cols-2">
          <div className="col-span-2">Court 3</div>
          <div className="grid grid-cols-2">
            <div>
              <p>Pair 1</p>
              <div>Player1</div>
              <div>Player3</div>
            </div>
            <div>
              <p>Pair 2</p>
              <div>Player2</div>
              <div>Player4</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-2">Court 4</div>
          <div className="">
            <div>Pair 1</div>
            <div>Pair 2</div>
          </div>
        </div>

      </div>
*/}

      {/* Session Schedule */}
      <div className="border-2 border-sky-500 court-schedule grid grid-cols-5 text-black">
        <div className="row-span-4 content-center bg-gray-300">
          9:30
        </div>
        <div className="col-span-2 bg-gray-300">
          Court 1
        </div>
        <div className="col-span-2 bg-gray-300">
          Court 2
        </div>

        <div className="bg-gray-300">Pair 1</div>
        <div className="bg-gray-300">Pair 2</div>
        <div className="bg-gray-300">Pair 1</div>
        <div className="bg-gray-300">Pair 2</div>


        <div className="bg-white">Person 3.1.1</div>
        <div className="bg-white">Person 3.2.1</div>
        <div className="bg-white">Person 4.1.1</div>
        <div className="bg-white">Person 4.2.1</div>

        <div className="bg-white">Person 3.1.2</div>
        <div className="bg-white">Person 3.2.2</div>
        <div className="bg-white">Person 4.1.2</div>
        <div className="bg-white">Person 4.2.2</div>
      </div>

      {/* Session Schedule */}
      <div className="border-2 border-sky-500 court-schedule grid grid-cols-5 text-black">
        <div className="grid row-span-4 content-center bg-gray-300">
          10:00
        </div>
        <div className="grid col-span-2 bg-gray-300">
          Court 3
        </div>
        <div className="grid col-span-2 bg-gray-300">
          Court 4
        </div>

        <div className="grid bg-gray-300">Pair 1</div>
        <div className="grid bg-gray-300">Pair 2</div>
        <div className="grid bg-gray-300">Pair 1</div>
        <div className="grid bg-gray-300">Pair 2</div>

        <div className="grid bg-white">Person 3.1.1</div>
        <div className="grid bg-white">Person 3.2.1</div>
        <div className="grid bg-white">Person 4.1.1</div>
        <div className="grid bg-white">Person 4.2.1</div>

        <div className="grid bg-white">Person 3.1.2</div>
        <div className="grid bg-white">Person 3.2.2</div>
        <div className="grid bg-white">Person 4.1.2</div>
        <div className="grid bg-white">Person 4.2.2</div>
      </div>


    </main>
  );
}
