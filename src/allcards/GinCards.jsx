export default function GinCards(){
    
    return(
        <div onClick={()=>document.getElementById('my_modal_3').showModal()} className=" w-80 h-52 bg-white rounded-xl hover:drop-shadow-2xl duration-200 border border-black hover:bg-blue-300">
            <div className="flex justify-center items-center mt-7">
            <img src="gin.png" className=" w-52" />
            </div>



            <dialog id="my_modal_3" className="modal text-black">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Gin</h3>
    <div className="mockup-code mt-5">
  <pre data-prefix="$"><code>go get -u github.com/gin-gonic/gin</code></pre>
  <pre data-prefix="$"><code>go run main.go</code></pre>
  <pre data-prefix="!"><code>in your project GO to create this</code></pre>
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