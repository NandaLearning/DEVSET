export default function NestCards(){
    return(
        <div onClick={()=>document.getElementById('my_modal_2').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border border-black hover:bg-pink-200">
            <div className="flex justify-center items-center mt-7">
            <img src="nest.png" className=" w-32" />
            </div>



            <dialog id="my_modal_2" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Nest Js</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>npm i -g @nestjs/cli</code></pre>
  <pre data-prefix="$"><code>nest new project-name</code></pre>
  <pre data-prefix="$"><code>cd project-name</code></pre>
  <pre data-prefix="$"><code>npm run start</code></pre>
</div>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn bg-black text-white">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    )
}