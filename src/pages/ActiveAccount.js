import { useLocation, useNavigate } from "react-router-dom";
import { handleCallApiActiveAccount } from "../service/authenticationService";

export default function ActiveAccount() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("UserId");
  handleCallApiActiveAccount(userId)
    .then((e) => {
      console.log(e);
      navigate("/login?active=true");
    })
    .catch((e) => {
      console.log(e);
    });
}
