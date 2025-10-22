import { OrbitingCircles } from "./OrbitingCircles"
import { SKILLS } from "../constants/data";

export function Frameworks() {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {SKILLS.map((skill, index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {SKILLS.reverse().map((skill, index)=>(<Icon key={index} src={`assets/logos/${skill}.svg`}/>))}
      </OrbitingCircles>
    </div>
  )
}

const Icon = ({ src }) => {
  return (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
  )
}


