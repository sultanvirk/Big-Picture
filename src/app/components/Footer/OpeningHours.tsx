const hours = [
  ["Monday", "7:30am-4:30pm"],
  ["Tuesday", "7:30am-4:30pm"],
  ["Wednesday", "7:30am-4:30pm"],
  ["Thursday", "7:30am-4:30pm"],
  ["Friday", "7:30am-4:30pm"],
  ["Saturday", "Closed"],
  ["Sunday", "Closed"],
] as const;

export default function OpeningHours() {
  return (
    <div className="mx-auto mt-4 max-w-[270px] border-t border-white/15 pt-3">
      <p className="text-xs font-semibold uppercase text-[#e4bb77]">Opening hours</p>
      <dl className="mt-3 space-y-2 text-[11px]">
        {hours.map(([day, time]) => (
          <div className="flex justify-between gap-3 text-lg" key={day}>
            <dt>{day}</dt>
            <dd className="text-white/80">{time}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-xs text-white/75">Closed on select Mondays or Fridays</p>
    </div>
  );
}
