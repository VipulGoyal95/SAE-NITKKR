import "./profilecard.css"
import Image from "next/image"

const Profilecard = ({ member }) => {
  return (
    <div className="relative flex items-center justify-center flex-wrap">
      <div className="relative w-[300px] h-[400px] bg-gradient-to-b from-[#8a70fe] via-[#aa97ff] to-[#0f2131] m-2.5 rounded-2xl overflow-hidden group">
        <div className="imgBox absolute top-0 left-0 rounded-2xl origin-top w-full h-[400px] group-hover:translate-y-[20px] group-hover:scale-50 transition-transform duration-500">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-full flex justify-center items-end pb-7.5 transform translate-y-full group-hover:translate-y-0 transition duration-500 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex justify-center items-center flex-col text-center gap-1.25">
            <h2 className="text-white text-xl font-bold">
              {member.name} <br /> 
              <span className="text-sm font-normal">{member.metadata?.position1}</span>
              {member.metadata?.position2 && (
                <span className="text-sm font-normal block">{member.metadata.position2}</span>
              )}
            </h2>
            <p className="text-white/80 text-sm">{member.Department}</p>
            <p className="text-white/80 text-sm">{member.Team}</p>
            <ul className="relative flex gap-1.75 mt-1.25">
              {member.LinkedIn && (
                <li>
                  <a 
                    href={member.LinkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#22435c] flex justify-center items-center rounded-full text-white no-underline transition duration-500 hover:bg-[#7b66db] hover:rotate-360"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              )}
              {member.Email && member.Email !== "NA@gmail.com" && (
                <li>
                  <a 
                    href={`mailto:${member.Email}`}
                    className="w-10 h-10 bg-[#22435c] flex justify-center items-center rounded-full text-white no-underline transition duration-500 hover:bg-[#7b66db] hover:rotate-360"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </li>
              )}
              {member.github && (
                <li>
                  <a 
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#22435c] flex justify-center items-center rounded-full text-white no-underline transition duration-500 hover:bg-[#7b66db] hover:rotate-360"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profilecard
