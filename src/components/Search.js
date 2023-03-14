import React from "react";
import { useFormik } from "formik";

export const SearchForm = ({ onSearch }) => {
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {
      onSearch(values.searchTerm);
    },
  });

  return (
    <form className="section__search" onSubmit={formik.handleSubmit}>
      <input
        className="section__search__input"
        placeholder="Filter by name..."
        id="searchTerm"
        name="searchTerm"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.searchTerm}
      />
    </form>
  );
};
