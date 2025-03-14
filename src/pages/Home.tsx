import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <div className="flex w-12/12 h-[100vh] overflow-y-auto flex-col justify-center items-center gap-4 bg-gray-900">
      <a href="/" className="text-xl font-bold">
        <svg
          className="w-10 h-10 fill-white"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.165c-3.338.725-4.042-1.61-4.042-1.61-.546-1.39-1.334-1.758-1.334-1.758-1.09-.744.083-.729.083-.729 1.205.086 1.84 1.24 1.84 1.24 1.07 1.834 2.809 1.305 3.49.997.108-.775.42-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.527.116-3.18 0 0 1.008-.323 3.3 1.23a11.484 11.484 0 013.006-.404c1.02.005 2.047.138 3.007.404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.24 2.877.117 3.18.77.84 1.234 1.91 1.234 3.22 0 4.607-2.805 5.622-5.475 5.92.432.374.814 1.103.814 2.222v3.293c0 .32.192.692.8.577C20.565 21.796 24 17.303 24 12c0-6.627-5.372-12-12-12z"
          />
        </svg>
      </a>
      <h1 className="text-xl font-bold text-white">GITHUB REPO EXPLORER</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
