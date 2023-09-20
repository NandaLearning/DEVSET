export default function NextCards(){
    return(
        <div onClick={()=>document.getElementById('my_modal_4').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border border-black hover:bg-gray-400">
            <div className="flex justify-center items-center mt-12">
            <img src="next.png" className=" w-32" />
            </div>




            <dialog id="my_modal_4" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Next Js</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>npx create-next-app@latest</code></pre>
  <pre data-prefix="$"><code>cd create-next-app</code></pre>
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