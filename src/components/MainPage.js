import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../reducers/userSlice";
import logo from "../images/logo.png";
import Card from "./Card";
import Login from "./Login";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const sortedCharacters = [...data].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const clientWidth = document.body.clientWidth;
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get("page") || "1", 10);
    setCurrentPage(page - 1);
  }, [location.search]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name") || "";
    const page = params.get("page") || 1;
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
      );

      setData(response.data.results);
      setTotalPages(response.data.info.pages);
    };
    fetchData();
  }, [currentPage]);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: ({ search }) => {
      const name = search.trim();
      navigate(`/?page=1&name=${name}`);
      const params = new URLSearchParams(window.location.search);
      const page = params.get("page") || 1;
      const fetchData = async () => {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`
        );

        setData(response.data.results);
        setTotalPages(response.data.info.pages);
      };
      fetchData();
      formik.resetForm();
    },
  });

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    const name = new URLSearchParams(window.location.search).get("name") || "";
    navigate(`/?page=${selectedPage + 1}&name=${name}`);
  };

  const handleCardClick = (id) => {
    navigate(`/characters/${id}`);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/");
  };

  return (
    <>
      <section className="section">
        <div className="section__wrapper">
          {isLoggedIn ? (
            <button className="section__logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <></>
          )}
          <Link to="/" className="section__logo">
            <img
              className="section__logo__image"
              src={logo}
              alt="Logo Rick and Morty"
            />
          </Link>
          {!isLoggedIn ? (
            <Login />
          ) : (
            <>
              {data ? (
                <ul className="section__cards">
                  <form
                    className="section__search"
                    onSubmit={formik.handleSubmit}
                  >
                    <label htmlFor="search">
                      <input
                        className="section__search__input"
                        id="search"
                        placeholder="Filter by name..."
                        name="search"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.search}
                      />
                    </label>
                  </form>

                  {sortedCharacters.map(({ id, image, name, gender }) => {
                    return (
                      <Card
                        key={id}
                        id={id}
                        gender={gender}
                        image={image}
                        name={name}
                        onClick={() => handleCardClick(id)}
                      />
                    );
                  })}
                </ul>
              ) : (
                <p>Loading data...</p>
              )}
              <ReactPaginate
                pageCount={totalPages}
                pageRangeDisplayed={clientWidth > 500 ? 5 : 1}
                marginPagesDisplayed={clientWidth > 500 ? 2 : 0}
                forcePage={currentPage}
                // initialPage={currentPage}
                onPageChange={handlePageClick}
                containerClassName={"section__pagination"}
                activeClassName={"active"}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MainPage;
