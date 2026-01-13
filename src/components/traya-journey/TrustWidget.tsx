type Review = {
  id: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "User 1",
    rating: 5,
    title: "Hair fall reduced in 6 weeks",
    body: "Started seeing less hair on my pillow and shower drain. The routine is easy to follow — consistency helps.",
    verified: true,
  },
  {
    id: "r2",
    name: "User 2",
    rating: 5,
    title: "Scalp feels cleaner",
    body: "Dandruff and itchiness went down. The plan feels structured month by month. Happy with progress so far.",
    verified: true,
  },
  {
    id: "r3",
    name: "User 3",
    rating: 4,
    title: "Not instant, but visible change",
    body: "Didn’t see much in month 1, but hair fall stabilised by month 2. Baby hair is visible now.",
    verified: true,
  },
  {
    id: "r4",
    name: "User 4",
    rating: 4.5,
    title: "Good improvement, needs patience",
    body: "Month 1 was slow, but by month 3 hair fall felt controlled. I like that the plan is structured and easy to follow.",
    verified: true,
  },
];

function Stars({ rating }: { rating: number }) {
  const safe = Math.max(0, Math.min(5, Number(rating) || 0));

  return (
    <div
      className="flex gap-0.5 text-amber-400 text-sm"
      aria-label={`${safe} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <span
          key={idx}
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: (() => {
              const fill = Math.max(0, Math.min(1, safe - idx));
              const pct = Math.round(fill * 100);
              return `linear-gradient(90deg, #fbbf24 ${pct}%, #cbd5e1 ${pct}%)`;
            })(),
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TrustWidget() {
  const averageRating = 4.8;
  const totalReviews = 1200;

  return (
    <section className="w-full">
      <div className="text-center mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb339] mb-2">
          Verified Reviews
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-bold text-slate-900">
            {averageRating.toFixed(1)}/ 5.0
          </span>
          <Stars rating={averageRating} />
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Based on {totalReviews.toLocaleString()}+ verified customer reviews
        </p>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
        {REVIEWS.map((review) => (
          <article
            key={review.id}
            className="min-w-[260px] sm:min-w-[320px] bg-slate-50 border border-slate-200 rounded-xl p-4 snap-start"
          >
            <div className="flex items-center justify-between mb-2">
              <Stars rating={review.rating} />
              {review.verified ? (
                <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 rounded-full px-2 py-0.5">
                  Verified
                </span>
              ) : null}
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-1">
              {review.title}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {review.body}
            </p>
            <p className="text-xs text-slate-500 mt-3">By {review.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TrustWidget;
