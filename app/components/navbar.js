"use client";

import Link from "next/link";

export default function Navbar({
  setSearchQuery,
  sort,
  setSort,
  allCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="navbar bg-base-100 z-30 flex-row-reverse">
      {/* Title */}
      <div className="navbar-end flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          FakeStore
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* Search bar */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* Full menu for large screens */}
        <div className="hidden lg:flex z-30">
          <ul className="menu menu-horizontal px-1">
            {/* Sort */}
            <li>
              <details>
                <summary>Sort</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li
                    className={
                      "my-1" +
                      " " +
                      (sort === 1 ? "border-2 border-primary rounded-xl" : "")
                    }
                  >
                    <a
                      onClick={() => {
                        sort === 1 ? setSort(0) : setSort(1);
                      }}
                    >
                      Price: Ascending
                    </a>
                  </li>
                  <li
                    className={
                      "my-1" +
                      " " +
                      (sort === -1 ? "border-2 border-primary rounded-xl" : "")
                    }
                  >
                    <a
                      onClick={() => {
                        sort === -1 ? setSort(0) : setSort(-1);
                      }}
                    >
                      Price: Descending
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            {/* Filter */}
            <li>
              <details>
                <summary>Filter</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  {allCategories.map((category) => (
                    <li
                      key={category}
                      className={
                        "my-1" +
                        " " +
                        (selectedCategory === category
                          ? "border-2 border-primary rounded-xl"
                          : "")
                      }
                    >
                      <a
                        onClick={() =>
                          selectedCategory === category
                            ? setSelectedCategory("")
                            : setSelectedCategory(category)
                        }
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* Hamburger menu for smaller screens */}
      <div className="dropdown z-30">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {/* Sort */}
          <li>
            <a>Sort</a>
            <ul className="p-2">
              <li
                className={
                  "my-1" +
                  " " +
                  (sort === 1 ? "border-2 border-primary rounded-xl" : "")
                }
              >
                <a
                  onClick={() => {
                    sort === 1 ? setSort(0) : setSort(1);
                  }}
                >
                  Price: Ascending
                </a>
              </li>
              <li
                className={
                  "my-1" +
                  " " +
                  (sort === -1 ? "border-2 border-primary rounded-xl" : "")
                }
              >
                <a
                  onClick={() => {
                    sort === -1 ? setSort(0) : setSort(-1);
                  }}
                >
                  Price: Descending
                </a>
              </li>
            </ul>
          </li>
          {/* Filter */}
          <li>
            <a>Filter</a>
            <ul className="p-2 bg-base-100 rounded-t-none">
              {allCategories.map((category) => (
                <li
                  key={category + "hm"}
                  className={
                    "my-1" +
                    " " +
                    (selectedCategory === category
                      ? "border-2 border-primary rounded-xl"
                      : "")
                  }
                >
                  <a
                    onClick={() =>
                      selectedCategory === category
                        ? setSelectedCategory("")
                        : setSelectedCategory(category)
                    }
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
