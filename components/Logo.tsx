import NextLink from 'next/link';

export const Logo = () => {
  return (
    <NextLink href="/">
      <div className="flex items-center gap-2 relative select-none">
        <p className="absolute right-0 top-0 text-xxs font-semibold px-1.5 rounded-sm text-color2Base">
          devnet
        </p>
        <img
          className="w-auto h-17 cursor-pointer mb-0"
          src="/logo.png"
          alt="Pandawans"
        />
      </div>
    </NextLink>
  );
};
