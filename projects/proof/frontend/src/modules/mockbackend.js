const MockBackend = function () {};

MockBackend.prototype.signup = ({
  name, surname, email, password,
}) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!name || !surname || !email || !password) {
      reject(new Error('Please provide all parameters!'));
    } else {
      resolve('Sign up successful!');
    }
  }, 3000);
});

MockBackend.prototype.login = ({
  email, password,
}) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!email || !password) {
      reject(new Error('Please provide login parameters!'));
    } else {
      resolve('Login successful');
    }
  }, 3000);
});

MockBackend.prototype.profile = () => new Promise((resolve) => {
  const userInfo = {
    image: 'http://i.pravatar.cc/300',
    name: 'Doyin',
    surname: 'Olarewaju',
    email: 'doyinolarewaju@gmail.com',
  };
  setTimeout(() => {
    resolve(userInfo);
  }, 3000);
});

MockBackend.prototype.activate = () => setTimeout(() => Promise.resolve('Activated'), 3000);

export default new MockBackend();
