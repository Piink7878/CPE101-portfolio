import { DownloadIcon, ScrollArrow } from "@/components/icons/HeroIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1d44] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,118,255,0.22),_transparent_35%),radial-gradient(circle_at_80%_55%,_rgba(56,118,255,0.24),_transparent_28%),linear-gradient(180deg,_#10234f_0%,_#0b1d44_40%,_#102857_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(174,197,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(174,197,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_85%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,10,25,0.08)_55%,rgba(3,10,25,0.28)_100%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 text-center sm:px-10 lg:px-16">
        <div className="rounded-full border border-white/10 bg-white/8 px-5 py-2 text-[0.72rem] font-medium tracking-[0.26em] text-sky-100/90 shadow-[0_8px_28px_rgba(15,23,42,0.18)] backdrop-blur-md sm:px-6 sm:text-[0.78rem]">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-300 align-middle shadow-[0_0_16px_rgba(125,211,252,0.8)]" />
          2nd Year · Computer Engineering · KMUTT
        </div>

        <h1 className="mt-10 max-w-5xl text-[clamp(3rem,8vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.06em] text-white sm:mt-12">
          Hi, I&apos;m{" "}
          <span className="text-[#8fc3ff] drop-shadow-[0_0_20px_rgba(143,195,255,0.16)]">
            Benyapha
          </span>{" "}
          Rattanakhunodom
        </h1>

        <a
          href="/cv.pdf"
          download
          className="mt-16 inline-flex items-center gap-3 rounded-[1.1rem] border border-white/18 bg-white/6 px-7 py-4 text-[1.05rem] font-medium text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] backdrop-blur-md transition duration-300 ease-out hover:border-white/28 hover:bg-white/10 hover:shadow-[0_20px_46px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
        >
          Download CV
          <DownloadIcon />
        </a>

        <div className="mt-auto flex flex-col items-center gap-2 pb-8 pt-24 text-[0.72rem] font-semibold tracking-[0.32em] text-white/42 sm:pb-10">
          <span>SCROLL</span>
          <ScrollArrow />
        </div>
      </div>

      <div id="home-end" className="absolute bottom-0 h-px w-px" aria-hidden="true" />
    </section>
  );
}
