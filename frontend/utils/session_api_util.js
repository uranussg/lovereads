export const signup = (formUser) => {
    // debugger;
    return $.ajax({
      method: "POST",
      url: "/api/users",
      data: {
        user: formUser
      }
    });
  };
  
  export const login = (formUser) => {
    // debugger
    return $.ajax({
      method: "POST",
      url: "/api/session",
      data: {
        user: formUser
      }
    });
    // debugger
  };
  
  export const logout = () => {
    return $.ajax({
      method: "DELETE",
      url: "/api/session"
    });
  };
  