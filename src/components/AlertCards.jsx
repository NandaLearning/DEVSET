export default function AlertCards() {
    return (
      <div className="relative w-96 h-96" id="alert">
        <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-black relative z-10">
          <div className="flex justify-end items-end text-black font-bold">
            <p className="text-3xl mr-7 mt-4">
              <a href="#App">X</a>
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl"></div>
      </div>
    );
  }
  