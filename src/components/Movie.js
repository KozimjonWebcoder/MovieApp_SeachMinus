import React from "react";
export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  return (
      <div className="cardHead" key={imdbID}>
          <img src={Poster}/>
          <div className="info_content">
              <p className="waves-effect waves-light btn-small">{Title}</p>
              <p className="waves-effect  btn-small">{Year}</p>
              <p className="waves-effect waves-light btn-small">{Type}</p>
          </div>
      </div>
  );
}
