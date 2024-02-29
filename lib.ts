import axios from "axios";
import { cookies } from "next/headers";
export async function login(formData: FormData) {
  const Cookies = cookies();
  const user = {
    name: formData.get("name"),
    password: formData.get("password"),
  };

  try {
    const formData = new FormData();
    const response = await axios.post(
      "https://kentfilm.up.railway.app/api/login",
      formData
    );
    console.log(response.data);
    if (response.data.status === true) {
      cookies().set({ name: "isLoggedIn", value: "true" });
    } else {
      console.log(response.data.message);
      console.log("Error");
    }
  } catch (err) {
    console.log(err);
  }
}
