import axios from "axios";

export class GetUserProfile {
  async getInfo(token): Promise<any> {
    //  const resp = await axios.get(`https://api.linkedin.com/v2/${token}`, {
    //    headers: {
    //      Authorization: `Bearer ${token}`
    //    },
    //  });
    const resp = await axios
      .get(`https://platzimaster.us.auth0.com/userinfo`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res);
    return resp;
  }
}
export const getUserProfile = new GetUserProfile();
