export default function TimerChallenge({ titile, targetTime }) {
  return (
    <section className="challenge">
      <h2>{titile}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p className="">Time is running... / Timer inactive</p>
    </section>
  );
}
