const SectionHeader = ({
  badgeIcon: BadgeIcon,
  badgeText,
  titlePrefix,
  titleHighlight,
  description,
  children,
}) => {
  return (
    <div className="text-center space-y-4 max-w-2xl mx-auto">
      {badgeText && (
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-950/40 px-4 py-1.5 text-xs font-mono text-blue-400 border border-blue-500/30">
          {BadgeIcon && <BadgeIcon size={14} />}
          <span>{badgeText}</span>
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {titlePrefix}{" "}
        <span className="bg-gradient-to-r from-white via-zinc-100 to-blue-400 bg-clip-text text-transparent">
          {titleHighlight}
        </span>
      </h1>
      {description && (
        <p className="text-zinc-400 text-sm sm:text-base">{description}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
