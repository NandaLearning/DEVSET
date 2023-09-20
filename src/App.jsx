import GinCards from "./allcards/GinCards";
import LaravelCards from "./allcards/LaravelCards";
import NestCards from "./allcards/NestCards";
import NextCards from "./allcards/NextCards";
import ReactCards from "./allcards/ReactCards";
import VueCards from "./allcards/VueCards";


export default function App() {
  return (
    <div className="grid justify-center items-center">
      {/* Pembuka */}
      <div className="grid justify-center items-center">
        <h1 className="text-6xl font-bold mt-7">
          <a href="">DEV <span className="hover:text-blue-500 duration-200">SET✨</span></a>
        </h1>
        <p className="text-2xl font-bold mt-5">Starter Kit For Your Project</p>
        <div className=" justify-center items-center flex mr-5 mt-5">
        <a href="https://github.com/NandaLearning"><svg className="" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
        </div>     
      </div>
      {/* Akhir Pembuka */}

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-10">
        <ReactCards/>
        <LaravelCards/>
        <NestCards/>
        <GinCards/>
        <VueCards/>
        <NextCards/>
        

      </div>
      {/* Akhir Content */}


      {/* Footer */}
      <div className=" grid justify-center items-center mt-24 text-3xl font-bold">
        <h1 className=" text-center">Give FeedBack on Email</h1>


        <input type="text" name="" className="bg-white border border-slate-500 duration-200 mt-5 rounded-lg w-80 " placeholder="give your message" />
        <div className="flex justify-center items-center mr-4">
        <button className=" hover:bg-green-500 duration-200 border border-black w-32 flex justify-center mt-5"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg></a></button>
</div>
      </div>


    </div>
  );
}
