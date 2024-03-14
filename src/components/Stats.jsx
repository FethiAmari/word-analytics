function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="words" />
      <Stat number={stats.numberOfCharacter} label="characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharacterleft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <p className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</p>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;

