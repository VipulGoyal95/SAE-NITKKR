// import './Hero.css';
export default function Herosection() {
    return <section>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-12 pt-31 px-4 md:px-10">
        <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
          <h1 className="text-6xl md:text-8xl font-[800] mb-4 uppercase">
            THANK<br/>
            YOU<br/>
            SENIORS
          </h1>
          <p className="text-lg opacity-70 uppercase tracking-wider">w e&nbsp;&nbsp;a l l&nbsp;&nbsp;M i s s&nbsp;&nbsp;Y o u</p>
        </div>
        <div className="w-full md:w-[55%]">
          <img src="/assets/images/saeunitydrive/image.png" alt="Thank You Seniors" className="w-full h-auto rounded-lg shadow-xl" />
        </div>
      </section>
      <section className=" text-white py-24 px-4 md:px-16 flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">POWERING INNOVATION, DRIVEN BY ALUMNI</h2>
          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8 max-w-xl">Join hands with SAE NIT Kurukshetra and accelerate our journey in building cutting-edge EV and CV projects. Your support fuels our dreams!</p>
          <a href="#" className="inline-block px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5">Fund Now</a>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-12">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">4627+</div>
            <div className="text-sm opacity-70 uppercase tracking-wider">TOTAL FUND</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">24<span className="text-3xl">K</span></div>
            <div className="text-sm opacity-70 uppercase tracking-wider">TOTAL FUND</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">100</div>
            <div className="text-sm opacity-70 uppercase tracking-wider">ALL ALUMNI</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50</div>
            <div className="text-sm opacity-70 uppercase tracking-wider">TEAM MEMBERS</div>
          </div>
        </div>
      </section>
    </section>
}