import crackImage from "../assests/crack.jpg"
import dampimage from "../assests/damp.jpg"
export default function DasboardPage(){
    return (
        <> <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12" style={{backgroundColor:"grey"}}> <div className="flex items-center justify-around">
        
        <div className="flex items-center">
          <button>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img 
                    alt=""
                    // style={{height:"100%"}}
                    src={crackImage} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">CRACK</div>
  </div>
  
</div>
          </button>
        </div>

        <div className="flex items-center">
          <button>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img 
                    alt=""
                    // style={{height:"100%"}}
                    src={dampimage} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-center">DAMP</div>
  </div>
  
</div>
          </button>
        </div>
      </div></div>
        
        </>
      );
}