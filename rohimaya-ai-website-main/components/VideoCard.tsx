export type VideoCardProps = {
  title: string;
  duration: string;
  thumbnail?: string;
  videoUrl?: string;
};

export default function VideoCard({ title, duration, thumbnail, videoUrl }: VideoCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30">
      <div className="relative aspect-video bg-lunarBlue/20">
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-lunarBlue/50">
            <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>
        )}
        <div className="absolute bottom-2 right-2 rounded bg-eclipseNavy/90 px-2 py-1 text-xs text-moonWhite">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-moonWhite group-hover:text-peacockTeal">
          {title}
        </h3>
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-peacockTeal underline"
          >
            Watch video →
          </a>
        )}
      </div>
    </div>
  );
}
