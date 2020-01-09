 import axios from "axios";


 // axios document
 export const getdocument = () => dispatch => {
 
    axios.get("/listdocument").then(res =>
      dispatch({
        type: "GET_DOCUMENTS",
        payload: res.data
        
      })
    
    );
  };
  export const adddocument = document => dispatch => {
    axios.post("/listdocument", document).then(res => dispatch(getdocument()));
  };
  
  export const deletedocument = id => dispatch => {
    axios.delete(`/listdocument/${id}`).then(res => dispatch(getdocument()));
  };
  
  export const updatedocument = (id, document) => dispatch => {
    axios
      .put(`/updatedocument/${id}`, document)
      .then(res => dispatch( getdocument()));
  };



  // register