import packageJson from '../package.json';

export const Footer = () => {
  return (
    <div className="w-screen h-30 bg-darker text-white flex items-center justify-center">
      <div className="myContainer text-sm font-normal text-center">
        <div>Elven Tools Dapp Template (v{`${packageJson.version}`})</div>
        <div className="text-xs font-thin">
          All for free. Please support the project. Give it credit and tell the
          world about it. Attribution is not required but welcomed in the form
          of a backlink.
        </div>
        <div className="text-xs font-bold">
          <a
            className="text-color3Base"
            href="https://www.elven.tools"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            elven.tools
          </a>{' '}
          ⚡{' '}
          <a
            className="text-color3Base"
            href="https://www.julian.io"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            julian.io
          </a>
        </div>
      </div>
    </div>
  );
};
