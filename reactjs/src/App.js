import React from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const firstName = "Ilyass"; // Change or leave empty ("") to test condition

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "22rem", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
        <Image />
        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center">
        {firstName ? (
          <>
            <h3>Hello, {firstName} 👋</h3>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="hello"
              style={{ width: "80px", marginTop: "10px" }}
            />
          </>
        ) : (
          <h3>Hello, there!</h3>
        )}
      </div>
    </div>
  );
}

export default App;
