export const Contact = () => {
  return (
    <div className="h-[15vh] md:h-[100vh] flex items-center justify-center">
      <div className="flex justify-center gap-6">
        <a
          href="mailto:grace.carandang@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.simpleicons.org/gmail/black"
            alt="Email"
            className="w-8 h-8 hover:opacity-75 transition"
          />
        </a>
        <a
          href="https://github.com/sorbetes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.simpleicons.org/github/black"
            alt="GitHub"
            className="w-8 h-8 hover:opacity-75 transition"
          />
        </a>
        <a
          href="https://linkedin.com/in/grace-carandang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
            alt="LinkedIn"
            className="w-8 h-8 hover:opacity-75 transition"
          />
        </a>
      </div>
    </div>
  );
};
