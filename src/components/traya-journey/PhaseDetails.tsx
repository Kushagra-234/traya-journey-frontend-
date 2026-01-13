type Phase = {
  label: string;
  title: string;
  points: string[];
};

type MonthImage = {
  month: number;
  imageFile: string;
};

type PhaseDetailsProps = {
  phase: Phase;
  selectedMonth: number;
  monthImages?: MonthImage[];
};

function PhaseDetails({
  phase,
  selectedMonth,
  monthImages,
}: PhaseDetailsProps) {
  const assetImages = import.meta.glob<string>("../../assets/images/*", {
    eager: true,
    import: "default",
  });

  const getAssetUrlByFile = (fileName?: string) => {
    if (!fileName) return undefined;
    const matchKey = Object.keys(assetImages).find((k) =>
      k.endsWith(`/${fileName}`)
    );
    return matchKey ? assetImages[matchKey] : undefined;
  };

  const monthFile = monthImages?.find(
    (m) => m.month === selectedMonth
  )?.imageFile;
  const monthImageUrl = getAssetUrlByFile(monthFile);

  return (
    <div className="w-full">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb339] mb-2 text-center">
        {phase.label}
      </p>
      <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
        {phase.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <ul className="space-y-3">
          {phase.points.map((point) => (
            <li key={point} className="flex items-start gap-4 text-slate-700">
              <span className="text-[#8fb339] text-lg">✓</span>
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center md:items-end">
          <div className="w-full max-w-xs h-32 sm:h-40 bg-white border border-slate-200 rounded-xl overflow-hidden">
            {monthImageUrl ? (
              <img
                src={monthImageUrl}
                alt={`Month ${selectedMonth} condition`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-sm text-slate-500">
                Add Month {selectedMonth} image in src/assets/images
              </div>
            )}
          </div>
          <p className="mt-2 text-xs text-slate-500 text-center md:text-right">
            Month {selectedMonth} condition
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhaseDetails;
