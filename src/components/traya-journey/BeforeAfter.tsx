import { useState } from "react";

type MonthImage = {
  month: number;
  imageFile: string;
};

type BeforeAfterProps = {
  monthImages?: MonthImage[];
};

function BeforeAfter({ monthImages }: BeforeAfterProps) {
  const [activeTab, setActiveTab] = useState("before");

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

  const beforeFile = monthImages?.find((m) => m.month === 1)?.imageFile;
  const afterFile = monthImages?.find((m) => m.month === 5)?.imageFile;

  const beforeImageUrl = getAssetUrlByFile(beforeFile);
  const afterImageUrl = getAssetUrlByFile(afterFile);

  const activeImageUrl =
    activeTab === "before" ? beforeImageUrl : afterImageUrl;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">
          Before / After
        </h2>
        <div className="inline-flex items-center border border-slate-300 rounded overflow-hidden text-sm">
          <button
            onClick={() => setActiveTab("before")}
            className={[
              "px-4 py-2 font-medium transition-all border-r border-slate-300",
              activeTab === "before"
                ? "bg-white text-slate-900"
                : "bg-slate-100 text-slate-500",
            ].join(" ")}
          >
            Before
          </button>
          <button
            onClick={() => setActiveTab("after")}
            className={[
              "px-4 py-2 font-medium transition-all",
              activeTab === "after"
                ? "bg-white text-slate-900"
                : "bg-slate-100 text-slate-500",
            ].join(" ")}
          >
            After
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto aspect-4/3 bg-white border border-slate-200 rounded-xl overflow-hidden">
          {activeImageUrl ? (
            <img
              src={activeImageUrl}
              alt={activeTab === "before" ? "Before" : "After"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-slate-500">
              Add images in src/assets/images (Month 1 & Month 5)
            </div>
          )}
        </div>
        <p className="mt-3 text-xs text-slate-500 text-center">
          Showing {activeTab === "before" ? "Month 1" : "Month 5"} image
        </p>
      </div>
    </div>
  );
}

export default BeforeAfter;
