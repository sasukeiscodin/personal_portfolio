import Image from "next/image";

/*
  Every image on the site goes through this frame. Without consistent chrome,
  screenshots look pasted in and cheapen the panels around them.

  `alt` must describe what the image DEMONSTRATES, not what it is, because screenshot
  text is invisible to screen readers and to search.
*/
export function Artifact({
  src,
  alt,
  caption,
  meta,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  meta?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <figure className="border border-border bg-panel">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="flex items-baseline justify-between gap-4 border-t border-border px-4 py-2.5">
        <span className="font-mono text-2xs uppercase tracking-[0.12em] text-faint">
          {caption}
        </span>
        {meta && (
          <span className="shrink-0 font-mono text-2xs uppercase tracking-[0.1em] text-faint">
            {meta}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
