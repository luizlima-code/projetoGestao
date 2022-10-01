import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const Validacao = () => {
  const navigate = useNavigate();
  const token: any = localStorage.getItem('@Token');
  let decodedToken: any = jwt_decode(token);
  let currentDate = new Date();

  if (decodedToken.exp * 1000 < currentDate.getTime()) {
    navigate("/");
    toast.error('Login expirado! Entre novamente');
  } else {
    console.log("Valid token");
  }
}