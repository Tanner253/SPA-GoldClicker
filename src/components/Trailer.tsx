export function Trailer() {
  return (
    <section className="trailer" id="trailer">
      <div className="trailer-inner reveal">
        <h2>Watch the trailer</h2>
        <iframe
          className="trailer-frame"
          src="https://www.youtube-nocookie.com/embed/EF_EbKS-NsM?rel=0&playsinline=1"
          title="Gold Clicker Mining game trailer"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    </section>
  )
}
