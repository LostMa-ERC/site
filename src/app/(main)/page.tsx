import Links from "../(other)/about/components/links";


export default function HomePage() {
  return (
    <>
    <div>
      <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
        Welcome to LostMa
      </h1>
    </div>
  
    <div>
      <p className="font-light mt-2 tracking-wide">
          LostMa is a digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text&apos;s transmission.
      </p>
      <p className="font-light mt-2 tracking-wide">
          We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet&apos;s Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
      </p>
    </div>    
    <Links />
    </>
  );
}
