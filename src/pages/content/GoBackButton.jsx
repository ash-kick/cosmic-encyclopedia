import React from "react";
import { useNavigate } from "react-router-dom";

export default function GoBackButton() {
     let navigate = useNavigate();
     return (
          <button
               className="go-back-button"
               onClick={() => navigate(-1)}>
               ← Go Back
          </button>
     );
}
