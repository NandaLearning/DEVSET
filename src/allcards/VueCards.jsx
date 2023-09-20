export default function VueCards(){
    return(
        <div onClick={()=>document.getElementById('my_modal_6').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border border-black hover:bg-green-200">
            <div className="flex justify-center items-center mt-16">
            <img src="vue.png" className=" w-36" />
            </div>




            <dialog id="my_modal_6" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Vue Js</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>npm create vue@latest</code></pre>
  <pre data-prefix="$"><code>npm install</code></pre>
  <pre data-prefix="$"><code>npm run dev</code></pre>
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