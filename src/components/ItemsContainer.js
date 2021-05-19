import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../redux";

function ItemsContainer({ itemsData, fetchItems }) {
  useEffect(() => {
    fetchItems();
  }, []);
  console.log(itemsData);
  return itemsData.loading ? (
    <h2>Loading</h2>
  ) : itemsData.error ? (
    <h2>{itemsData.error}</h2>
  ) : (
    <div>
      <h2>Items List</h2>
      <div className="row">
        {itemsData &&
          itemsData.items &&
          itemsData.items.map((item) => (
            <div className="col-sm-4">
              <div
                className="card"
                style={{ width: "300px", height: "400px", padding: "10px" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width="300px"
                  height="400px"
                  className="card-img-top"
                  onClick={(e) => {
                    alert(item.id);
                  }}
                />
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
