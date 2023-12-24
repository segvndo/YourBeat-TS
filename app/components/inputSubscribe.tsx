export default function Subscribe() {
  return (
    <div>
      <div className="flex justify-center items-center">
            <input className="h-10 mt-4 pl-2 text-black" type="text" placeholder="Email Address" />
          </div>

          <div className="flex justify-center items-center mt-3">
            <Button>Subscribe</Button>
          </div>
    </div>
  )
};