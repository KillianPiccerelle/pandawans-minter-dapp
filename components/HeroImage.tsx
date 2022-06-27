export const HeroImage = () => {
  return (
    <div className="min-w-400 h-100 flex justify-end">
      <div className="p-10 bg-darker rounded-2xl select-none drop-shadow-[0_0px_25px_rgba(0,0,0,.8)] flex bg-gradient-to-r from-darkBase to-darker">
        <img src="/img.gif" alt="" width="300px" height="300px" />
      </div>
    </div>
  );
};
