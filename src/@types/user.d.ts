interface ReqLogin {
  username: string;
  password: string;
}
interface ResAuthApi extends Res {
  result: {
    accessToken: string;
    refreshToken: string;
  };
}

interface ReqRegister {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface ReqFotgotPassword {
  email: string;
}
interface ReqResetPassword {
  password: string;
  confirm_password: string;
}
interface ReqChangePassword {
  old_password: string;
  password: string;
  confirm_password: string;
}
interface ResLogin extends ActionRedux {}
