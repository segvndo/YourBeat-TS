'use client';
import Button from '@/app/components/button';

const Subscribe: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
            <input className="h-10 mt-4 pl-2 text-black" type="text" placeholder="Email Address" />
          </div>

          <div className="flex justify-center items-center mt-3">
            <Button variant="green">Subscribe</Button>
          </div>
    </div>
  )
};

export default Subscribe;